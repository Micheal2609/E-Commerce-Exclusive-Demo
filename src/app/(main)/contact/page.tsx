'use client';

import { Breadcrumb } from "../../shared/components";
import { ContactFormSection, InformationSection } from "./components/index";

const ContactPage = () => {
  return (
    <div className="w-full px-36 py-10">
      <Breadcrumb />
      <div className="grid grid-cols-3 gap-5">
        <InformationSection />
        <ContactFormSection />
      </div>
    </div>
  )
};

export default ContactPage;