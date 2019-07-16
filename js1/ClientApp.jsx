import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

/* ------previous App */
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Landing from "./Landing";
// import Search from "./Search";

// const Four04 = () => <h1>404</h1>;
// const MyTitle = function({ title }) {
//   // return React.createElement(
//   //   "div",
//   //   null,
//   //   React.createElement("h1", null, title)
//   // );
//   return (
//     <div>
//       <h1 style={{ color: "YellowGreen" }}>{title}</h1>
//     </div>
//   );
// };
// const MyFirstComponent = function() {
//   return (
//     <div id="myFirstComp">
//       <MyTitle title="GOT" />
//       <MyTitle title="BB" />
//       <MyTitle title="SG" />
//       <MyTitle title="Host" />
//     </div>
//   );
// };

// render(<MyFirstComponent />, document.getElementById("app"));

// const App = () => {
//   return (
//     // <HashRouter>
//     <BrowserRouter>
//       <div className="app">
//         <Switch>
//           <Route exact path="/" component={Landing} />
//           <Route path="/search" component={Search} />
//           <Route component={Four04} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// };
// render(<App />, document.getElementById("app"));
/* ------ */

const renderApp = () => {
  render(<App />, document.getElementById("app"));
};
renderApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
