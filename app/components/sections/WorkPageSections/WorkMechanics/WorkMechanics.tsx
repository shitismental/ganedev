import Image from "next/image"

import FirstWorkMechanic from "./FirstWorkMechanic/FirstWorkMechanic"
import SecondWorkMechanic from "./SecondWorkMechanic/SecondWorkMechanic"
import ThirdWorkMechanic from "./ThirdWorkMechanic/ThirdWorkMechanic"

import "./WorkMechanics.css"

export default function WorkMechanics() {
  return (
    <section className="work__mechanics_section">
      <div className="work__mechanics_legend">
        <p className="work__mechanics_legend_title">Main Mechanics</p>
        <p className="work__mechanics_legend_name">Ruslan Rudniev</p>
      </div>
      <div className="work__mechanics_line"></div>
      <FirstWorkMechanic />
      <div className="work__mechanics_line"></div>
      <SecondWorkMechanic />
      <div className="work__mechanics_line"></div>
      <ThirdWorkMechanic />
      <div className="work__mechanics_line"></div>
    </section>
  )
}