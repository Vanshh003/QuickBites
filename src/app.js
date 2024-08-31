import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';








const AppLayout = () => {
    return (
        <div className="app">
            <Header />

            {/* if path = "/"  ... then render ... <Body /> */}
            {/* if path = "/about"  ... then render ... <About /> */}      
            {/* if path = /contact  ... then render ... <Contact /> */}

            
            {/* this outlet will be filled with the children acording to the path */}
            <Outlet />

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

        // children is a list of paths
        children: [
            {
                path: "/",
                element: <Body />,
            }, 
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],

        errorElement: <Error />,    // if the path has some error it will catch it and will show you the error page
    },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);