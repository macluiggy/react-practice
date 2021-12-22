import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
//create a list of 10 users with id, name, email, phone, website
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
const ReactRouter2 = () => {
  const navigate = useNavigate();
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <Link to={`/${user.id}`}>got to</Link>
            <p>{user.username}</p>
            <p>{user.age}</p>
            {/* <button onClick={() => navigate(`/${user.id}`)}>go to user</button> */}
            <Routes>
              <Route path={`/${user.id}`} element={<User {...user} />}></Route>
            </Routes>
          </div>
        );
      })}
    </div>
  );
};

const User = ({ name, age, id, username }) => {
  return (
    <div key={id}>
      <p>{name}</p>
      <p>{age}</p>
      <p>{username}</p>
    </div>
  );
};

export default ReactRouter2;
