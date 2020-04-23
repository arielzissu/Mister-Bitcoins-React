import React from "react";
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App";
import NavBar from "./cmps/nav-bar";
import ContactPage from "./pages/contact-page";
import HomePage from "./pages/home-page";
import ContactDetails from "./pages/contact-details";
import Charts from "./pages/charts";
import EditPage from "./pages/edit-page";
import LoginPage from "./pages/login-Page";
import userService from "./services/user.service";

const history = createBrowserHistory();

function App() {
  return (
    <section>
      <Router history={history}>
        <NavBar />
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/contact/:id" component={ContactDetails} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/edit/:id?" component={EditPage} />
            <Route path="/charts" component={Charts} />
            <Route path="/login" component={LoginPage} />
            {/* <PrivateRoute path="/charts" component={Charts} /> */}
            {/* <PrivateRoute path="/charts">
              <Charts />
            </PrivateRoute> */}
          </Switch>
        </main>
      </Router>
    </section>
  );
}

// function PrivateRoute({ children, ...rest }) {
//   checkUser();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         checkUser() ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// async function checkUser() {
//   const user = await userService.getUser();
//   if (user.name) {
//     console.log("true", user.name);
//     return true;
//   } else {
//     console.log("false", user.name);
//     return false;
//   }
// }

export default App;
