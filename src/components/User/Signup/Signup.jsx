import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Loading from "../../Accessory/Loading";

import { signupUser } from "../../../redux/actions/userAction";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser({ firstName, lastName, email, password }));
    setLoading(true);
    setTimeout(() => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setError("");
      setLoading(false);
      navigate("/");
    }, 1500);
  };

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      navigate("/");
    }
  }, [localStorage.getItem("userId"), navigate]);

  return (
    <div style={{ backgroundColor: "#fff", marginTop: "24px" }}>
      {loading ? (
        <Loading />
      ) : (
        <div className="comm-header">
          <div>{error}</div>
          <section className="login__section">
            <div className="login__div">
              <p className=" login__heading">Register</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
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
                  <button type="submit">Register</button>
                </div>
                <div className="l__fot dis-flex">
                  <div>If you already have an account, please</div>
                  <div
                    className="navig__signup"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
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

export default SignUp;
