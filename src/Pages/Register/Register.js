import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';

const Register = () => {
    useSetTitle('Register');
    const { providerRegister, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [terms, setTerms] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;

        const image = form.image.value;

        const email = form.email.value;
        const password = form.password.value;
        providerRegister(email, password)
            .then(userInfo => {
                const user = userInfo.user;
                setError('');
                handleUserUpdateProfile(name, image);
                navigate('/');
            })
            .catch(e => setError(e.message));
        form.reset();

    }

    const handleUserUpdateProfile = (name, imageUrl) => {
        console.log(name, imageUrl);
        const profile = {
            displayName: name,
            photoURL: imageUrl
        }
        // console.log(profile);
        updateUserProfile(profile)
            .then(p => { })
            .catch(error => console.error(error))
    }

    const handleTerms = event => {
        setTerms(event.target.checked);
    }
    return (
        <div>
            <h4 className="text-center text-warning">Please Register First!</h4>
            <span className="text-danger">{error}</span>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUserImage">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control name="image" type="text" placeholder="Enter url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                        onClick={handleTerms}
                        label={<>
                            Accept <Link to="/terms">Terms & Condition</Link>
                        </>} />
                </Form.Group>

                <Button variant="success" type="submit" disabled={!terms}>
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;