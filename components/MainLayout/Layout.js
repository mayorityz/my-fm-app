import Navigation from "../Navigation";
import Header from "./../Header";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children, title }) {
  return (
    <>
      <Header title={title} />
      <Navigation />
      <body>
        <main id="tt-pageContent">{children}</main>
      </body>
      <footer class="footer_container">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h3>ABOUT US</h3>
              <Image src="/yoruba_logo.png" width="100" height="50" />
              <p>
                Yoruba Community Online is a platform aimed at connecting the
                Yoruba people across the world. A place to connect, unite and
                reach common goals as a group.
              </p>
              <p>
                It is our goal to create a safe place, free from unnecessary
                censorships. Where everyone can share their taught freely.
              </p>
            </div>
            <div class="col-md-4">
              <h3>NAVIGATION</h3>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
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
                    <a>Trending</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Login</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Create Account</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h4>CONNECT WITH US</h4>
              <ul>
                <li>
                  <Link href="/">
                    <a>FaceBook</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Twitter</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Instagram</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>LinkedIn</a>
                  </Link>
                </li>
              </ul>
              <h4>SUBSCRIBE</h4>
              <form>
                <div className="form-group row">
                  <div className="col-6">
                    <input
                      className="form-control input-lg"
                      placeholder="Email Address ..."
                    />
                  </div>
                  <div className="col-6">
                    <button className="btn btn-success btn-xs">
                      subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
