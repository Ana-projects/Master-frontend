import React from "react";
import { FormData } from "./login.vm";

interface Props {
  onSubmit: (username: string, password: string) => void;
}

export const Login: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    username: "",
    password: "",
  });

  const handleChangeForm =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData.username, formData.password);
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
};
