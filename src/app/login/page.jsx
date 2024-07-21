"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
const page = () => {
  const presentDay = new Date().getDate();
  const preseneYear = new Date().getFullYear();
  const [day, setDay] = useState(presentDay);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState(preseneYear);
  const [showDayDropdown, setShowDayDropdown] = useState(false);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);

  return (
    <main className={style.display}>
      <section className={style.formFrame}>
        <div className={style.left}>
          <h1>Login</h1>
        </div>
        <div className={style.right}>
          <div className={style.intro}>
            <h2>Sign in to your account</h2>
            <p>
              Manage you memberships plans and view exchange offers and more
            </p>
          </div>
          <i class={`fa-regular fa-circle-right ${style.userIcon}`}></i>
          <form action="">
            <div className={style.leftform}>
              <div className={style.line}>
                <label htmlFor="">Username(Email/Phone)</label>
                <input type="text" placeholder="E.g JohnDeo.." />
              </div>
            </div>
            <div className={style.leftform}>
              <div className={style.line}>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="*******" />
              </div>
            </div>
          </form>
          <div className={style.info}>
            <div className={style.ques}>
              <p>Have an account?</p>
              <Link href={""}>Username {"/"}</Link>
              <Link href={""}>Password</Link>
            </div>
          </div>
          <div className={`${style.info} ${style.infoTwo}`}>
            <div className={style.ques}>
              <p>New User?</p>
              <Link href={""}>Signup</Link>
            </div>
            <button>Sign In</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
