import React, { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
//import { useRouter } from "next/router";
//import Navbar from "./AdminNavbar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const [user, setUser] = useState<any>({});
  //const router = useRouter();

  useEffect(() => {
    let lStorage: any = window.localStorage.getItem("profile");
    if (lStorage) {
      lStorage = JSON.parse(lStorage);
      console.log("local", lStorage);
      setUser(lStorage);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <>
        <nav className="bg-secondary">
          <div className="col-8 float-left">
            <Link href="/">
              <a>
                <h1 className="text-light">The Healthy, Hunger-Free Kids</h1>
              </a>
            </Link>
          </div>
          {user.role == "student" ? (
            <ul className="float-right">
              <Link href="/meal">
                <a>
                  <li>Menu</li>
                </a>
              </Link>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Welcome {user.username}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link href="/profile">
                    <a className="dropdown-item">Profile</a>
                  </Link>
                  <Link href="/">
                    <a className="dropdown-item"
                      onClick={() => {
                        window.localStorage.removeItem("profile");
                        window.localStorage.removeItem("auth");
                      }}
                    >
                      <li>logout</li>
                    </a>
                  </Link>
                </div>
              </div>
            </ul>
          ) : user.role == "admin" ? (
            <ul className="float-right">
              <Link href="/meal">
                <a>
                  <li>Menu</li>
                </a>
              </Link>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Welcome {user.username}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link href="/profile">
                    <a className="dropdown-item">Profile</a>
                  </Link>
                  <Link href="/admin">
                    <a className="dropdown-item">Admin Panel</a>
                  </Link>
                  <Link href="/">
                    <a className="dropdown-item"
                      onClick={() => {
                        window.localStorage.removeItem("profile");
                        window.localStorage.removeItem("auth");
                      }}
                    >
                      <li>logout</li>
                    </a>
                  </Link>
                </div>
              </div>
            </ul>
          ) : (
            <ul>
              <Link href="/users/login">
                <a>
                  <li className="text-light">login</li>
                </a>
              </Link>
              <Link href="/users/signup">
                <a>
                  <li className="text-light">Sign Up</li>
                </a>
              </Link>
            </ul>
          )}
        </nav>
      </>

      {children}
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"
      ></script>

      <footer>
        <hr />
        <span>Test Project</span>
      </footer>
    </div>
  );
};

export default Layout;
