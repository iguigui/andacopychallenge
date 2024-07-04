import React from "react";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="topbar flex flex-row justify-center w-full py-3 px-4 sm:justify-between">
      <h1 className="hidden">AndaPirate</h1>
      <aside className="hidden sm:flex">
        <Link href="/">
          <span className="h1">Δnda Ƥirate 🏴‍☠️</span>
        </Link>
      </aside>
      <nav>
        <ul className="flex flex-row">
          <li className="ml-2 flex flex-row">
            <span className="hidden sm:block">&gt;</span>
            <span>
              &nbsp;
              <Link href="/services" className="selected">
                Services
              </Link>
            </span>
          </li>
          <li className="ml-2 flex flex-row">
            <span className="hidden sm:block">&gt;</span>
            <span>
              &nbsp;
              <Link href="/about">À propos</Link>
            </span>
          </li>
          <li className="ml-2 flex flex-row">
            <span className="hidden sm:block">&gt;</span>
            <span>
              &nbsp;
              <Link href="/credits">Crédits</Link>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
