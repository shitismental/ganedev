import Image from "next/image"
import "./Reviews.css"
import ReviewsImg from "@/public/imgs/reviews_img.png"
import ReviewsSlider from "@/app/components/helpers/ReviewsSlider/ReviewsSlider";

export default async function Reviews() {
  const API_URL = process.env.API_URL;
  let reviews = [];
  
  let debugInfo = "Fetching..."; 

  try {
    const fetchUrl = `${API_URL}/reviews/`;
    debugInfo = `Trying to hit: ${fetchUrl}`;

    const res = await fetch(fetchUrl, {
      cache: "no-store",
    });
    
    if (res.ok) {
      reviews = await res.json();
      debugInfo = `SUCCESS! Found ${reviews.length} reviews.`;
    } else {
      debugInfo = `DJANGO REJECTED IT: Status ${res.status} - ${res.statusText}`;
    }
  } catch (error: any) {
    debugInfo = `NEXT.JS NETWORK CRASH: ${error.message}`;
  }

  return (
    <section className="reviews__section" id="reviews__section">
      <div className="reviews__line"></div>

      <div style={{ background: "red", color: "white", padding: "20px", width: "100%", zIndex: 9999, position: "relative", textAlign: "center" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>VERCEL DEBUG LOG:</p>
        <p style={{ margin: "10px 0" }}>{debugInfo}</p>
        <p style={{ margin: 0 }}>Env Var Loaded: {API_URL ? "YES" : "NO (It is undefined!)"}</p>
      </div>

      <div className="reviews__content_wrapper">
        <ReviewsSlider reviews={reviews} />
        <Image src={ReviewsImg} alt="reviews image" className="reviews__img" />
      </div>
      <div className="reviews__line"></div>
    </section>
  )
}