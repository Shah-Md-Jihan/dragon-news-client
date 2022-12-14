import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Category/Category";
import News from "../Pages/News/News";
import Register from "../Pages/Register/Register";
import LogIn from "../Pages/LogIn/LogIn";
import TermsAndCondition from "../Pages/Others/TermsAndCondition";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://127.0.0.1:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://127.0.0.1:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://127.0.0.1:5000/news/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            }
        ]
    }
]);