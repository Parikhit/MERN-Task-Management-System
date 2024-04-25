import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { id, name, status } = project;
    return (
        <div className='col-md-6'>
            <div className='card mb-3'>
                <div className='card-body'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className='card-title'>{name}</h5>

                        <Link
                            className='btn btn-light'
                            to={`/projects/${id}`}
                        >
                            View
                        </Link>
                    </div>
                    <p className='small'>
                        Status: <strong>{status}</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

ProjectCard.propTypes = {
    project: PropTypes.object,
};
