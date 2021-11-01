import { HomeRounded } from "@mui/icons-material"
import { NavLink, withRouter } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import resumeData from '../../utils/resumeData';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

function Header(props){

    const pathName = props?.location?.pathName;

    return(
        <Navbar expand='lg' sticky='top' className='header'>
            {/* Home Link */}
            <Nav.Link as={NavLink} to='/' className='header_home'>
                <Navbar.Brand className='header_home_icon'>
                    <HomeRounded/>
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle/>

            {/* NavBar Items */}
            <Navbar.Collapse>
                {/* Pages */}
                <Nav className='header_pages'>
                    {/* Resume Link */}
                    <Nav.Link 
                    as={NavLink} 
                    to='/' 
                    className={pathName === '/' ? 'header_link active' : 'header_link'}>
                        Resume
                    </Nav.Link>

                    {/* Portfolio Link */}
                    <Nav.Link 
                    as={NavLink} 
                    to='/portfolio' 
                    className={pathName === '/portfolio' ? 'header_link active' : 'header_link'}>
                        Portfolio
                    </Nav.Link>
                </Nav>

                {/* Socials */}
                <div className='header_socials'>
                    {resumeData.socials.map(social => (
                        <a 
                        key={social.name} 
                        href={social.link} 
                        target="_blank" 
                        rel="noreferrer">
                            {social.icon}
                        </a>
                    ))}
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default withRouter(Header);