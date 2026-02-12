import Image from "next/image"
import Link from "next/link"

import ResumeBtn from "../../ResumeBtn/ResumeBtn"
import "./About.css"

import aboutImg from "@/public/imgs/about_img.png"

export default function About() {
  return (
    <>
      <section className="about__container">
        <div className="about__legend_container">
          <span className="about__legend_title">
            Ruslan Rudnev
          </span>
          <div className="about__legend_line"></div>
        </div>
        <div className="about__content_container">
          <div className="about__content_text_container">
            <h1 className="about__content_text_title">Game Producer, Project Coordinator, Game Designer Unity Developer Intern</h1>
            <div className="about__content_text_desc_container">
              <p className="about__content_text_desc">I am a third-year student in Creative Media and Game Technologies at Hanze University of Applied Sciences. In my university projects, I take on the role of Team lead. As an individual contributor, I have taken on roles such as Game Producer, Level Designer, Narrative Designer, and Programmer. I have also taken the lead in primary research, concepting the prototypes by brainstorming, and creating Game Design Documents.</p>
              <p className="about__content_text_desc">I have worked on various types of games, including board games, 2D games, 3D VR projects, and mobile applications. Additionally, I’m comfortable presenting and pitching to an audience.</p>
            </div>
          </div>
          <div className="about__content_video_container">
            <Image src={aboutImg} width={1000} height={1000} alt="video preview" className="about__content_video_preview" />
            <ResumeBtn />
          </div>
        </div>
      </section>
    </>
  )
}