import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';

import { FaTrash } from 'react-icons/fa';

import { DELETE_CLIENT } from '../mutations/client.mutation';
import { GET_CLIENTS } from '../queries/client.query';
import { GET_PROJECTS } from '../queries/project.query';

const ClientRow = ({ client }) => {
    const { name, email, phone } = client;
    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: { id: client.id },
        refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    });

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                <button
                    onClick={deleteClient}
                    className='btn btn-danger btn-sm'
                >
                    <FaTrash />
                </button>
            </td>
        </tr>
    );
};

export default ClientRow;

ClientRow.propTypes = {
    client: PropTypes.object,
};
