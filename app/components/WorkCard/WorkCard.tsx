import Image from "next/image";
import Link from "next/link";

import "./WorkCard.css"

type WorkTags = {
  id: number;
  tag: string;
}

type WorkCardTypes = {
  name: string;
  desc: string;
  img: any;
  work_tags: WorkTags[];
}

export default function WorkCard({ name, desc, img, work_tags }: WorkCardTypes) {
  return (
    <div className="work__card_container">
      <Image src={img} alt="work image" className="work__card_img" />
      <div className="work__card_content_container">
        <div className="work__card_name_container">
          <p className="work__card_name_text">{name}</p>
          <Link href="#" className="work__card_name_icon">
            <svg viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.37629 5.93771C7.56376 6.12524 7.66907 6.37954 7.66907 6.64471C7.66907 6.90987 7.56376 7.16418 7.37629 7.35171L1.71929 13.0087C1.62704 13.1042 1.5167 13.1804 1.39469 13.2328C1.27269 13.2852 1.14147 13.3128 1.00869 13.314C0.87591 13.3151 0.744231 13.2898 0.621335 13.2395C0.498438 13.1892 0.386786 13.115 0.292893 13.0211C0.199 12.9272 0.124747 12.8156 0.0744663 12.6927C0.0241854 12.5698 -0.00111606 12.4381 3.77571e-05 12.3053C0.00119157 12.1725 0.0287779 12.0413 0.0811869 11.9193C0.133596 11.7973 0.209778 11.687 0.305288 11.5947L5.25529 6.64471L0.305288 1.69471C0.12313 1.5061 0.0223355 1.2535 0.0246139 0.991306C0.0268924 0.72911 0.132061 0.478296 0.317469 0.292889C0.502877 0.107481 0.75369 0.00231075 1.01589 3.24249e-05C1.27808 -0.0022459 1.53069 0.0985479 1.71929 0.280706L7.37629 5.93771Z" fill="#fff" />
            </svg>
          </Link>
        </div>
        {work_tags.length > 0 &&
          <div className="work__card_tags_container">
            {work_tags.map(work_tag => {
              return (
                <div key={work_tag.id} className="work__tag_container">
                  <p className="work__tag_text">{work_tag.tag}</p>
                </div>
              )
            })}
          </div>
        }
        <p className="work__card_desc">{desc}</p>
        <div className="work__card_btns">
          <Link href="#" className="work__card_btn">
            Discover More
          </Link>
          <Link href="#" className="work__card_btn">
            View Gameplay
          </Link>
          <Link href="#" className="work__card_btn">
            C# Script
          </Link>
        </div>
      </div>
    </div>
  )
}