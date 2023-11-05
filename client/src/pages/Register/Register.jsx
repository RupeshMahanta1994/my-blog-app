import React from "react";
import "./Register.css";
const Register = () => {
  return (
    <div>
      <div className="register flex items-center justify-center">
        <div className="register-form">
          <form className="flex flex-col" action="">
            <label className="" htmlFor="">
              username
            </label>
            <input type="text" placeholder="username" />
            <label htmlFor="">Email</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="youremail@mail.com"
            />
            <label htmlFor="">Password</label>
            <input type="password" placeholder="password" />
            <p className="text-white font-semibold text-lg">
              If registered{" "}
              <a
                className="text-blue-300 underline capitalize cursor-pointer"
                href="/register"
              >
                login
              </a>
            </p>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
