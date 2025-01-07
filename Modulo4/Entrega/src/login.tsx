import React from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  username: string;
  password: string;
}

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<FormData>({
    username: "",
    password: "",
  });

  const handleChangeForm =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.username === "admin" && formData.password === "test") {
      navigate("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <>
      <form onSubmit={handleNavigation}>
        <h2>Hello from login page</h2>

        <div>
          <div>
            <label>Username: </label>
            <input
              value={formData.username}
              onChange={handleChangeForm("username")}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={formData.password}
              onChange={handleChangeForm("password")}
            />
          </div>
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
};
