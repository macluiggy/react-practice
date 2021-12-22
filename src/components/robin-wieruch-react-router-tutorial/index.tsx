import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>React Router</h1>

      <Navigation />
      <Routes>
        <Route
          path="home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="users"
          element={
            <Layout>
              <Users />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

const Navigation = () => {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  );
};

const Users = () => {
  return (
    <>
      <h2>Users</h2>
    </>
  );
};

const Layout = ({ children }) => {
  return (
    <main style={{ padding: "10rem 0", backgroundColor: "red" }}>
      {children}
    </main>
  );
};
export default App;
