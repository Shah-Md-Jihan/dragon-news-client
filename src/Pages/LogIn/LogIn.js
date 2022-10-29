import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';

const LogIn = () => {
    useSetTitle('Login');
    const { providerEmailLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleEmailLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        providerEmailLogin(email, password)
            .then(userInfo => {
                const user = userInfo.user;
                setError('');
                navigate(from, { replace: true });
            })
            .catch(e => setError(e.message));
        form.reset();
    }
    return (
        <div>
            <h4 className="text-center text-warning">Please Login First!</h4>
            <span className="text-danger">{error}</span>
            <Form onSubmit={handleEmailLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>


                <Button variant="warning" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default LogIn;