import Image from "next/image"
import ResumeBtn from "../../../helpers/ResumeBtn/ResumeBtn"
import "./About.css"

const API_URL = process.env.API_URL

export default async function About() {
  let aboutData = null

  try {
    const res = await fetch(`${API_URL}/about/`, {
      cache: "no-cache"
    })

    console.log("Status:", res.status)
    console.log("URL:", `${API_URL}/about/`)

    if (!res.ok) {
      throw new Error("Failed to fetch about data")
    }

    aboutData = await res.json()
  } catch (error) {
    console.error("About fetch error:", error)
  }

  if (!aboutData) return null

  return (
    <section className="about__section" id="about__section">
      <div className="about__legend_container">
        <span className="about__legend_title">
          Ruslan Rudnev
        </span>
        <div className="about__legend_line"></div>
      </div>

      <div className="about__content_container">
        <div className="about__content_text_container">
          <h1 className="about__content_text_title">
            {aboutData.title}
          </h1>

          <div className="about__content_text_desc_container">
            {aboutData.text &&
              aboutData.text
                .split("\n")
                .filter((p: string) => p.trim() !== "")
                .map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="about__content_text_desc"
                  >
                    {paragraph}
                  </p>
                ))}
          </div>
        </div>

        <div className="about__content_video_container">
          <video
            src="/videos/Home_About.mp4"
            className="about__content_video_preview"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>

          <ResumeBtn resumeUrl={aboutData.resume} />
        </div>
      </div>
    </section>
  )
}
