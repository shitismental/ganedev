import Image from "next/image"
import test from "@/public/imgs/test.png"

import "./SecondWorkMechanic.css"

export default function SecondWorkMechanic() {
  return (
    <div className="work__mechanics_second_mechanic_container">
      <div className="work__mechanics_second_mechanic_content_container">
        <div className="work__mechanics_second_mechanic_content_title_container">
          <p className="work__mechanics_second_mechanic_content_title">Title here Title here</p>
        </div>
        <div className="work__mechanics_second_mechanic_content_desc_container">
          <p className="work__mechanics_second_mechanic_content_desc">desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here </p>
        </div>
        <div className="work__mechanics_second_mechanic_img_container">
          <Image src={test} alt="test" className="work__mechanics_second_mechanic_img" />
        </div>
      </div>
      <div className="work__mechanics_second_mechanic_content_container">
        <div className="work__mechanics_second_mechanic_content_title_container">
          <p className="work__mechanics_second_mechanic_content_title">Title here Title here</p>
        </div>
        <div className="work__mechanics_second_mechanic_content_desc_container">
          <p className="work__mechanics_second_mechanic_content_desc">desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here </p>
        </div>
        <div className="work__mechanics_second_mechanic_img_container">
          <Image src={test} alt="test" className="work__mechanics_second_mechanic_img" />
        </div>
      </div>
    </div>
  )
}