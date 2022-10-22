import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvier = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        providerLogin(googleProvier)
            .then(result => {
                const user = result.user;
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleLogin} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Log in With Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Log in With Github</Button>
            </ButtonGroup>

            <div className='mt-5'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> What's App</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twich</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>

            <div>
                <BrandCarosel></BrandCarosel>
            </div>

        </div>
    );
};

export default RightSideNav;