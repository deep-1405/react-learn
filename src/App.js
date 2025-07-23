import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// props are just normal arguments to out function
// when it is said, i am passing props to our function, it is just like saying passing arguments to out function




const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
