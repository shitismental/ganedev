import "./Marketing.css";

import BookPreviewModal from "@/app/components/helpers/BookPreviewModal/BookPreviewModal";

export default function Marketing() {

  return (
    <section className="marketing__section" id="marketing__section">
      <div className="marketing__top_container">
        <p className="marketing__top_title">
          MARKETING AND MONETIZATION
        </p>
        <p className="marketing__top_name">
          Ruslan Rudniev
        </p>
      </div>

      <BookPreviewModal
        coverImage="/pitch-deck-cover.jpg"
        pdfUrl="/pitch-deck.pdf"
        buttonText="View Book"
        title="Developer Book"
      />
    </section>
  );
}