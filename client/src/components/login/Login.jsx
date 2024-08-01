import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="">
      <div className="container">
        <form onSubmit={onSubmitHandler}>
          <div className="footer_section_2">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-3">
                <h2 className="account_text">Login</h2>
                <input
                  type="email"
                  className="email_text"
                  placeholder="Enter Your Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="email_text"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="subscribr_bt">
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
