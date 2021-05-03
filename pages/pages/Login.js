import { useState } from "react";
import Layout from "../../components/MainLayout/Layout";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");

  const login = async (e) => {
    e.preventDefault();
    setNotification("Checking Your Credentials...");
    try {
      const query = await axios.post(
        `http://localhost:3300/api/v1/userauth/user-login`,
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      if (query.data.status !== "failed") {
        window.localStorage.setItem("is_logged_status", true);
        router.push("/");
      } else setNotification(query.data.message);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Layout title="Yoruba Community Online  : Login">
      <div className="container">
        <div className="tt-loginpages-wrapper">
          <div className="tt-loginpages">
            <Link href="/">
              <a className="tt-block-title">
                <Image
                  src="/yoruba_logo.png"
                  alt="site logo"
                  width="100"
                  height="50"
                />
                <div className="tt-title">
                  Welcome to "Yoruba Community Online"
                </div>
                <div className="tt-description">
                  Log into your account to unlock true power of community.
                </div>
              </a>
            </Link>
            <form className="form-default" onSubmit={login}>
              <div className="form-group">
                <label for="loginUserName">Username *</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="loginUserName"
                  placeholder="Enter Your Username *"
                  onChange={({ target: { value } }) => setUsername(value)}
                />
              </div>
              <div className="form-group">
                <label for="loginUserPassword">Password</label>
                <input
                  type="password"
                  name="name"
                  className="form-control"
                  id="loginUserPassword"
                  placeholder="Enter Your Password *"
                  onChange={({ target: { value } }) => setPassword(value)}
                />
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        id="settingsCheckBox01"
                        name="checkbox"
                      />
                      <label for="settingsCheckBox01">
                        <span className="check"></span>
                        <span className="box"></span>
                        <span className="tt-text">Remember me</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col ml-auto text-right">
                  <a href="#" className="tt-underline">
                    Forgot Password
                  </a>
                </div>
              </div>
              <div className="form-group">
                <button className="btn btn-secondary btn-block">Log in</button>
                {notification ? (
                  <div className="alert alert-secondary text-center">
                    {notification}
                  </div>
                ) : null}
              </div>

              <p>
                Don’t have an account?{" "}
                <a href="#" className="tt-underline">
                  Signup here
                </a>
              </p>
              <div className="tt-notes">
                By Logging in, signing in or continuing, I agree to our{" "}
                <a href="#" className="tt-underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="tt-underline">
                  Privacy Policy.
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
