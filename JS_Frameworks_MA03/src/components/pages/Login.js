import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Heading from "../partials/Heading";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .matches(/^(?=.*[\w])(?=.*[\W])[\w\W]{8,}$/)
    .required("Password is required")
});

const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  function onSubmit(data) {
    console.log("Data: ", data);
  }

  return (
    <div>
      <Heading content={"Login page"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={"form-group"}>
          <input
            type="text"
            name={"username"}
            placeholder={"Username"}
            ref={register({ required: true })}
          />
          {errors.username && <p>Username is required</p>}
        </div>

        <div className={"form-group"}>
          {" "}
          <input
            type="password"
            name={"password"}
            ref={register({ required: true })}
          />
          {errors.password && <p>Password is required</p>}
        </div>
        <button type={"submit"}>Login</button>
      </form>
    </div>
  );
};

export default Login;
