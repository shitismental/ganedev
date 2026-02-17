import Image from "next/image"
import "./Reviews.css"
import ReviewsImg from "@/public/imgs/reviews_img.png"

import ReviewsSlider from "@/app/components/helpers/ReviewsSlider/ReviewsSlider";

export default async function Reviews() {
  const API_URL = process.env.API_URL;

  let reviews = [];
  try {
    const res = await fetch(`${API_URL}/reviews`, {
      cache: "no-cache",
    });
    
    if (res.ok) {
      reviews = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
  }

  return (
    <section className="reviews__section" id="reviews__section">
      <div className="reviews__line"></div>
      <div className="reviews__content_wrapper">
        
        <ReviewsSlider reviews={reviews} />
        
        <Image src={ReviewsImg} alt="reviews image" className="reviews__img" />
      </div>
      <div className="reviews__line"></div>
    </section>
  )
}