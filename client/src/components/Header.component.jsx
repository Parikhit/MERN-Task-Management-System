import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <nav className='navbar bg-dark  mb-4 p-0'>
            <div className='container'>
                <Link
                    className='navbar-brand'
                    href='/'
                >
                    <div className='d-flex gap-3 align-items-center'>
                        <img
                            src={logo}
                            alt='logo'
                            className='mr-2 w-75'
                        />
                        <h1 className='text-primary'>
                            Task <span className='text-secondary'>Flow</span>
                        </h1>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
