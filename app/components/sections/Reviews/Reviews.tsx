import Image from "next/image"
import Link from "next/link"

import "./Reviews.css"

import ProfileHollow from "@/public/icons/profile_hollow.svg"

import ReviewsImg from "@/public/imgs/reviews_img.png"

export default function Reviews() {
  return (
    <section className="reviews__container">
      <div className="reviews__line"></div>
      <div className="reviews__content_wrapper">
        <div className="reviews__content_container">
        <p className="reviews__content_title">What Client Says</p>
        <div className="reviews__content_text_container">
          <div className="reviews__content_text_top">
            <Image src={ProfileHollow} alt="hollow profile icon" className="reviews__content_text_top_icon" />
            <div className="reviews__content_text_top_content">
              <h4 className="reviews__content_text_top_title">Harm Jaap de Boer</h4>
              <p className="reviews__content_text_top_desc">Teacher and projectmanager, Alfa-College College</p>
            </div>
          </div>
          <div className="reviews__content_text_bottom">
            <p className="reviews__content_text_bottom_desc">I am a third-year student in Creative Media and Game Technologies at Hanze University of Applied Sciences. In my university projects, I take on the role of Team lead. As an individual contributor, I have taken on roles such as Game Producer, Level Designer, Narrative Designer, and Programmer. I have also taken the lead in primary research, concepting the prototypes by brainstorming, and creating Game Design Documents.</p>
            <p className="reviews__content_text_bottom_desc">I have worked on various types of games, including board games, 2D games, 3D VR projects, and mobile applications. Additionally, I’m comfortable presenting and pitching to an audience.</p>
          </div>
        </div>
        <div className="reviews__content_btns_container">
          <Link href="#" className="reviews__content_linkedin_btn">
            <p className="reviews__content_linkedin_btn_text">Linkedin</p>
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3333 0C13.7754 0 14.1993 0.175595 14.5118 0.488155C14.8244 0.800716 15 1.22464 15 1.66667V13.3333C15 13.7754 14.8244 14.1993 14.5118 14.5118C14.1993 14.8244 13.7754 15 13.3333 15H1.66667C1.22464 15 0.800716 14.8244 0.488155 14.5118C0.175595 14.1993 0 13.7754 0 13.3333V1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488155C0.800716 0.175595 1.22464 0 1.66667 0H13.3333ZM12.9167 12.9167V8.5C12.9167 7.77949 12.6304 7.0885 12.121 6.57903C11.6115 6.06955 10.9205 5.78333 10.2 5.78333C9.49167 5.78333 8.66667 6.21667 8.26667 6.86667V5.94167H5.94167V12.9167H8.26667V8.80833C8.26667 8.16667 8.78333 7.64167 9.425 7.64167C9.73442 7.64167 10.0312 7.76458 10.25 7.98338C10.4688 8.20217 10.5917 8.49891 10.5917 8.80833V12.9167H12.9167ZM3.23333 4.63333C3.60464 4.63333 3.96073 4.48583 4.22328 4.22328C4.48583 3.96073 4.63333 3.60464 4.63333 3.23333C4.63333 2.45833 4.00833 1.825 3.23333 1.825C2.85982 1.825 2.5016 1.97338 2.23749 2.23749C1.97338 2.5016 1.825 2.85982 1.825 3.23333C1.825 4.00833 2.45833 4.63333 3.23333 4.63333ZM4.39167 12.9167V5.94167H2.08333V12.9167H4.39167Z" fill="currentColor" />
            </svg>
          </Link>
          <div className="reviews__content_arrows_container">
            <Link href="#" className="reviews__content_arrow_btn left">
              <svg viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.37629 5.93771C7.56376 6.12524 7.66907 6.37954 7.66907 6.64471C7.66907 6.90987 7.56376 7.16418 7.37629 7.35171L1.71929 13.0087C1.62704 13.1042 1.5167 13.1804 1.39469 13.2328C1.27269 13.2852 1.14147 13.3128 1.00869 13.314C0.87591 13.3151 0.744231 13.2898 0.621335 13.2395C0.498438 13.1892 0.386786 13.115 0.292893 13.0211C0.199 12.9272 0.124747 12.8156 0.0744663 12.6927C0.0241854 12.5698 -0.00111606 12.4381 3.77571e-05 12.3053C0.00119157 12.1725 0.0287779 12.0413 0.0811869 11.9193C0.133596 11.7973 0.209778 11.687 0.305288 11.5947L5.25529 6.64471L0.305288 1.69471C0.12313 1.5061 0.0223355 1.2535 0.0246139 0.991306C0.0268924 0.72911 0.132061 0.478296 0.317469 0.292889C0.502877 0.107481 0.75369 0.00231075 1.01589 3.24249e-05C1.27808 -0.0022459 1.53069 0.0985479 1.71929 0.280706L7.37629 5.93771Z" fill="currentColor" />
              </svg>
            </Link>
            <Link href="#" className="reviews__content_arrow_btn">
              <svg viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.37629 5.93771C7.56376 6.12524 7.66907 6.37954 7.66907 6.64471C7.66907 6.90987 7.56376 7.16418 7.37629 7.35171L1.71929 13.0087C1.62704 13.1042 1.5167 13.1804 1.39469 13.2328C1.27269 13.2852 1.14147 13.3128 1.00869 13.314C0.87591 13.3151 0.744231 13.2898 0.621335 13.2395C0.498438 13.1892 0.386786 13.115 0.292893 13.0211C0.199 12.9272 0.124747 12.8156 0.0744663 12.6927C0.0241854 12.5698 -0.00111606 12.4381 3.77571e-05 12.3053C0.00119157 12.1725 0.0287779 12.0413 0.0811869 11.9193C0.133596 11.7973 0.209778 11.687 0.305288 11.5947L5.25529 6.64471L0.305288 1.69471C0.12313 1.5061 0.0223355 1.2535 0.0246139 0.991306C0.0268924 0.72911 0.132061 0.478296 0.317469 0.292889C0.502877 0.107481 0.75369 0.00231075 1.01589 3.24249e-05C1.27808 -0.0022459 1.53069 0.0985479 1.71929 0.280706L7.37629 5.93771Z" fill="currentColor" />
              </svg>
            </Link>
          </div>
        </div>
        </div>
        <Image src={ReviewsImg} alt="reviews image" className="reviews__img" />
      </div>
      <div className="reviews__line"></div>
    </section>
  )
}