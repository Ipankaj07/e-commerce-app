import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./login.css";
import Loading from "../../Accessory/Loading";
import { loginUser } from "../../../redux/actions/userAction";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((state) => state.user.isLoading);
  const error = useSelector((state) => state.user.isError);
  const isSuccess = useSelector((state) => state.user.isSuccess);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div style={{ backgroundColor: "#fff", marginTop: "24px" }}>
      {loading ? (
        <Loading />
      ) : (
        <div className="comm-header">
          <section className="login__section">
            <div className="login__div">
              <p className=" login__heading">Login</p>
              {error && (
                <div className="login__error">
                  Something Went Wrong Try Again
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                  <button type="submit">Login</button>
                </div>
                <div className="l__fot dis-flex">
                  <div>If you don't have an account, please</div>
                  <div
                    className="navig__signup"
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    Register Here
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Login;
