import { useRouter } from "next/router";
import Layout from "../components/MainLayout/Layout";
import Link from "next/link";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
  AiOutlineUser,
  AiOutlineClockCircle,
  AiOutlineEye,
} from "react-icons/ai";

export default function Post() {
  const router = useRouter();
  const { postid } = router.query;

  return (
    <Layout title={`Read Post`}>
      <div class="container">
        <div class="tt-single-topic-list">
          <div class="tt-item">
            <div class="tt-single-topic">
              <div class="tt-item-header">
                <div class="tt-item-info info-top">
                  <div class="tt-avatar-icon">
                    <i class="tt-icon"></i>
                  </div>
                  <div class="tt-avatar-title">
                    <AiOutlineUser />

                    <Link
                      href={{
                        pathname: "/user",
                        query: { who: "mayoritz" },
                      }}
                    >
                      <a>mayowa</a>
                    </Link>
                  </div>
                  <a href="#" class="tt-info-time">
                    <i class="tt-icon">
                      <AiOutlineClockCircle />
                    </i>
                    6 May,2021
                  </a>
                </div>
                <h3 class="tt-item-title">
                  <a href="#">We are going in this country!?</a>
                </h3>
              </div>
              <div class="tt-item-description">
                <h6 class="tt-title">Get ready for Movember!</h6>
                <p>
                  It’s time to channel your inner Magnum P.I., Ron Swanson or
                  Hercule Poroit! It’s the time that all guys (or gals) love and
                  all our partners hate It’s Movember!
                </p>
                <p>
                  Throughout November we will be inviting all community members
                  to help raise awareness and funds for the lives of men
                  affected by cancer and mental health problems via the Movember
                  Foundation 10.
                </p>
                <h6 class="tt-title">How Does it Work?</h6>
                <p>
                  Authors and customers with facial hair unite! Simply grow,
                  groom, and share your facial hair during November! Even
                  females can enter if they desire (be creative, ladies!). Be
                  inspired by checking out last year’s highlights 28.
                </p>
              </div>
              <div class="tt-item-info info-bottom">
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <AiOutlineLike />
                  </i>
                  <span class="tt-text">671</span>
                </a>
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <AiOutlineDislike />
                  </i>
                  <span class="tt-text">39</span>
                </a>
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <AiOutlineComment />
                  </i>
                  <span class="tt-text">12</span>
                </a>
                <div class="col-separator"></div>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-share"></use>
                    </svg>
                  </i>
                </a>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-flag"></use>
                    </svg>
                  </i>
                </a>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-reply"></use>
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div class="tt-wrapper-inner">
            <div class="pt-editor form-default">
              <h6 class="pt-title">Post Your Reply</h6>
              <div class="form-group">
                <textarea
                  name="message"
                  class="form-control"
                  rows="5"
                  placeholder="Lets get started"
                ></textarea>
              </div>
              <div class="pt-row">
                <div class="col-auto">
                  <div class="checkbox-group">
                    <input
                      type="checkbox"
                      id="checkBox21"
                      name="checkbox"
                      checked=""
                    />
                    <label for="checkBox21">
                      <span class="check"></span>
                      <span class="box"></span>
                      <span class="tt-text">Subscribe to this topic.</span>
                    </label>
                  </div>
                </div>
                <div class="col-auto">
                  <a href="#" class="btn btn-secondary btn-width-lg">
                    Reply
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="tt-item">
            <div class="tt-single-topic">
              <div class="tt-item-header pt-noborder">
                <div class="tt-item-info info-top">
                  <div class="tt-avatar-icon">
                    <i class="tt-icon">
                      <svg>
                        <use xlinkHref="#icon-ava-t"></use>
                      </svg>
                    </i>
                  </div>
                  <div class="tt-avatar-title">
                    <a href="#">tesla02</a>
                  </div>
                  <a href="#" class="tt-info-time">
                    <i class="tt-icon">
                      <svg>
                        <use xlinkHref="#icon-time"></use>
                      </svg>
                    </i>
                    6 Jan,2019
                  </a>
                </div>
              </div>
              <div class="tt-item-description">
                Finally!
                <br />
                Are there any special recommendations for design or an updated
                guide that includes new preview sizes, including retina
                displays?
              </div>
              <div class="tt-item-info info-bottom">
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-like"></use>
                    </svg>
                  </i>
                  <span class="tt-text">671</span>
                </a>
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-dislike"></use>
                    </svg>
                  </i>
                  <span class="tt-text">39</span>
                </a>
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite"></use>
                    </svg>
                  </i>
                  <span class="tt-text">12</span>
                </a>
                <div class="col-separator"></div>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-share"></use>
                    </svg>
                  </i>
                </a>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-flag"></use>
                    </svg>
                  </i>
                </a>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-reply"></use>
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div class="tt-item">
            <div class="tt-single-topic">
              <div class="tt-item-header pt-noborder">
                <div class="tt-item-info info-top">
                  <div class="tt-avatar-icon">
                    <i class="tt-icon">
                      <svg>
                        <use xlinkHref="#icon-ava-k"></use>
                      </svg>
                    </i>
                  </div>
                  <div class="tt-avatar-title">
                    <a href="#">kolis27</a>
                  </div>
                  <a href="#" class="tt-info-time">
                    <i class="tt-icon">
                      <svg>
                        <use xlinkHref="#icon-time"></use>
                      </svg>
                    </i>
                    6 Jan,2019
                  </a>
                </div>
              </div>
              <div class="tt-item-description">
                <p>
                  It’s too big preview image, it should be smaller even five in
                  row. On one page there are 30 items to 60 pages it is 1800
                  items in categories eg in Add-Ons category have 22749 items,
                  why not see all of them but only those 1800 items? This is a
                  bad thing.
                </p>
                <p>
                  <img
                    class="tt-offset-11"
                    src="/images/single-topic-img01.jpg"
                    alt=""
                  />
                </p>
              </div>
              <div class="tt-item-info info-bottom">
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-like"></use>
                    </svg>
                  </i>
                  <span class="tt-text">671</span>
                </a>
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-dislike"></use>
                    </svg>
                  </i>
                  <span class="tt-text">39</span>
                </a>
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite"></use>
                    </svg>
                  </i>
                  <span class="tt-text">12</span>
                </a>
                <div class="col-separator"></div>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-share"></use>
                    </svg>
                  </i>
                </a>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-flag"></use>
                    </svg>
                  </i>
                </a>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-reply"></use>
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div class="tt-item">
            <div class="tt-single-topic">
              <div class="tt-item-header pt-noborder">
                <div class="tt-item-info info-top">
                  <div class="tt-avatar-icon">
                    <i class="tt-icon">
                      <svg>
                        <use xlinkHref="#icon-ava-v"></use>
                      </svg>
                    </i>
                  </div>
                  <div class="tt-avatar-title">
                    <a href="#">vickey03</a>
                  </div>
                  <a href="#" class="tt-info-time">
                    <i class="tt-icon">
                      <svg>
                        <use xlinkHref="#icon-time"></use>
                      </svg>
                    </i>
                    6 Jan,2019
                  </a>
                </div>
              </div>
              <div class="tt-item-description">
                Finally!
                <br />
                Are there any special recommendations for design or an updated
                guide that includes new preview sizes, including retina
                displays?
                <div class="topic-inner-list">
                  <div class="topic-inner">
                    <div class="topic-inner-title">
                      <div class="topic-inner-avatar">
                        <i class="tt-icon">
                          <svg>
                            <use xlinkHref="#icon-ava-s"></use>
                          </svg>
                        </i>
                      </div>
                      <div class="topic-inner-title">
                        <a href="#">summit92</a>
                      </div>
                    </div>
                    <div class="topic-inner-description">
                      Finally!
                      <br />
                      Are there any special recommendations for design or an
                      updated guide that includes new preview sizes, including
                      retina displays?
                    </div>
                  </div>
                </div>
              </div>
              <div class="tt-item-info info-bottom">
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-like"></use>
                    </svg>
                  </i>
                  <span class="tt-text">671</span>
                </a>
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-dislike"></use>
                    </svg>
                  </i>
                  <span class="tt-text">39</span>
                </a>
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite"></use>
                    </svg>
                  </i>
                  <span class="tt-text">12</span>
                </a>
                <div class="col-separator"></div>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-share"></use>
                    </svg>
                  </i>
                </a>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-flag"></use>
                    </svg>
                  </i>
                </a>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-reply"></use>
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div class="tt-item tt-wrapper-success">
            <div class="tt-single-topic">
              <div class="tt-item-header pt-noborder">
                <div class="tt-item-info info-top">
                  <div class="tt-avatar-icon">
                    <i class="tt-icon">
                      <svg>
                        <use xlinkHref="#icon-ava-t"></use>
                      </svg>
                    </i>
                  </div>
                  <div class="tt-avatar-title">
                    <a href="#">tesla02</a>
                    <span class="tt-color13 tt-badge">best answer</span>
                  </div>
                  <a href="#" class="tt-info-time">
                    <i class="tt-icon">
                      <svg>
                        <use xlinkHref="#icon-time"></use>
                      </svg>
                    </i>
                    6 Jan,2019
                  </a>
                </div>
              </div>
              <div class="tt-item-description">
                Finally!
                <br />
                Are there any special recommendations for design or an updated
                guide that includes new preview sizes, including retina
                displays?
              </div>
              <div class="tt-item-info info-bottom">
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-like"></use>
                    </svg>
                  </i>
                  <span class="tt-text">671</span>
                </a>
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-dislike"></use>
                    </svg>
                  </i>
                  <span class="tt-text">39</span>
                </a>
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite"></use>
                    </svg>
                  </i>
                  <span class="tt-text">12</span>
                </a>
                <div class="col-separator"></div>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-share"></use>
                    </svg>
                  </i>
                </a>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-flag"></use>
                    </svg>
                  </i>
                </a>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-reply"></use>
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div class="tt-item tt-wrapper-danger">
            <div class="tt-single-topic">
              <div class="tt-item-header pt-noborder">
                <div class="tt-item-info info-top">
                  <div class="tt-avatar-icon">
                    <i class="tt-icon">
                      <svg>
                        <use xlinkHref="#icon-ava-u"></use>
                      </svg>
                    </i>
                  </div>
                  <div class="tt-avatar-title">
                    <a href="#">usain31</a>
                  </div>
                  <a href="#" class="tt-info-time">
                    <i class="tt-icon">
                      <svg>
                        <use xlinkHref="#icon-time"></use>
                      </svg>
                    </i>
                    6 Jan,2019
                  </a>
                </div>
              </div>
              <div class="tt-item-description">
                This post has been flagged by a moderator, received too many
                downvotes.
              </div>
              <div class="row">
                <div class="col-auto">
                  <div class="tt-item-info info-bottom">
                    <a href="#" class="tt-icon-btn">
                      <i class="tt-icon">
                        <svg>
                          <use xlinkHref="#icon-dislike"></use>
                        </svg>
                      </i>
                      <span class="tt-text">39</span>
                    </a>
                  </div>
                </div>
                <div class="col-auto ml-auto">
                  <a href="#" class="btn btn-primary tt-offset-27">
                    Show Reply
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="tt-item">
            <div class="tt-single-topic">
              <div class="tt-item-header pt-noborder">
                <div class="tt-item-info info-top">
                  <div class="tt-avatar-icon">
                    <i class="tt-icon">
                      <svg>
                        <use xlinkHref="#icon-ava-f"></use>
                      </svg>
                    </i>
                  </div>
                  <div class="tt-avatar-title">
                    <a href="#">kolis27</a>
                  </div>
                  <a href="#" class="tt-info-time">
                    <i class="tt-icon">
                      <svg>
                        <use xlinkHref="#icon-time"></use>
                      </svg>
                    </i>
                    6 Jan,2019
                  </a>
                </div>
              </div>
              <div class="tt-item-description">
                <p>
                  It’s too big preview image, it should be smaller even five in
                  row. On one page there are 30 items to 60 pages it is 1800
                  items in categories eg in Add-Ons category have 22749 items,
                  why not see all of them but only those 1800 items? This is a
                  bad thing.
                </p>
                <div class="row tt-offset-37">
                  <div class="col-lg-10">
                    <div class="tt-gallery-layout">
                      <div class="tt-item">
                        <a
                          href="images/single-topic-img03.jpg"
                          class="tt-gallery-obj"
                        >
                          <img src="/images/single-topic-img03.jpg" alt="" />
                        </a>
                      </div>
                      <div class="tt-item">
                        <a
                          href="images/single-topic-img04.jpg"
                          class="tt-gallery-obj"
                        >
                          <img src="/images/single-topic-img04.jpg" alt="" />
                        </a>
                      </div>
                      <div class="tt-item">
                        <a
                          href="images/single-topic-img05.jpg"
                          class="tt-gallery-obj"
                        >
                          <img src="/images/single-topic-img05.jpg" alt="" />
                        </a>
                      </div>
                      <div class="tt-item">
                        <a
                          href="images/single-topic-img06.jpg"
                          class="tt-gallery-obj"
                        >
                          <img src="/images/single-topic-img06.jpg" alt="" />
                        </a>
                      </div>
                      <div class="tt-item">
                        <a
                          href="images/single-topic-img07.jpg"
                          class="tt-gallery-obj"
                        >
                          <img src="/images/single-topic-img07.jpg" alt="" />
                        </a>
                      </div>
                      <div class="tt-item">
                        <a
                          href="images/single-topic-img08.jpg"
                          class="tt-gallery-obj"
                        >
                          <img src="/images/single-topic-img08.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tt-item-info info-bottom">
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-like"></use>
                    </svg>
                  </i>
                  <span class="tt-text">671</span>
                </a>
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-dislike"></use>
                    </svg>
                  </i>
                  <span class="tt-text">39</span>
                </a>
                <a href="#" class="tt-icon-btn">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite"></use>
                    </svg>
                  </i>
                  <span class="tt-text">12</span>
                </a>
                <div class="col-separator"></div>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-share"></use>
                    </svg>
                  </i>
                </a>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-flag"></use>
                    </svg>
                  </i>
                </a>
                <a href="#" class="tt-icon-btn tt-hover-02 tt-small-indent">
                  <i class="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-reply"></use>
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="tt-wrapper-inner">
          <h4 class="tt-title-separator">
            <span>You’ve reached the end of replies</span>
          </h4>
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

        <hr />

        <div class="tt-topic-list tt-ofset-30">
          <div class="tt-list-search">
            <div class="tt-title">Trending Topics</div>

            <div class="tt-search">
              <form class="search-wrapper">
                <div class="search-form">
                  <input
                    type="text"
                    class="tt-search__input"
                    placeholder="Search for topics"
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
    </Layout>
  );
}
