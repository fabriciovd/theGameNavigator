import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (

        <div className="container">
          <form
            className="login100-form validate-form"
            onSubmit={onSubmitHandler}
          >
            <span className="login100-form-title p-b-33">Account Login</span>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="emial"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input100-1"></span>
              <span className="focus-input100-2"></span>
            </div>
            <div
              className="wrap-input100 rs1 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input100-1"></span>
              <span className="focus-input100-2"></span>
            </div>
            <div className="container-login100-form-btn m-t-20">
              <button className="shop_bt w-10">Sign in</button>
            </div>
            <div className="text100-center">
              <span className="text100-center">Create an account?</span>
              <a href="#" className="txt1 hov1">
                Sign up
              </a>
            </div>
          </form>
        </div>


  );
}
