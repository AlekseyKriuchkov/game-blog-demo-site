import type { Metadata } from "next";
import "./globals.scss";
import style from "./layout.module.scss"
import {Header} from "@/components/header/header";
import {Footer} from "@/components/footer/footer";
import {ConfirmAgeModal} from "@/components/confirm-age-modal/confirm-age-modal";
import {CookieConsentBanner} from "@/components/cookie-consent-banner/cookie-consent-banner";
import {AgeConfirmProvider} from "@/shared/contexts/age-confirm-provider";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "Smart Game",
  description: "Online Entertainment Games for Adults",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
      <AgeConfirmProvider>
        <div className={style.mainWrapper}>
          <Header />
          <ConfirmAgeModal/>
          <main className={style.main}>{children}</main>
          <CookieConsentBanner/>
          <Footer/>
        </div>
      </AgeConfirmProvider>
      </body>
    </html>
  );
}
