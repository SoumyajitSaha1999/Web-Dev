// JAVASCRIPT
// const root = document.getElementById("root");

// const heading = document.createElement("h1");
// heading.textContent = "Hello world!";
// heading.className = "head";
// root.append(heading);
// console.log("JS element: ",heading);


// REACT
const reactHeading = React.createElement("h1", {className: "head", id: "reacHead"}, "Hello React!"); // createElement takes 3 arguments(1.Type, 2.Object, 3.Content)

// Content is the part of children. So, you can write it inside object. Like --
// const reactHeading = React.createElement("h1", {className: "head", id: "reacHead", children: "Hello React!"});
// console.log("React element: ", reactHeading);

ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);
