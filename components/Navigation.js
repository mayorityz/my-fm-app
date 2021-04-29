import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  AiOutlineHome,
  AiOutlineFire,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

export default function Navigation() {
  const [toggle, setToggle] = useState(false);
  let drawer = () => setToggle(!toggle);
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
                class="tt-account-btn toggle-mobile-menu"
                style={{ padding: "1" }}
              >
                <a href="page-login.html" class="btn btn-primary">
                  Log in
                </a>
                <a href="page-signup.html" class="btn btn-secondary">
                  Sign up
                </a>
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
