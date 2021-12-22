import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const PedroTechReactRouterV6 = () => {
  return (
    <div>
      <a href="/about">about</a>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile " element={<Profile />}></Route>
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
export default PedroTechReactRouterV6;
