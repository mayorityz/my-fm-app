import Layout from "../components/MainLayout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout title="Yoruba Community Online">
        <div class="banner">
          <h3>
            YORUBA <span>COMMUNITY</span> ONLINE
          </h3>
        </div>
        <div class="tt-custom-mobile-indent container">
          <div class="tt-categories-title">
            <div class="tt-title">Categories</div>
            <div class="tt-search">
              <form class="search-wrapper">
                <div class="search-form">
                  <input
                    type="text"
                    class="tt-search__input"
                    placeholder="Search Categories"
                  />
                  <button class="tt-search__btn" type="submit">
                    <svg class="tt-icon">
                      <use xlinkHref="#icon-search"></use>
                    </svg>
                  </button>
                  <button class="tt-search__close">
                    <svg class="tt-icon">
                      <use xlinkHref="#icon-cancel"></use>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="tt-categories-list">
            <div class="row">
              <div class="col-md-6 col-lg-4">
                <div class="tt-item">
                  <div class="tt-item-header">
                    <ul class="tt-list-badge">
                      <li>
                        <Link
                          href={{
                            pathname: "/category",
                            query: { id: "politics" },
                          }}
                        >
                          <a>
                            <span class="tt-color01 tt-badge">politics</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                    <h6 class="tt-title">
                      <a href="./page-categories-single.html">
                        Threads - 1,245
                      </a>
                    </h6>
                  </div>
                  <div class="tt-item-layout">
                    <div class="innerwrapper">
                      Lets discuss about whats happening around the world
                      politics.
                    </div>
                    <a href="#" class="tt-btn-icon">
                      <i class="tt-icon">
                        <svg>
                          <use xlinkHref="#icon-favorite"></use>
                        </svg>
                      </i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="tt-item">
                  <div class="tt-item-header">
                    <ul class="tt-list-badge">
                      <li>
                        <a href="#">
                          <span class="tt-color02 tt-badge">video</span>
                        </a>
                      </li>
                    </ul>
                    <h6 class="tt-title">
                      <a href="page-categories-single.html">Threads - 368</a>
                    </h6>
                  </div>
                  <div class="tt-item-layout">
                    <div class="tt-innerwrapper">
                      Lets discuss about whats happening around the world
                      politics.
                    </div>
                    <div class="tt-innerwrapper">
                      <a href="#" class="tt-btn-icon">
                        <i class="tt-icon">
                          <svg>
                            <use xlinkHref="#icon-favorite"></use>
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="tt-item">
                  <div class="tt-item-header">
                    <ul class="tt-list-badge">
                      <li>
                        <a href="#">
                          <span class="tt-color03 tt-badge">exchange</span>
                        </a>
                      </li>
                    </ul>
                    <h6 class="tt-title">
                      <a href="page-categories-single.html">Threads - 381</a>
                    </h6>
                  </div>
                  <div class="tt-item-layout">
                    <div class="tt-innerwrapper">
                      Lets discuss about whats happening around the world
                      politics.
                    </div>
                    <div class="tt-innerwrapper">
                      <a href="#" class="tt-btn-icon">
                        <i class="tt-icon">
                          <svg>
                            <use xlinkHref="#icon-favorite"></use>
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="tt-item">
                  <div class="tt-item-header">
                    <ul class="tt-list-badge">
                      <li>
                        <a href="#">
                          <span class="tt-color04 tt-badge">pets</span>
                        </a>
                      </li>
                    </ul>
                    <h6 class="tt-title">
                      <a href="page-categories-single.html">Threads - 98</a>
                    </h6>
                  </div>
                  <div class="tt-item-layout">
                    <div class="tt-innerwrapper">
                      Lets discuss about whats happening around the world
                      politics.
                    </div>
                    <div class="tt-innerwrapper">
                      <a href="#" class="tt-btn-icon">
                        <i class="tt-icon">
                          <svg>
                            <use xlinkHref="#icon-favorite"></use>
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="tt-item">
                  <div class="tt-item-header">
                    <ul class="tt-list-badge">
                      <li>
                        <a href="#">
                          <span class="tt-color05 tt-badge">music</span>
                        </a>
                      </li>
                    </ul>
                    <h6 class="tt-title">
                      <a href="page-categories-single.html">Threads - 28</a>
                    </h6>
                  </div>
                  <div class="tt-item-layout">
                    <div class="tt-innerwrapper">
                      Lets discuss about whats happening around the world
                      politics.
                    </div>
                    <div class="tt-innerwrapper">
                      <a href="#" class="tt-btn-icon">
                        <i class="tt-icon">
                          <svg>
                            <use xlinkHref="#icon-favorite"></use>
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="tt-item">
                  <div class="tt-item-header">
                    <ul class="tt-list-badge">
                      <li>
                        <a href="#">
                          <span class="tt-color06 tt-badge">movies</span>
                        </a>
                      </li>
                    </ul>
                    <h6 class="tt-title">
                      <a href="page-categories-single.html">Threads - 74</a>
                    </h6>
                  </div>
                  <div class="tt-item-layout">
                    <div class="tt-innerwrapper">
                      Lets discuss about whats happening around the world
                      politics.
                    </div>
                    <div class="tt-innerwrapper">
                      <a href="#" class="tt-btn-icon">
                        <i class="tt-icon">
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
            <div class="tt-topic-list tt-ofset-30">
              <div class="tt-list-search">
                <div class="tt-title">Suggested Topics</div>
              </div>
              <hr />
              <div class="tt-list-header tt-border-bottom">
                <div class="tt-col-topic">Topic</div>
                <div class="tt-col-category">Category</div>
                <div class="tt-col-value hide-mobile">Likes</div>
                <div class="tt-col-value hide-mobile">Replies</div>
                <div class="tt-col-value hide-mobile">Views</div>
                <div class="tt-col-value">Activity</div>
              </div>
              <div class="tt-item">
                <div class="tt-col-avatar">
                  <svg class="tt-icon">
                    <use xlinkHref="#icon-ava-n"></use>
                  </svg>
                </div>
                <div class="tt-col-description">
                  <h6 class="tt-title">
                    <a href="#">
                      Does Envato act against the authors of Envato markets?
                    </a>
                  </h6>
                  <div class="row align-items-center no-gutters hide-desktope">
                    <div class="col-11">
                      <ul class="tt-list-badge">
                        <li class="show-mobile">
                          <a href="#">
                            <span class="tt-color05 tt-badge">music</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-1 ml-auto show-mobile">
                      <div class="tt-value">1d</div>
                    </div>
                  </div>
                </div>
                <div class="tt-col-category">
                  <span class="tt-color05 tt-badge">music</span>
                </div>
                <div class="tt-col-value hide-mobile">358</div>
                <div class="tt-col-value tt-color-select hide-mobile">68</div>
                <div class="tt-col-value hide-mobile">8.3k</div>
                <div class="tt-col-value hide-mobile">1d</div>
              </div>
              <div class="tt-item">
                <div class="tt-col-avatar">
                  <svg class="tt-icon">
                    <use xlinkHref="#icon-ava-h"></use>
                  </svg>
                </div>
                <div class="tt-col-description">
                  <h6 class="tt-title">
                    <a href="#">
                      <svg class="tt-icon">
                        <use xlinkHref="#icon-locked"></use>
                      </svg>
                      We Want to Hear From You! What Would You Like?
                    </a>
                  </h6>
                  <div class="row align-items-center no-gutters hide-desktope">
                    <div class="col-11">
                      <ul class="tt-list-badge">
                        <li class="show-mobile">
                          <a href="#">
                            <span class="tt-color06 tt-badge">movies</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-1 ml-auto show-mobile">
                      <div class="tt-value">2d</div>
                    </div>
                  </div>
                </div>
                <div class="tt-col-category">
                  <span class="tt-color06 tt-badge">movies</span>
                </div>
                <div class="tt-col-value hide-mobile">674</div>
                <div class="tt-col-value tt-color-select  hide-mobile">29</div>
                <div class="tt-col-value hide-mobile">1.3k</div>
                <div class="tt-col-value hide-mobile">2d</div>
              </div>
              <div class="tt-item">
                <div class="tt-col-avatar">
                  <svg class="tt-icon">
                    <use xlinkHref="#icon-ava-j"></use>
                  </svg>
                </div>
                <div class="tt-col-description">
                  <h6 class="tt-title">
                    <a href="#">Seeking partner backend developer</a>
                  </h6>
                  <div class="row align-items-center no-gutters">
                    <div class="col-11">
                      <ul class="tt-list-badge">
                        <li class="show-mobile">
                          <a href="#">
                            <span class="tt-color03 tt-badge">exchange</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="tt-badge">themeforest</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="tt-badge">elements</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-1 ml-auto show-mobile">
                      <div class="tt-value">2d</div>
                    </div>
                  </div>
                </div>
                <div class="tt-col-category">
                  <span class="tt-color13 tt-badge">movies</span>
                </div>
                <div class="tt-col-value hide-mobile">278</div>
                <div class="tt-col-value tt-color-select  hide-mobile">27</div>
                <div class="tt-col-value hide-mobile">1.4k</div>
                <div class="tt-col-value hide-mobile">2d</div>
              </div>
              <div class="tt-item">
                <div class="tt-col-avatar">
                  <svg class="tt-icon">
                    <use xlinkHref="#icon-ava-t"></use>
                  </svg>
                </div>
                <div class="tt-col-description">
                  <h6 class="tt-title">
                    <a href="#">Cannot customize my intro</a>
                  </h6>
                  <div class="row align-items-center no-gutters">
                    <div class="col-11">
                      <ul class="tt-list-badge">
                        <li class="show-mobile">
                          <a href="#">
                            <span class="tt-color07 tt-badge">video games</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="tt-badge">videohive</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="tt-badge">photodune</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-1 ml-auto show-mobile">
                      <div class="tt-value">2d</div>
                    </div>
                  </div>
                </div>
                <div class="tt-col-category">
                  <span class="tt-color07 tt-badge">video games</span>
                </div>
                <div class="tt-col-value hide-mobile">364</div>
                <div class="tt-col-value tt-color-select  hide-mobile">36</div>
                <div class="tt-col-value  hide-mobile">982</div>
                <div class="tt-col-value hide-mobile">2d</div>
              </div>
              <div class="tt-item">
                <div class="tt-col-avatar">
                  <svg class="tt-icon">
                    <use xlinkHref="#icon-ava-k"></use>
                  </svg>
                </div>
                <div class="tt-col-description">
                  <h6 class="tt-title">
                    <a href="#">
                      <svg class="tt-icon">
                        <use xlinkHref="#icon-verified"></use>
                      </svg>
                      Microsoft Word and Power Point
                    </a>
                  </h6>
                  <div class="row align-items-center no-gutters hide-desktope">
                    <div class="col-11">
                      <ul class="tt-list-badge">
                        <li class="show-mobile">
                          <a href="#">
                            <span class="tt-color08 tt-badge">youtube</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-1 ml-auto show-mobile">
                      <div class="tt-value">3d</div>
                    </div>
                  </div>
                </div>
                <div class="tt-col-category">
                  <span class="tt-color08 tt-badge">youtube</span>
                </div>
                <div class="tt-col-value  hide-mobile">698</div>
                <div class="tt-col-value tt-color-select  hide-mobile">78</div>
                <div class="tt-col-value  hide-mobile">2.1k</div>
                <div class="tt-col-value hide-mobile">3d</div>
              </div>
              <div class="tt-row-btn">
                <button type="button" class="btn-icon js-topiclist-showmore">
                  <svg class="tt-icon">
                    <use xlinkHref="#icon-load_lore_icon"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="tt-topic-list">
          <div class="tt-item tt-item-popup">
            <div class="tt-col-avatar">
              <svg class="tt-icon">
                <use xlinkHref="#icon-ava-f"></use>
              </svg>
            </div>
            <div class="tt-col-message">
              Looks like you are new here. Register for free, learn and
              contribute.
            </div>
            <div class="tt-col-btn">
              <button type="button" class="btn btn-primary">
                Log in
              </button>
              <button type="button" class="btn btn-secondary">
                Sign up
              </button>
              <button type="button" class="btn-icon">
                <svg class="tt-icon">
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
