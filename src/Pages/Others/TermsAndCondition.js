import React from 'react';
import { Link } from 'react-router-dom';
import useSetTitle from '../../hooks/useSetTitle';

const TermsAndCondition = () => {
    useSetTitle('Terms & Condition');
    return (
        <div>
            <h4>Here is our terms and conditions.</h4>
            <span>Go Back to <Link to="/register">Register</Link></span>
        </div>
    );
};

export default TermsAndCondition;