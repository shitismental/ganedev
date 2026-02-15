import Navbar from "@/app/components/layout/Navbar/Navbar";
import WorkAbout from "@/app/components/sections/WorkPageSections/WorkAbout/WorkAbout";
import WorkMechanics from "@/app/components/sections/WorkPageSections/WorkMechanics/WorkMechanics";
import RightSidePanel from "@/app/components/helpers/RightSidePanel/RightSidePanel";
import Footer from "@/app/components/layout/Footer/Footer";

import "../../../index.css"
import "../../../globals.css"

import { workData } from "@/app/tempdata/work_data";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const formattedTitle = slug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: `${formattedTitle} | Ruslan Rudniev`,
  }
}

export default async function WorkShowcasePage({ params }: { params: Params }) {

  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const project = workData.find(work => {
    const dataSlug = work.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    return dataSlug === slug;
  });

  if (!project) {
    return <h1>Project not found!</h1>;
  }

  const { id, name, full_desc, tags } = project;

  return (
    <div className="layout__container">
      <div className="navbar">
        <Navbar />
      </div>
      <main className="main__container">
        <WorkAbout name={name} full_desc={full_desc} tags={tags} />
        <WorkMechanics />
      </main>
      <div className="footer">
        <Footer />
      </div>
      <RightSidePanel />
    </div>
  );
}