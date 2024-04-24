import AddClientsModal from '../components/AddClientsModal.component';
import AddProjectsModal from '../components/AddProjectModal.component';
import Clients from '../components/Clients.component';
import Projects from '../components/Projects.component';

const HomePage = () => {
    return (
        <>
            <div className='d-flex gap-3 mb-4'>
                <AddClientsModal />
                <AddProjectsModal />
            </div>
            <Projects />
            <hr />
            <Clients />
        </>
    );
};

export default HomePage;
