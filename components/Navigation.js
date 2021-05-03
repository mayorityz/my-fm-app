import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import localStorage from "./../helpers/localStorage";
import { useRouter } from "next/router";

import {
  AiOutlineHome,
  AiOutlineFire,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLogout,
  AiOutlinePlusSquare,
  AiOutlineMail,
} from "react-icons/ai";

export default function Navigation() {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  let drawer = () => setToggle(!toggle);

  const logout = () => {
    try {
      window.localStorage.removeItem("is_logged_status");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="panel-menu mobile-main-menu" id="mobile-menu">
        <div className="mmpanels">
          <div className="mmpanel mmhidden" id="mm1"></div>
        </div>
      </nav>
      <header id="tt-header">
        <div className="container">
          <div className="row tt-row no-gutters">
            <div className="col-auto">
              <span className="toggle-mobile-menu">
                <AiOutlineMenu onClick={drawer} />
              </span>

              <div className="tt-logo">
                <Link href="/">
                  <Image
                    src="/yoruba_logo.png"
                    alt="site logo"
                    width="100"
                    height="50"
                  />
                </Link>
              </div>

              <div className="tt-desktop-menu">
                <nav>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>
                          <span>
                            <AiOutlineHome /> Home
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/trending">
                        <a>
                          <span>
                            <AiOutlineFire /> Trending
                          </span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-auto ml-auto">
              <div
                className="tt-account-btn toggle-mobile-menu"
                style={{ padding: "1" }}
              >
                <Link href="/pages/Login">
                  <a className="btn btn-primary">Log in</a>
                </Link>
                <Link href="/register">
                  <a className="btn btn-secondary">Sign up</a>
                </Link>
              </div>
              <div className="tt-user-info d-flex justify-content-center">
                <div className="tt-desktop-menu">
                  <nav>
                    <ul>
                      <li>
                        <a href="#">
                          <span>About Us</span>
                        </a>
                      </li>
                      {localStorage() === "isLoggedIn" ? (
                        <>
                          <li>
                            <Link href="/pages/Login">
                              <a>
                                <span>
                                  {" "}
                                  <AiOutlineLogin /> My Account
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/pages/Login">
                              <a>
                                <span>
                                  {" "}
                                  <AiOutlinePlusSquare /> New Post
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/pages/Login">
                              <a>
                                <span>
                                  {" "}
                                  <AiOutlineMail /> Inbox
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <a onClick={logout}>
                              <span>
                                {" "}
                                <AiOutlineLogout /> Logout
                              </span>
                            </a>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link href="/pages/Login">
                              <a>
                                <span>
                                  {" "}
                                  <AiOutlineLogin /> Login
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/register">
                              <a>
                                <span>
                                  <AiOutlineUserAdd /> Register
                                </span>
                              </a>
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={!toggle ? "" : "show_menu"}>
        <div className="close_nav_menu" onClick={drawer}>
          <AiOutlineClose />
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>New Post</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
