import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseLayout from "../../layout/Course";
import Login from "../../Pages/Auth/Login/Login";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import CourseDetail from "../../Pages/CourseDetail/CourseDetail";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Course from "../../Pages/Course/Course";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/course',
        element: <CourseLayout></CourseLayout>,
        children: [
            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch("http://localhost:5000/all/course")
            }

        ]

    }


]);
