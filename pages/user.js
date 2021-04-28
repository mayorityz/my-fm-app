import { useRouter } from "next/router";
import Layout from "./../components/MainLayout/Layout";
import {
  AiOutlineComment,
  AiOutlineContainer,
  AiOutlineSolution,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";

export default function User() {
  const router = useRouter();
  const { who } = router.query;

  return (
    <>
      <Layout title="User Details ...">
        <div className="tt-wrapper-section">
          <div className="container">
            <div className="tt-user-header">
              <div className="tt-col-avatar">
                <div className="tt-icon">
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-ava-d"></use>
                  </svg>
                </div>
              </div>
              <div className="tt-col-title">
                <div className="tt-title">
                  <AiOutlineUser /> <a href="#"> {who}</a>
                </div>
              </div>
              <div className="tt-col-btn" id="js-settings-btn">
                <div className="tt-list-btn">
                  <a href="#" className="tt-btn-icon">
                    <svg className="tt-icon">
                      <use xlinkHref="#icon-settings_fill"></use>
                    </svg>
                  </a>
                  <a href="#" className="btn btn-primary">
                    <AiOutlineMail /> Message
                  </a>
                  <a href="#" className="btn btn-secondary">
                    Follow Mayowa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-10 p-3">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    class="nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    <AiOutlineSolution /> About Mayowa
                  </a>
                  <a
                    class="nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    <AiOutlineContainer /> Mayowa's Posts
                  </a>
                  <a
                    class="nav-link"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    <AiOutlineComment /> Mayowa's Replies
                  </a>
                </div>
              </nav>{" "}
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <section className="p-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="tt-col-btn" id="js-settings-btn">
                      <div className="tt-list-btn">
                        <a href="#" className="btn btn-primary">
                          Followers (30)
                        </a>
                        <a href="#" className="btn btn-secondary">
                          Following (40)
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
