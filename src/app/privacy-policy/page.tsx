import React from 'react';
import style from "./styles.module.scss"
import {InfoBlock} from "@/shared/info-block/info-block";

export default function PrivacyPolicy () {
  return (
    <div>
      <section className={style.section}>
        <h1>Privacy Policy</h1>
        <h3>Collection of personal information</h3>
        <p>We collect different types of personal information about you when you use our website, including:
          <br/>
          <br/>
          Information you provide to us: This may include your name, email address, phone number, demographic information, and other information you provide to us when you register on our website; create an account, play a game, or contact customer service.
          Information we collect automatically: When you use our website, we automatically collect certain information about your device and your activity, including your IP address, browser type, operating system, the date and time of your visit, the pages you view, and the actions you take. . perform. on our site.
          Information from cookies and other tracking technologies. We use cookies and other tracking technologies to collect information about your activity on our Site. We use cookies for a variety of purposes, including improving your user experience, tracking your activity on our Site, and delivering targeted information to you. ads.</p>
        <h3>Use of personal information</h3>
        <p>We use your personal information for the following purposes:
          <br/>
          <br/>
          Providing and improving our services. We use your personal information to provide you with our services, including access to games, processing your bets and paying out winnings. We also use your personal information to improve our services and develop new features and products.
          Communicating with you: We may use your personal information to contact you about your account, our services or for other purposes related to our business.
          Personalizing your experience: We may use your personal information to personalize your experience on our Site, including to provide targeted game recommendations and offers.
          Advertising: We may use your personal information to show you targeted advertising on our and other websites.
          Research purposes: We may use your personal information for research purposes to better understand our users and improve our services.</p>
        <h3>Disclosure of personal information</h3>
        <p>We may disclose your personal information to third parties in the following circumstances:
          <br/>
          <br/>
          Service Providers: We may disclose your personal information to third parties who provide services to us, such as payment processing, customer service, and marketing.
          Legal Requirements: We may disclose your personal information if we are required to do so by law, regulation, or legal process.
          Protecting Our Rights: We may disclose your personal information if we believe that doing so is necessary to protect our rights or property.</p>
        <h3>Storing and protecting your personal information</h3>
        <p>We take steps to protect your personal information from unauthorized access, use, disclosure, modification or destruction. We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected or to comply with our legal obligations.</p>
      </section>
      <InfoBlock/>
    </div>
  );
};