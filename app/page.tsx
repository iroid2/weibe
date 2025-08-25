import { BlogSection } from "@/components/front/blog-section";
import { FAQSection } from "@/components/front/faq-section";
import Hero from "@/components/front/Hero";
import Process from "@/components/front/Process";
import { WhoWeAre } from "@/components/front/WhoWeAre";

import React from "react";

export default function page() {
  return (
    <div>
      <Hero />
      <Process />
      <WhoWeAre />
      <BlogSection />
      <FAQSection />
    </div>
  );
}
