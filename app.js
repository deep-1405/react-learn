/*
<div id = "Parent">
    <div id = "child">
        <h1>
            I am an h1 tag
        </h1>
        <h2>
            I am an h2 tag
        </h2>
    </div>
</div>
*/
// this can be created using the following way
// so the third argument in the syntax is, children that you want to create inside of the element
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement(
                "h1",
                {},
                "I am an h1 tag"
            ),
            React.createElement(
                "h2",
                {},
                "I am an h2 tag"
            )
        ]
    )
)










// this is the way of creaeting h1 tag using the react
const heading = React.createElement(
    "h1",
    {},
    "hello world from react!"
)
// console.log(heading)
// this is not an h1 tag yet, this is an object, that will lead to tag creation
// this is just creating a heading element inside of the react
// {}, this object is the place where you will give attribute to the tags, e.g. giving id there, 
// ("h1", {id: "heading"}, "hello world from react!")
// ("h1", {xyz: "abc"}, "hello world from react!")
// here, children: "hello world from react!", 

// this is the way of placing the root using the create dom 
const root = ReactDOM.createRoot(document.getElementById("root")) // this creating a root inside of the react dom, so that we will use react library's method
// now the root is rendering the heading tag inside of it
// root.render(heading);
root.render(parent);
console.log(parent)
// /this render method is responsible behind converting, js into the h1 element, inside of the dom