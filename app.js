import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - Reastaurant container
 *    - Restaurant card
 * Footer
 *  - copyright
 *  - link
 *  - address
 *  contact
 */
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
