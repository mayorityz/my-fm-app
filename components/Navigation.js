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
        <div class="mmpanels">
          <div class="mmpanel mmopened mmcurrent" id="mm0">
            <ul>
              <li class="mm-close-parent">
                <a href="#close" data-target="#close" class="mm-close">
                  Close
                  <div class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-cancel"></use>
                    </svg>
                  </div>
                </a>
              </li>

              <li>
                <a href="page-categories.html">
                  <span>Categories</span>
                </a>
              </li>
              <li>
                <a href="page-tabs.html">
                  <span>Trending</span>
                </a>
              </li>
              <li>
                <a href="page-create-topic.html">
                  <span>New</span>
                </a>
              </li>
              <li>
                <a href="#mm1" data-target="#mm1" class="mm-next-level">
                  <span>Pages</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="mmpanel mmhidden" id="mm1">
            <ul>
              <li>
                <a href="#" data-target="#" class="mm-prev-level">
                  Back
                </a>
              </li>
              <li>
                <a href="page-single-user.html" class="mm-original-link">
                  <span>Pages</span>
                </a>
              </li>
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li>
                <a href="page-single-topic.html">Single Topic</a>
              </li>
              <li>
                <a href="page-create-topic.html">Create Topic</a>
              </li>
              <li>
                <a href="page-single-user.html">Single User Activity</a>
              </li>
              <li>
                <a href="page-single_threads.html">Single User Threads</a>
              </li>
              <li>
                <a href="page-single_replies.html">Single User Replies</a>
              </li>
              <li>
                <a href="page-single_followers.html">Single User Followers</a>
              </li>
              <li>
                <a href="page-single_categories.html">Single User Categories</a>
              </li>
              <li>
                <a href="page-single_settings.html">Single User Settings</a>
              </li>
              <li>
                <a href="page-signup.html">Sign up</a>
              </li>
              <li>
                <a href="page-login.html">Log in</a>
              </li>
              <li>
                <a href="page-categories.html">Categories</a>
              </li>
              <li>
                <a href="page-categories-single.html">Single Category</a>
              </li>
              <li>
                <a href="page-tabs.html">About</a>
              </li>
              <li>
                <a href="page-tabs_guidelines.html">Guidelines</a>
              </li>
              <li>
                <a href="_demo_modal-advancedSearch.html">Advanced Search</a>
              </li>
              <li>
                <a href="error404.html">Error 404</a>
              </li>
              <li>
                <a href="_demo_modal-age-confirmation.html">Age Verification</a>
              </li>
              <li>
                <a href="_demo_modal-level-up.html">Level up Notification</a>
              </li>
              <li>
                <a href="messages-page.html">Message</a>
              </li>
              <li>
                <a href="messages-compose.html">Message Compose</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header id="tt-header">
        <div className="container">
          <div className="row tt-row no-gutters">
            <div className="col-auto">
              <a className="toggle-mobile-menu" href="#">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-menu_icon"></use>
                </svg>
              </a>

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
    </>
  );
}
