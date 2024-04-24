import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { DELETE_PROJECT } from '../mutations/project.mutation';
import { GET_PROJECTS } from '../queries/project.query';
import { useMutation } from '@apollo/client';

const DeleteProjectButton = ({ projectId }) => {
    const navigate = useNavigate();

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: { id: projectId },
        onCompleted: () => navigate('/'),
        refetchQueries: [{ query: GET_PROJECTS }],
    });

    return (
        <div className='d-flex mt-5 ms-auto'>
            <button
                className='btn btn-danger m-2'
                onClick={deleteProject}
            >
                <FaTrash /> Delete Project
            </button>
        </div>
    );
};

export default DeleteProjectButton;

DeleteProjectButton.propTypes = {
    projectId: PropTypes.string,
};
