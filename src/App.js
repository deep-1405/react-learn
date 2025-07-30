import React from "react";
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'; 
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
// props are just normal arguments to out function
// when it is said, i am passing props to our function, it is just like saying passing arguments to out function




const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet /> {/*this will be replaced by the component as per the path*/}
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);