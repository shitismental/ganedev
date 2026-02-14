import Image from "next/image"
import Link from "next/link"

import test from "@/public/imgs/test.png"

import "./WorkAbout.css"

type WorkTagsTypes = {
  id: number,
  tag: string,
}

type WorkAboutTypes = {
  name: string,
  full_desc: string,
  tags: WorkTagsTypes[]
}

export default function WorkAbout({ name, full_desc, tags }: WorkAboutTypes) {
  return (
    <section className="work__about_section">
      <div className="work__about_legend">
        <p className="work__about_title">Ruslan Rudniev</p>
        <div className="line"></div>
      </div>
      <div className="work__about_wrapper">
        <div className="work__about_content_container">
          <div className="work__about_content_top">
            <h3 className="work__about_content_top_title">{name}</h3>
            <div className="work__about_tags_container">
              {tags.map(tag => {
                return (
                  <div key={tag.id} className="work__about_tag_container">
                    <p className="work__about_tag_text">{tag.tag}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="work__about_content_bottom">
            <div className="work__about_content_bottom_text">
              {full_desc.split('\n').map((paragraph, index) => (
                paragraph.trim() !== "" && (
                  <p key={index} className="work__about_content_bottom_desc">
                    {paragraph}
                  </p>
                )
              ))}
            </div>
            <div className="work__about_content_bottom_btns">
              <div className="work__about_content_bottom_btns_top">
                <Link href="#" className="work__about_content_bottom_top_btn view">
                  View Gameplay
                </Link>
                <Link href="#" className="work__about_content_bottom_top_btn email">
                  <svg viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.82 0H22.695C24.57 0 25.515 0.885 25.515 2.685V15.315C25.515 17.1 24.57 18 22.695 18H2.82C0.945 18 0 17.1 0 15.315V2.685C0 0.885 0.945 0 2.82 0ZM12.75 12.9L22.86 4.605C23.22 4.305 23.505 3.615 23.055 3C22.62 2.385 21.825 2.37 21.3 2.745L12.75 8.535L4.215 2.745C3.69 2.37 2.895 2.385 2.46 3C2.01 3.615 2.295 4.305 2.655 4.605L12.75 12.9Z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
              <div className="work__about_content_bottom_btns_bottom">
                <Link href="#" className="work__about_content_bottom_btn script">
                  View C# Script
                </Link>
                <Link href="#" className="work__about_content_bottom_btn marketing">
                  Marketing & Monetization
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image src={test} alt="test" className="work__about_img" />
      </div>
    </section>
  )
}