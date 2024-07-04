"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();

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
              <Link href="/services">
                <span className={pathname === "/services" ? "underline" : ""}>
                  Services
                </span>
              </Link>
            </span>
          </li>
          <li className="ml-2 flex flex-row">
            <span className="hidden sm:block">&gt;</span>
            <span>
              &nbsp;
              <Link href="/about">
                <span className={pathname === "/about" ? "underline" : ""}>
                  À propos
                </span>
              </Link>
            </span>
          </li>
          <li className="ml-2 flex flex-row">
            <span className="hidden sm:block">&gt;</span>
            <span>
              &nbsp;
              <Link href="/credits">
                <span className={pathname === "/credits" ? "underline" : ""}>
                  Crédits
                </span>
              </Link>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
