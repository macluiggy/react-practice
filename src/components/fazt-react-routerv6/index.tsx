import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useParams,
  Navigate,
} from "react-router-dom";
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    age: 35,
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    age: 32,
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    age: 45,
  },
];
const FaztReactRouterV6 = () => {
  return (
    <Routes>
      <Route path="/usuarios/" element={<Navigate to="/users" />} />
      <Route path="/users/" element={<UsersPage />} />
      <Route path="/users/:id" element={<UserPage />} />
    </Routes>
  );
};

const UserPage = () => {
  const { id } = useParams();
  const user = users.find((user) => user.id === Number(id));
  return (
    <div
      style={{
        backgroundColor: "gray",
      }}
    >
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>{user.age}</p>
          <p>{user.username}</p>
          <Link to="/users">Back</Link>
        </div>
      ) : (
        <div>
          <h1>User not found</h1>
        </div>
      )}
    </div>
  );
};
const UsersPage = () => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div
            key={user.id}
            style={{
              border: "1px solid black",
              width: "50%",
              margin: "0 auto",
            }}
          >
            <h1>{user.name} </h1>
            <p>{user.age}</p>
            <p>{user.username}</p>
            <Link to={`/users/${user.id}`}>Go to user page</Link>
          </div>
        );
      })}
    </div>
  );
};
export default FaztReactRouterV6;
