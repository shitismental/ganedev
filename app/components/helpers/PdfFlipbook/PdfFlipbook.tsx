"use client";

import React, { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

type BookPageProps = {
  pageNumber: number;
  width: number;
  height: number;
  onRatio?: (r: number) => void;
};

const BookPage = React.forwardRef<HTMLDivElement, BookPageProps>(
  ({ pageNumber, width, height, onRatio }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          width,
          height,
          backgroundColor: "#0f0f0f",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Page
          pageNumber={pageNumber}
          height={height}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          onLoadSuccess={(page) => {
            if (onRatio) {
              const ratio = page.originalHeight / page.originalWidth;
              onRatio(ratio);
            }
          }}
        />
      </div>
    );
  }
);

BookPage.displayName = "BookPage";

const FlipBook: any = HTMLFlipBook;

const SINGLE_PAGE_BREAKPOINT = 1024;

export default function PdfFlipbook() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [bookWidth, setBookWidth] = useState(0);
  const [pageRatio, setPageRatio] = useState<number | null>(null);
  const [isCover, setIsCover] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<any>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    if (!containerRef.current) return;

    const update = () => {
      setBookWidth(containerRef.current!.clientWidth);
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(containerRef.current);

    return () => ro.disconnect();
  }, []);

  const isSinglePage = bookWidth < SINGLE_PAGE_BREAKPOINT;

  const pageWidth = isSinglePage
    ? Math.floor(bookWidth)
    : Math.floor(bookWidth / 2);

  const pageHeight = pageRatio
    ? Math.round(pageWidth * pageRatio)
    : 400;

  useEffect(() => {
    const book = bookRef.current;
    if (!book) return;

    const inst = book.pageFlip?.();
    if (!inst) return;

    requestAnimationFrame(() => {
      try {
        inst.updateFromHtml();
      } catch {}
    });
  }, [pageWidth, pageHeight, isSinglePage, numPages]);

  const goNextPage = () =>
    bookRef.current?.pageFlip().flipNext();

  const goPrevPage = () =>
    bookRef.current?.pageFlip().flipPrev();

  return (
    <div className="marketing__content_container">
      <button
        className="marketing__content_btn left"
        onClick={goPrevPage}
      >
        <svg
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.37629 5.93771C7.56376 6.12524 7.66907 6.37954 7.66907 6.64471C7.66907 6.90987 7.56376 7.16418 7.37629 7.35171L1.71929 13.0087C1.62704 13.1042 1.5167 13.1804 1.39469 13.2328C1.27269 13.2852 1.14147 13.3128 1.00869 13.314C0.87591 13.3151 0.744231 13.2898 0.621335 13.2395C0.498438 13.1892 0.386786 13.115 0.292893 13.0211C0.199 12.9272 0.124747 12.8156 0.0744663 12.6927C0.0241854 12.5698 -0.00111606 12.4381 3.77571e-05 12.3053C0.00119157 12.1725 0.0287779 12.0413 0.0811869 11.9193C0.133596 11.7973 0.209778 11.687 0.305288 11.5947L5.25529 6.64471L0.305288 1.69471C0.12313 1.5061 0.0223355 1.2535 0.0246139 0.991306C0.0268924 0.72911 0.132061 0.478296 0.317469 0.292889C0.502877 0.107481 0.75369 0.00231075 1.01589 3.24249e-05C1.27808 -0.0022459 1.53069 0.0985479 1.71929 0.280706L7.37629 5.93771Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div
        ref={containerRef}
        style={{
          flex: 1,
          minWidth: 0,
          height: pageHeight,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Document
          file="/pitch-deck.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {numPages && pageWidth > 0 && (
            <FlipBook
              key={isSinglePage ? "single" : "spread"}
              ref={bookRef}
              width={pageWidth}
              height={pageHeight}
              size="fixed"
              showCover={!isSinglePage}
              usePortrait={isSinglePage}
              drawShadow
              flippingTime={800}
              useMouseEvents={false}
              disableFlipByClick
              onFlip={(e: any) => {
                setIsCover(e.data === 0);
              }}
              style={{
                margin: "0 auto",
                transform:
                  !isSinglePage && isCover
                    ? `translateX(-${pageWidth / 2}px)`
                    : "none",
                transition: "transform 250ms ease",
              }}
            >
              {Array.from({ length: numPages }, (_, i) => (
                <BookPage
                  key={i}
                  pageNumber={i + 1}
                  width={pageWidth}
                  height={pageHeight}
                  onRatio={i === 0 ? setPageRatio : undefined}
                />
              ))}
            </FlipBook>
          )}
        </Document>
      </div>

      <button
        className="marketing__content_btn"
        onClick={goNextPage}
      >
        <svg
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.37629 5.93771C7.56376 6.12524 7.66907 6.37954 7.66907 6.64471C7.66907 6.90987 7.56376 7.16418 7.37629 7.35171L1.71929 13.0087C1.62704 13.1042 1.5167 13.1804 1.39469 13.2328C1.27269 13.2852 1.14147 13.3128 1.00869 13.314C0.87591 13.3151 0.744231 13.2898 0.621335 13.2395C0.498438 13.1892 0.386786 13.115 0.292893 13.0211C0.199 12.9272 0.124747 12.8156 0.0744663 12.6927C0.0241854 12.5698 -0.00111606 12.4381 3.77571e-05 12.3053C0.00119157 12.1725 0.0287779 12.0413 0.0811869 11.9193C0.133596 11.7973 0.209778 11.687 0.305288 11.5947L5.25529 6.64471L0.305288 1.69471C0.12313 1.5061 0.0223355 1.2535 0.0246139 0.991306C0.0268924 0.72911 0.132061 0.478296 0.317469 0.292889C0.502877 0.107481 0.75369 0.00231075 1.01589 3.24249e-05C1.27808 -0.0022459 1.53069 0.0985479 1.71929 0.280706L7.37629 5.93771Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}
