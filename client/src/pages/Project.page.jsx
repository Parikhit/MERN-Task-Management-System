import { Link, useParams } from 'react-router-dom';

import Spinner from '../components/Spinner.component';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../queries/project.query';

import ClientInfo from '../components/ClientInfo.component';
import DeleteProjectButton from '../components/DeleteProjectButton.component';
import EditProjectForm from '../components/EditProjectForm.component';

const ProjectPage = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: { id },
    });

    if (loading) return <Spinner />;

    if (error) return <p>Something went wrong!</p>;

    const { id: projectId, name, description, status, client } = data.project;

    return (
        <>
            {!loading && !error && (
                <div className='mx-auto w-75 card p-5'>
                    <Link
                        to='/'
                        className='btn btn-light btn-sm w-25 d-inline ms-auto'
                    >
                        Back
                    </Link>

                    <h1>{name}</h1>
                    <p>{description}</p>

                    <h5 className='mt-3'>Project Status</h5>
                    <p className='lead'>{status}</p>

                    <ClientInfo client={client} />

                    <EditProjectForm project={data.project} />

                    <DeleteProjectButton projectId={projectId} />
                </div>
            )}
        </>
    );
};

export default ProjectPage;
