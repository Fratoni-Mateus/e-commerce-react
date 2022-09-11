import React from "react";

import {
  Logo,
  AboutUsLink,
  PrivacyPolicyLink,
  ContactLink,
  TermsAndConditionsLink,
} from "../atoms";
import { SocialNetworksWrapper, LegalWords } from "../molecules";

export default function AppFooter() {
  return (
    <footer className="bg-lGrey flex-column pd-24 font-14 font-light">
      <div className="flex space-evenly">
        <Logo />
        <SocialNetworksWrapper />
        <AboutUsLink />
        <PrivacyPolicyLink />
        <ContactLink />
        <TermsAndConditionsLink />
      </div>
      <div className="pd-12">
        <LegalWords />
      </div>
    </footer>
  );
}
