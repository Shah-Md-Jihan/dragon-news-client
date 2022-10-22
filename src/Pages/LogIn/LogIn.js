import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const LogIn = () => {

    const { providerEmailLogin } = useContext(AuthContext);

    const handleEmailLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        providerEmailLogin(email, password)
            .then(userInfo => {
                const user = userInfo.user;
            })
            .catch(e => console.error(e));
        form.reset();
    }
    return (
        <div>
            <h4 className="text-center text-warning">Please Login First!</h4>
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