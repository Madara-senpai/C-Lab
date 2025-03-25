import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonGradient from "../components/svg/ButtonGradient";

export const metadata = {
  title: "Main Title",
  description: "Created by Bionics",
  icons: {
    icon: "./science-book-physics.svg", // Defines the favicon
  },
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />

          {children}

          <Footer />
        </NextIntlClientProvider>
        <ButtonGradient />
      </body>
    </html>
  );
}
