"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Form from "./Form";

const Dropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <>
      {/* MOBILE */}
      <nav className="lg:hidden flex relative">
        <div className="flex">
          <Image
            src={"/assets/logos/hamburger-menu.svg"}
            width={30}
            height={30}
            alt="menu"
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
    </>
  );
};

export default Dropdown;
