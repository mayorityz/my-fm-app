import Link from "next/link";
import Image from "next/image";

import {
  AiOutlineHome,
  AiOutlineFire,
  AiOutlineLogin,
  AiOutlineUserAdd,
} from "react-icons/ai";

export default function Navigation() {
  return (
    <>
      <nav class="panel-menu" id="mobile-menu">
        <ul></ul>
        <div class="mm-navbtn-names">
          <div class="mm-closebtn">
            Close
            <div class="tt-icon">
              <svg>
                <use xlinkHref="#icon-cancel"></use>
              </svg>
            </div>
          </div>
          <div class="mm-backbtn">Back</div>
        </div>
      </nav>
      <header id="tt-header">
        <div class="container">
          <div class="row tt-row no-gutters">
            <div class="col-auto">
              <a class="toggle-mobile-menu" href="#">
                <svg class="tt-icon">
                  <use xlinkHref="#icon-menu_icon"></use>
                </svg>
              </a>

              <div class="tt-logo">
                <Link href="/">
                  <Image
                    src="/yoruba_logo.png"
                    alt="site logo"
                    width="100"
                    height="50"
                  />
                </Link>
              </div>

              <div class="tt-desktop-menu">
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
            <div class="col-auto ml-auto">
              <div class="tt-user-info d-flex justify-content-center">
                <div class="tt-desktop-menu">
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
    </>
  );
}
