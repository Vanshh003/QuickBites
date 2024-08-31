import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';








const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

// the information that will tell the browserRouter that what will happen on a specific route/path... 
// a list of paths (an object) will be passed
const appRouter = createBrowserRouter([
    {
        // if my path is "/" then load the home page... i.e. appLayout compoent
        path: "/",             
        element: <AppLayout />,
        errorElement: <Error />,    // if the path has some error it will catch it and will show you the error page
    },
    {
        // if my path is "/about" then load the about compoent 
        path: "/about",
        element: <About />,
        errorElement: <Error />,
    },
    {
        // if my path is "/contact" then load the contact compoent 
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
    },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);