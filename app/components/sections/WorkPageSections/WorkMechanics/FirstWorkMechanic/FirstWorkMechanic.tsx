import Image from "next/image"
import test from "@/public/imgs/test.png"

import "./FirstWorkMechanic.css"

export default function FirstWorkMechanic() {
  return (
    <div className="work__mechanics_first_mechanic_container">
      <div className="work__mechanics_first_mechanic_content_container">
        <div className="work__mechanics_first_mechanic_title_container">
          <p className="work__mechanics_first_mechanic_title">Something here</p>
        </div>
        <div className="work__mechanics_first_mechanic_desc_container">
          <p className="work__mechanics_first_mechanic_desc">To make demons spawn around the player, I created a list of them and used Instantiate and then calculated their position and player’s. Then I’m placing the Particle system from the list, and making it random. So after you hit the demon, the particle system will be played(either white or red)</p>
        </div>
      </div>
      <div className="work__mechanics_first_mechanic_img_container">
        <Image src={test} alt="test" className="work__mechanics_first_mechanic_img" />
      </div>
      <div className="work__mechanics_first_mechanic_img_container">
        <Image src={test} alt="test" className="work__mechanics_first_mechanic_img" />
      </div>
    </div>
  )
}