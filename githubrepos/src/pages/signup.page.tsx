import Button from "@material-tailwind/react/components/Button";
import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import FormInputComponent from "../components/form_input.component";
import { useAppDispatch } from "../core/store";
import { registerUser } from "../core/store/user/actions";

const SignupPage = () => {
  const dispatch = useAppDispatch();
  const [reload, setReload] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const onSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      registerUser(
        credentials.username,
        credentials.password,
        credentials.email
      )
    );
    setReload(!reload);
  };

  return (
    <div
      style={{ width: "100wh", height: "100vh" }}
      className="flex items-center justify-center"
    >
      <form
        autoComplete="off"
        onSubmit={onSubmit}
        style={{ width: "380px" }}
        className="bg-gray-100 rounded-lg
              flex flex-col items-center
              p-4 gap-3 drop-shadow-lg"
      >
        <h1 className="text-xl font-semibold text-gray-600">SIGN UP</h1>
        <FormInputComponent
          name="email"
          label="Email"
          value={credentials.email}
          onChange={onChange}
          type="text"
        />
        <FormInputComponent
          name="username"
          label="Username"
          value={credentials.username}
          onChange={onChange}
          type="text"
        />
        <FormInputComponent
          name="password"
          type="password"
          label="Password"
          value={credentials.password}
          onChange={onChange}
        />
        <FormInputComponent
          name="confirmPassword"
          type="password"
          label="Confirm password"
          value={credentials.confirmPassword}
          onChange={onChange}
        />
        <Button
          type="submit"
          variant="text"
          disabled={
            (credentials.username === "" && credentials.password === "") ||
            credentials.password !== credentials.confirmPassword
          }
        >
          Sign up
        </Button>
        <span>
          Already have an account?{" "}
          <Link className="text-blue-300" to="/login">
            Sign in!
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignupPage;
