import "./Gamedesign.css"

import BookPreviewModal from "@/app/components/helpers/BookPreviewModal/BookPreviewModal"

export default function Gamedesign() {

  return (
    <section className="gamedesign__section">
      <div className="gamedesign__legend_container">
        <p className="gamedesign__legend_title">Game Design</p>
        <p className="gamedesign__legend_name">Ruslan Rudniev</p>
      </div>

      <BookPreviewModal
        coverImage="/gamedesign-cover.jpg"
        pdfUrl="/gamedesign.pdf"
        buttonText="View Book"
        title="Gamedesign Book"
      />
    </section>
  )
}