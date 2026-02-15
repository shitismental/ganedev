import { workData } from "@/app/tempdata/work_data"

import WorkCard from "../../../helpers/WorkCard/WorkCard"

import "./Work.css"

export default function Work() {

  const generateSlug = (name: string) => {
      return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
    };

  return (
    <section className="work__section" id="work__section">
      <div className="work__section_top">
        <p className="work__section_title">My work</p>
        <p className="work__section_name">Ruslan Rudniev</p>
      </div>
      <div className="work__section_cards_container">
        {workData.map(work => {

          const workSlug = generateSlug(work.name)

          return (
            <WorkCard key={work.id} slug={workSlug} name={work.name} desc={work.desc} video={work.video} work_tags={work.tags} />
          )
        })}
      </div>
    </section>
  )
}