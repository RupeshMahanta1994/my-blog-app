import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div>
      <div className="login flex items-center justify-center">
        <div>
          <form className="flex flex-col" action="">
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
              If not registered{" "}
              <a
                className="text-blue-300 underline capitalize cursor-pointer"
                href="/register"
              >
                click here
              </a>
            </p>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
