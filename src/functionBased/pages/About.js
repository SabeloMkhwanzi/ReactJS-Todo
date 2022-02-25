import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Route, Link } from "react-router-dom";

import SinglePage from "./SinglePage";

const About = () => {
  const { url, path } = useRouteMatch();

  //Then, update the return statement so you have:
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Route path={`${path}/:slug`}>
        <SinglePage />
      </Route>
    </div>
  );
};
export default About;