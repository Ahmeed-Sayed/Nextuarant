"use client";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import classes from "./main-header.module.css";
import { usePathname } from "next/navigation";
function MainHeader() {
  const pathName = usePathname();
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <Image src={logo} alt="site logo" />
        </Link>
       Nextuarant
      </div>

      <div className={classes.nav}>
        <ul>
          <li>
            <Link
              href="/community"
              className={
                pathName.startsWith("/community") ? classes.active : undefined
              }
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              href="/meals"
              className={
                pathName.startsWith("/meals") ? classes.active : undefined
              }
            >
              Meals
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainHeader;
