import { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const PedroTechReactRouterV6 = () => {
  return (
    <div>
      <a href="/about">about</a>
      <Routes>
        <Route path="/" element={<Home />}>
          <Fragment></Fragment>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile " element={<Profile />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
};
const Profile = () => {
  return <div>THIS IS THE PROFILE PAGE</div>;
};

const Home = () => {
  return <div>THIS IS THE HOME PAGE</div>;
};

const About = () => {
  return <div>THIS IS THE ABOUT PAGE</div>;
};
const ErrorPage = () => {
  return <div>THIS IS THE ERROR PAGE</div>;
};
export default PedroTechReactRouterV6;
