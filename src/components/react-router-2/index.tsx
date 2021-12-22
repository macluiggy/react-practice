import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
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
            {/* <Link to={`/user/${user.id}`}>got to</Link> */}
            {/* <button onClick={() => navigate(`/user/${user.id}`)}>
              go to user
            </button> */}
            <Routes>
              <Route
                path={`/user/${user.id}`}
                element={<User {...user} />}
              ></Route>
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
