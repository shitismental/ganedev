import { workData } from "@/app/tempdata/work_data"
import WorkCard from "../../../helpers/WorkCard/WorkCard"
import "./Work.css"

export default function Work() {
  const generateSlug = (name: string) => {
      return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const leftColumnData = workData.filter((_, index) => index % 2 === 0);
  const rightColumnData = workData.filter((_, index) => index % 2 !== 0);

  return (
    <section className="work__section" id="work__section">
      <div className="work__section_top">
        <p className="work__section_title">My work</p>
        <p className="work__section_name">Ruslan Rudniev</p>
      </div>
      <div className="work__section_cards_container">
        
        <div className="work__section_column">
          {leftColumnData.map(work => (
            <WorkCard key={work.id} slug={generateSlug(work.name)} name={work.name} desc={work.desc} video={work.video} work_tags={work.tags} />
          ))}
        </div>

        <div className="work__section_column">
          {rightColumnData.map(work => (
            <WorkCard key={work.id} slug={generateSlug(work.name)} name={work.name} desc={work.desc} video={work.video} work_tags={work.tags} />
          ))}
        </div>

      </div>
    </section>
  )
}