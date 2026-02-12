"use client"

import Image from "next/image"
import Link from "next/link"

import { useState } from "react"

import Logo from "@/public/icons/logo.svg"

import telegram from "@/public/icons/socials/telegram.svg"
import linkedin from "@/public/icons/socials/linkedin.svg"
import whatsapp from "@/public/icons/socials/whatsapp.svg"
import facebook from "@/public/icons/socials/facebook.svg"
import twitter from "@/public/icons/socials/twitter.svg"
import email from "@/public/icons/socials/email.svg"

import profile from "@/public/icons/profile_filled.svg"
import chat from "@/public/icons/chat_bubble.svg"
import briefcase from "@/public/icons/briefcase.svg"
import gamepad from "@/public/icons/gamepad.svg"
import target from "@/public/icons/target.svg"

import "./Navbar.css"

export default function Navbar() {

  const [isActive, setIsActive] = useState("about")

  return (
    <>
      <header className="header__container">
        <nav className="nav__container">
          <div className="nav__logo_container">
            <Image
              src={Logo}
              alt="logo"
            />
          </div>
          <div className="nav__links_container">
            <Link
              onClick={() => setIsActive("about")}
              className={`nav__link ${isActive == "about" && "nav__active"}`}
              href="#">
              <Image src={profile} alt="profile icon" />
              About me
            </Link>
            <Link
              onClick={() => setIsActive("reviews")}
              className={`nav__link ${isActive == "reviews" && "nav__active"}`}
              href="#">
              <Image src={chat} alt="chat icon" />
              Client review
            </Link>
            <Link
              onClick={() => setIsActive("work")}
              className={`nav__link ${isActive == "work" && "nav__active"}`}
              href="#">
              <Image src={briefcase} alt="briefcase icon" />
              My work
            </Link>
            <Link
              onClick={() => setIsActive("design")}
              className={`nav__link ${isActive == "design" && "nav__active"}`}
              href="#">
              <Image src={gamepad} alt="gamepad icon" />
              Game design
            </Link>
            <Link
              onClick={() => setIsActive("marketing")}
              className={`nav__link ${isActive == "marketing" && "nav__active"}`}
              href="#">
              <Image src={target} alt="target icon" />
              Marketing & monetization
            </Link>
          </div>
          <div className="nav__socials_wrapper">
            <div className="nav__socials_container">
              <p className="nav__socials_title">Share a link?</p>
              <div className="nav__socials">
                <Link href="#" className="nav__social">
                  <Image src={telegram} alt="telegram" />
                </Link>
                <Link href="#" className="nav__social">
                  <Image src={linkedin} alt="linkedin" />
                </Link>
                <Link href="#" className="nav__social">
                  <Image src={whatsapp} alt="whatsapp" />
                </Link>
                <Link href="#" className="nav__social">
                  <Image src={facebook} alt="facebook" />
                </Link>
                <Link href="#" className="nav__social">
                  <Image src={twitter} alt="twitter" />
                </Link>
                <Link href="#" className="nav__social">
                  <Image src={email} alt="email" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}