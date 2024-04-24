import { FaReact } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { GrGraphQl } from 'react-icons/gr';
import { SiApollographql } from 'react-icons/si';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer text-white bg-black d-flex flex-column gap-1 align-items-center'>
            <div className='d-flex align-items-center justify-content-center'>
                <h6 className='text-info'>Made with ❤️ using </h6>
                <div className='d-flex gap-2'>
                    <DiMongodb
                        size={20}
                        style={{ color: 'green' }}
                    />
                    <SiExpress size={20} />
                    <FaReact
                        size={20}
                        style={{ color: ' #61DBFB' }}
                    />
                    <FaNodeJs
                        size={20}
                        style={{ color: 'green' }}
                    />
                    <GrGraphQl
                        size={20}
                        style={{ color: '#FC6C85' }}
                    />
                    <SiApollographql
                        size={20}
                        style={{ color: 'white' }}
                    />
                </div>
            </div>
            <h6>
                Copyright &#9400; {year} <span className='text-danger'>Parikhit Baruah</span>
            </h6>
        </footer>
    );
};

export default Footer;
