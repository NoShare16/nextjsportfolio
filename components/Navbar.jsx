"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Form from "./Form";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <>
      <section className="header md:bg-transparent">
        <a href="/" className="logo">
          Alexander.
        </a>
        {/* DESKTOP */}
        <nav className="hidden lg:block">
          <Link href="/" className="navbar-links">
            Home
          </Link>
          <Link href="/about" className="navbar-links">
            Über mich
          </Link>
          <a
            href="/assets/images/CourseraMergedCerficates.pdf"
            download
            className="navbar-links"
          >
            Zertifikate{" "}
            <Image
              src={"/assets/images/download-solid-24.png"}
              width={20}
              height={20}
              className="bg-white rounded inline"
            />
          </a>
          <Link href="/projects" className="navbar-links">
            Projekte
          </Link>
          <Form cl="navbar-links" />
        </nav>

        {/* MOBILE */}
        <nav className="lg:hidden flex relative">
          <div className="flex">
            <Image
              src={"/assets/images/menu.png"}
              width={30}
              height={30}
              alt="menu"
              className="bg-white rounded"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/about"
                  onClick={() => setToggleDropdown(false)}
                  className="dropdown_link"
                >
                  Über Mich
                </Link>
                <a
                  href="/assets/images/CourseraMergedCerficates.pdf"
                  download
                  onClick={() => setToggleDropdown(false)}
                  className="dropdown_link"
                >
                  Zertifikate{" "}
                  <Image
                    src={"/assets/images/download-solid-24.png"}
                    width={20}
                    height={20}
                    className="inline"
                  />
                </a>
                <Link
                  href="/projects"
                  onClick={() => setToggleDropdown(false)}
                  className="dropdown_link"
                >
                  Projects
                </Link>
                <Form cl="dropdown_link" />
              </div>
            )}
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
