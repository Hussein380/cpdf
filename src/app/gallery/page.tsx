import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { SlideUp } from "@/components/animations";
import { ImageGallery } from "@/components/sections/gallery/ImageGallery";

export const metadata: Metadata = {
  title: `Gallery | ${SITE_CONFIG.name}`,
  description: "Explore the impact of CPDF through our visual gallery of events, workshops, and youth engagements across Kenya.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-slate-50 relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 dots-bg opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <SlideUp>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-6">
              Photo <span className="text-cpdf-teal">Gallery</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
              A visual journey of our events, civic education workshops, and political dialogues empowering youth across Kenya.
            </p>
          </SlideUp>
        </div>
      </section>
      <ImageGallery />
    </>
  );
}
