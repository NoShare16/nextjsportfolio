import Image from "next/image";
import Link from "next/link";
import Form from "./Form";
import Dropdown from "./Dropdown";

const Navbar = () => {
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
              src={"/assets/logos/download-ededed.svg"}
              width={20}
              height={20}
              className="inline"
            />
          </a>
          <Link href="/projects" className="navbar-links">
            Projekte
          </Link>
          <Form cl="navbar-links" />
        </nav>

        {/* MOBILE */}
        <Dropdown />
      </section>
    </>
  );
};

export default Navbar;
