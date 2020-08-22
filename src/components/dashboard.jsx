import React from "react";
import Menu from "./menu";
import Home from "./home";
import Abilities from "./abilities/abilities";
import Experience from "./experience";
import Contact from "./contact";
import Projects from "./projects";
import Formation from "./formation";
import { Route, BrowserRouter, Switch } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div className="title">
            <h1>Smarzyk Mathieu</h1>
            <hr />
            <small>Développeur Web</small>
          </div>

          <div>
            <Menu />
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/Abilities" component={Abilities} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Experience" component={Experience} />
            <Route path="/Formation" component={Formation} />
            <Route path="/Hobbies" />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
