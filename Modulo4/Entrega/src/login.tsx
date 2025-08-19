import React from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { UserContext } from "./user.context";

interface User {
  username: string;
  password: string;
}

export const LoginPage: React.FC = () => {
  const [user, setUser] = React.useState<User>({ username: "", password: "" });
  const { handleLogin } = React.useContext(UserContext);

  const handleChangeUser =
    (field: keyof User) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setUser({ ...user, [field]: e.target.value });

  return (
    <>
      <form onSubmit={() => handleLogin(user.username, user.password)}>
        <h2>Hello from login page</h2>

        <div>
          <div>
            <label>Username: </label>
            <input
              value={user.username}
              onChange={handleChangeUser("username")}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={user.password}
              onChange={handleChangeUser("password")}
            />
          </div>
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
};
