import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// // const p1 =
// //   React.createElement("p", null, "This is paragraph 1");
// const p1 = <p>this is paragraph 1</p>;
//
// // const button =
// //   React.createElement("button",{class: "myButton"} , "this is the button");
// const button = <button className="myButton">this is the button</button>;
//
// // const myList =
// //   React.createElement("ul",{class: "myButton"} , [
// //     React.createElement("li", null, "first"),
// //     React.createElement("li", null, "second"),
// //     React.createElement("li", null, "third")
// //   ]);
// const myList =
//   <ul>
//     <li>first</li>
//     <li>second</li>
//     <li>third</li>
//   </ul>;
//
// // const myDiv =
// //   React.createElement("div", null, [p1,button,myList]);
// const myDiv = <div>{p1}{button}{myList}</div>;
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myDiv);
