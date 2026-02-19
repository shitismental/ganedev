"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./BookPreviewModal.css";

type Props = {
  coverImage: string;
  pdfUrl: string;
  buttonText?: string;
  title?: string;
};

export default function BookPreviewModal({
  coverImage,
  pdfUrl,
  buttonText = "View Book",
  title = "Book Preview",
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <div className="book__preview_container">
        <Image
          src={coverImage}
          alt={title}
          fill
          priority
          className="book__preview_image"
        />

        <div className="book__preview_overlay">
          <button
            className="book__preview_button"
            onClick={() => setIsOpen(true)}
          >
            {buttonText}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="book__modal_container">
          <button
            className="book__modal_close"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          <iframe
            src={pdfUrl}
            className="book__modal_viewer"
            title={title}
          />

          <a
            href={pdfUrl}
            download
            className="book__modal_download"
          >
            Download PDF
          </a>
        </div>
      )}
    </>
  );
}
