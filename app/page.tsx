import { BlogSection } from "@/components/front/blog-section";
import { FAQSection } from "@/components/front/faq-section";
import Hero from "@/components/front/Hero";
import Process from "@/components/front/Process";
import Services from "@/components/front/Services";
import { WhoWeAre } from "@/components/front/WhoWeAre";

import React from "react";

export default function page() {
  return (
    <div>
      <Hero />
      <Process />
      <WhoWeAre />
      <Services />
      <BlogSection />
      <FAQSection />
    </div>
  );
}
