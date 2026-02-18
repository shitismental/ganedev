"use client";

import dynamic from "next/dynamic";
import "./Marketing.css";

const PdfFlipbook = dynamic(() => import("../../../helpers/PdfFlipbook/PdfFlipbook"), { 
  ssr: false,
  loading: () => <div style={{ minHeight: '225px', display: 'flex', alignItems: 'center' }}>Loading pitch deck...</div>
});

export default function Marketing() {
  return (
    <section className="marketing__section" id="marketing__section">
      <div className="marketing__top_container">
        <p className="marketing__top_title">Marketing and monetization</p>
        <p className="marketing__top_name">Ruslan Rudniev</p>
      </div>
      
      <PdfFlipbook />
    </section>
  );
}