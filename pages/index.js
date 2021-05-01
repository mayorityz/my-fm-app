import Layout from "../components/MainLayout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout title="Yoruba Community Online">
        <div className="banner">
          <h3>
            YORUBA <span>COMMUNITY</span> ONLINE
          </h3>
        </div>
        <div className="tt-custom-mobile-indent container">
          <div className="tt-categories-title">
            <div className="tt-title">Categories</div>
            <div className="tt-search">
              <form className="search-wrapper">
                <div className="search-form">
                  <input
                    type="text"
                    className="tt-search__input"
                    placeholder="Search Categories"
                  />
                  <button className="tt-search__btn" type="submit">
                    <svg className="tt-icon">
                      <use xlinkHref="#icon-search"></use>
                    </svg>
                  </button>
                  <button className="tt-search__close">
                    <svg className="tt-icon">
                      <use xlinkHref="#icon-cancel"></use>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="tt-categories-list">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="tt-item">
                  <div className="tt-item-header">
                    <ul className="tt-list-badge">
                      <li>
                        <Link
                          href={{
                            pathname: "/category",
                            query: { id: "politics" },
                          }}
                        >
                          <a>
                            <span className="tt-color01 tt-badge">
                              politics
                            </span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                    <h6 className="tt-title">
                      <a href="./page-categories-single.html">
                        Threads - 1,245
                      </a>
                    </h6>
                  </div>
                  <div className="tt-item-layout">
                    <div className="innerwrapper">
                      Lets discuss about whats happening around the world
                      politics.
                    </div>
                    <a href="#" className="tt-btn-icon">
                      <i className="tt-icon">
                        <svg>
                          <use xlinkHref="#icon-favorite"></use>
                        </svg>
                      </i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="tt-item">
                  <div className="tt-item-header">
                    <ul className="tt-list-badge">
                      <li>
                        <a href="#">
                          <span className="tt-color02 tt-badge">video</span>
                        </a>
                      </li>
                    </ul>
                    <h6 className="tt-title">
                      <a href="page-categories-single.html">Threads - 368</a>
                    </h6>
                  </div>
                  <div className="tt-item-layout">
                    <div className="tt-innerwrapper">
                      Lets discuss about whats happening around the world
                      politics.
                    </div>
                    <div className="tt-innerwrapper">
                      <a href="#" className="tt-btn-icon">
                        <i className="tt-icon">
                          <svg>
                            <use xlinkHref="#icon-favorite"></use>
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="tt-item">
                  <div className="tt-item-header">
                    <ul className="tt-list-badge">
                      <li>
                        <a href="#">
                          <span className="tt-color03 tt-badge">exchange</span>
                        </a>
                      </li>
                    </ul>
                    <h6 className="tt-title">
                      <a href="page-categories-single.html">Threads - 381</a>
                    </h6>
                  </div>
                  <div className="tt-item-layout">
                    <div className="tt-innerwrapper">
                      Lets discuss about whats happening around the world
                      politics.
                    </div>
                    <div className="tt-innerwrapper">
                      <a href="#" className="tt-btn-icon">
                        <i className="tt-icon">
                          <svg>
                            <use xlinkHref="#icon-favorite"></use>
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="tt-item">
                  <div className="tt-item-header">
                    <ul className="tt-list-badge">
                      <li>
                        <a href="#">
                          <span className="tt-color04 tt-badge">pets</span>
                        </a>
                      </li>
                    </ul>
                    <h6 className="tt-title">
                      <a href="page-categories-single.html">Threads - 98</a>
                    </h6>
                  </div>
                  <div className="tt-item-layout">
                    <div className="tt-innerwrapper">
                      Lets discuss about whats happening around the world
                      politics.
                    </div>
                    <div className="tt-innerwrapper">
                      <a href="#" className="tt-btn-icon">
                        <i className="tt-icon">
                          <svg>
                            <use xlinkHref="#icon-favorite"></use>
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="tt-item">
                  <div className="tt-item-header">
                    <ul className="tt-list-badge">
                      <li>
                        <a href="#">
                          <span className="tt-color05 tt-badge">music</span>
                        </a>
                      </li>
                    </ul>
                    <h6 className="tt-title">
                      <a href="page-categories-single.html">Threads - 28</a>
                    </h6>
                  </div>
                  <div className="tt-item-layout">
                    <div className="tt-innerwrapper">
                      Lets discuss about whats happening around the world
                      politics.
                    </div>
                    <div className="tt-innerwrapper">
                      <a href="#" className="tt-btn-icon">
                        <i className="tt-icon">
                          <svg>
                            <use xlinkHref="#icon-favorite"></use>
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="tt-item">
                  <div className="tt-item-header">
                    <ul className="tt-list-badge">
                      <li>
                        <a href="#">
                          <span className="tt-color06 tt-badge">movies</span>
                        </a>
                      </li>
                    </ul>
                    <h6 className="tt-title">
                      <a href="page-categories-single.html">Threads - 74</a>
                    </h6>
                  </div>
                  <div className="tt-item-layout">
                    <div className="tt-innerwrapper">
                      Lets discuss about whats happening around the world
                      politics.
                    </div>
                    <div className="tt-innerwrapper">
                      <a href="#" className="tt-btn-icon">
                        <i className="tt-icon">
                          <svg>
                            <use xlinkHref="#icon-favorite"></use>
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr />
            <div className="tt-topic-list tt-ofset-30">
              <div className="tt-list-search">
                <div className="tt-title">Suggested Topics</div>
              </div>
              <hr />
              <div className="tt-list-header tt-border-bottom">
                <div className="tt-col-topic">Topic</div>
                <div className="tt-col-category">Category</div>
                <div className="tt-col-value hide-mobile">Likes</div>
                <div className="tt-col-value hide-mobile">Replies</div>
                <div className="tt-col-value hide-mobile">Views</div>
                <div className="tt-col-value">Activity</div>
              </div>
              <div className="tt-item">
                <div className="tt-col-avatar">
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-ava-n"></use>
                  </svg>
                </div>
                <div className="tt-col-description">
                  <h6 className="tt-title">
                    <a href="#">
                      Does Envato act against the authors of Envato markets?
                    </a>
                  </h6>
                  <div className="row align-items-center no-gutters hide-desktope">
                    <div className="col-11">
                      <ul className="tt-list-badge">
                        <li className="show-mobile">
                          <a href="#">
                            <span className="tt-color05 tt-badge">music</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-1 ml-auto show-mobile">
                      <div className="tt-value">1d</div>
                    </div>
                  </div>
                </div>
                <div className="tt-col-category">
                  <span className="tt-color05 tt-badge">music</span>
                </div>
                <div className="tt-col-value hide-mobile">358</div>
                <div className="tt-col-value tt-color-select hide-mobile">
                  68
                </div>
                <div className="tt-col-value hide-mobile">8.3k</div>
                <div className="tt-col-value hide-mobile">1d</div>
              </div>
              <div className="tt-item">
                <div className="tt-col-avatar">
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-ava-h"></use>
                  </svg>
                </div>
                <div className="tt-col-description">
                  <h6 className="tt-title">
                    <a href="#">
                      <svg className="tt-icon">
                        <use xlinkHref="#icon-locked"></use>
                      </svg>
                      We Want to Hear From You! What Would You Like?
                    </a>
                  </h6>
                  <div className="row align-items-center no-gutters hide-desktope">
                    <div className="col-11">
                      <ul className="tt-list-badge">
                        <li className="show-mobile">
                          <a href="#">
                            <span className="tt-color06 tt-badge">movies</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-1 ml-auto show-mobile">
                      <div className="tt-value">2d</div>
                    </div>
                  </div>
                </div>
                <div className="tt-col-category">
                  <span className="tt-color06 tt-badge">movies</span>
                </div>
                <div className="tt-col-value hide-mobile">674</div>
                <div className="tt-col-value tt-color-select  hide-mobile">
                  29
                </div>
                <div className="tt-col-value hide-mobile">1.3k</div>
                <div className="tt-col-value hide-mobile">2d</div>
              </div>
              <div className="tt-item">
                <div className="tt-col-avatar">
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-ava-j"></use>
                  </svg>
                </div>
                <div className="tt-col-description">
                  <h6 className="tt-title">
                    <a href="#">Seeking partner backend developer</a>
                  </h6>
                  <div className="row align-items-center no-gutters">
                    <div className="col-11">
                      <ul className="tt-list-badge">
                        <li className="show-mobile">
                          <a href="#">
                            <span className="tt-color03 tt-badge">
                              exchange
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="tt-badge">themeforest</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="tt-badge">elements</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-1 ml-auto show-mobile">
                      <div className="tt-value">2d</div>
                    </div>
                  </div>
                </div>
                <div className="tt-col-category">
                  <span className="tt-color13 tt-badge">movies</span>
                </div>
                <div className="tt-col-value hide-mobile">278</div>
                <div className="tt-col-value tt-color-select  hide-mobile">
                  27
                </div>
                <div className="tt-col-value hide-mobile">1.4k</div>
                <div className="tt-col-value hide-mobile">2d</div>
              </div>
              <div className="tt-item">
                <div className="tt-col-avatar">
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-ava-t"></use>
                  </svg>
                </div>
                <div className="tt-col-description">
                  <h6 className="tt-title">
                    <a href="#">Cannot customize my intro</a>
                  </h6>
                  <div className="row align-items-center no-gutters">
                    <div className="col-11">
                      <ul className="tt-list-badge">
                        <li className="show-mobile">
                          <a href="#">
                            <span className="tt-color07 tt-badge">
                              video games
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="tt-badge">videohive</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="tt-badge">photodune</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-1 ml-auto show-mobile">
                      <div className="tt-value">2d</div>
                    </div>
                  </div>
                </div>
                <div className="tt-col-category">
                  <span className="tt-color07 tt-badge">video games</span>
                </div>
                <div className="tt-col-value hide-mobile">364</div>
                <div className="tt-col-value tt-color-select  hide-mobile">
                  36
                </div>
                <div className="tt-col-value  hide-mobile">982</div>
                <div className="tt-col-value hide-mobile">2d</div>
              </div>
              <div className="tt-item">
                <div className="tt-col-avatar">
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-ava-k"></use>
                  </svg>
                </div>
                <div className="tt-col-description">
                  <h6 className="tt-title">
                    <a href="#">
                      <svg className="tt-icon">
                        <use xlinkHref="#icon-verified"></use>
                      </svg>
                      Microsoft Word and Power Point
                    </a>
                  </h6>
                  <div className="row align-items-center no-gutters hide-desktope">
                    <div className="col-11">
                      <ul className="tt-list-badge">
                        <li className="show-mobile">
                          <a href="#">
                            <span className="tt-color08 tt-badge">youtube</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-1 ml-auto show-mobile">
                      <div className="tt-value">3d</div>
                    </div>
                  </div>
                </div>
                <div className="tt-col-category">
                  <span className="tt-color08 tt-badge">youtube</span>
                </div>
                <div className="tt-col-value  hide-mobile">698</div>
                <div className="tt-col-value tt-color-select  hide-mobile">
                  78
                </div>
                <div className="tt-col-value  hide-mobile">2.1k</div>
                <div className="tt-col-value hide-mobile">3d</div>
              </div>
              <div className="tt-row-btn">
                <button
                  type="button"
                  className="btn-icon js-topiclist-showmore"
                >
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-load_lore_icon"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="tt-topic-list">
          <div className="tt-item tt-item-popup">
            <div className="tt-col-avatar">
              <svg className="tt-icon">
                <use xlinkHref="#icon-ava-f"></use>
              </svg>
            </div>
            <div className="tt-col-message">
              Looks like you are new here. Register for free, learn and
              contribute.
            </div>
            <div className="tt-col-btn">
              <button type="button" className="btn btn-primary">
                Log in
              </button>
              <button type="button" className="btn btn-secondary">
                Sign up
              </button>
              <button type="button" className="btn-icon">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-cancel"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
