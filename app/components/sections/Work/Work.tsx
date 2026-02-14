import { workData } from "@/app/tempdata/work_data"

import WorkCard from "../../WorkCard/WorkCard"

import "./Work.css"

export default function Work() {
  return (
    <section className="work__section" id="work__section">
      <div className="work__section_top">
        <p className="work__section_title">My work</p>
        <p className="work__section_name">Ruslan Rudniev</p>
      </div>
      <div className="work__section_cards_container">
        {workData.map(work => {
          return (
            <WorkCard key={work.id} name={work.name} desc={work.desc} img={work.img} work_tags={work.tags} />
          )
        })}
      </div>
    </section>
  )
}