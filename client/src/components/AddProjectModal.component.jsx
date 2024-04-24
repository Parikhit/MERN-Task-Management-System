import { useState } from 'react';
import { FaList } from 'react-icons/fa';

import { ADD_PROJECT } from '../mutations/project.mutation';
import { GET_CLIENTS } from '../queries/client.query';
import { GET_PROJECTS } from '../queries/project.query';
import { useMutation, useQuery } from '@apollo/client';

const AddProjectsModal = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [clientId, setClientId] = useState('');
    const [status, setStatus] = useState('new');

    const [addProject] = useMutation(ADD_PROJECT, {
        variables: { name, description, clientId, status },
        update(cache, { data: { addProject } }) {
            const { projects } = cache.readQuery({ query: GET_PROJECTS });

            cache.writeQuery({
                query: GET_PROJECTS,
                data: { projects: [...projects, addProject] },
            });
        },
    });

    //Get Clients for select

    const { loading, error, data } = useQuery(GET_CLIENTS);

    const resetForm = () => {
        setName('');
        setDescription('');
        setClientId('');
        setStatus('new');
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if ((name === '', description === '', status === ''))
            return alert('Please fill in all the fields!');

        addProject(name, description, clientId, status);
        resetForm();
    };

    if (loading) return null;
    if (error) return 'Something went wrong!';

    return (
        <>
            {!loading && !error && (
                <>
                    <button
                        type='button'
                        className='btn btn-primary'
                        data-bs-toggle='modal'
                        data-bs-target='#addProjectModal'
                    >
                        <div className='d-flex align-items-center'>
                            <FaList className='icon' />
                            <div>New Project</div>
                        </div>
                    </button>

                    <div
                        className='modal fade'
                        id='addProjectModal'
                        data-bs-backdrop='static'
                        data-bs-keyboard='false'
                        tabIndex='-1'
                        aria-labelledby='#addProjectModal'
                        aria-hidden='true'
                    >
                        <div className='modal-dialog'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h1
                                        className='modal-title fs-5'
                                        id='addProjectModal'
                                    >
                                        New Project
                                    </h1>
                                    <button
                                        type='button'
                                        className='btn-close'
                                        data-bs-dismiss='modal'
                                        aria-label='Close'
                                    ></button>
                                </div>
                                <div className='modal-body'>
                                    <form onSubmit={onSubmitHandler}>
                                        <div className='mb-3'>
                                            <label className='form-label'>Name</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='name'
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Description</label>
                                            <textarea
                                                className='form-control'
                                                id='description'
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                            ></textarea>
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Status</label>
                                            <select
                                                className='form-select'
                                                id='status'
                                                value={status}
                                                onChange={(e) => setStatus(e.target.value)}
                                            >
                                                <option value='new'>Not Started</option>
                                                <option value='progress'>In Progress</option>
                                                <option value='completed'>Completed</option>
                                            </select>
                                        </div>

                                        <div className='mb-3'>
                                            <label className='form-label'>Client</label>
                                            <select
                                                id='clientId'
                                                className='form-select'
                                                value={clientId}
                                                onChange={(e) => setClientId(e.target.value)}
                                            >
                                                <option>Select Client</option>
                                                {data.clients.map((client) => (
                                                    <option
                                                        key={client.id}
                                                        value={client.id}
                                                    >
                                                        {client.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <button
                                            type='submit'
                                            className='btn btn-primary'
                                            data-bs-dismiss='modal'
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default AddProjectsModal;
