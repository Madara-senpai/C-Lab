"use client";
import { brainwave } from "../../public/assets";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "./local-switcher";
import MenuSvg from "./svg/MenuSvg";

const Header = () => {
  const t = useTranslations("navbar");
  const navigationItems = t.raw("items");
  const locale = useLocale(); // Get the current locale

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm
    ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}
    >
      <div className="flex items-center px-2 lg:px-5 xl:px-7.5 max-lg:py-4">
        <Link href="/" className="block w-[12rem] xl:mr-8">
          <Image src={brainwave} alt="Brainwave" width={190} height={40} />
        </Link>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigationItems.map((item) => (
              <Link
                href={`/${locale}${item.url}`} //Add locale to links
                key={item.id}
                onClick={handleClick}
                className={`block relative font-code text-xl uppercase text-n-1/50 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                }
                     px-4 py-4 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-8`}
              >
                {item.title}
              </Link>
            ))}
            {/* LocaleSwitcher inside the menu when open */}
            <div className="mt-4 lg:hidden">
              <LocaleSwitcher />
            </div>
          </div>
          <HamburgerMenu />
        </nav>
        {/* Keep LocaleSwitcher visible on larger screens */}
        <div className="hidden lg:block mr-4">
          <LocaleSwitcher />
        </div>
        <Link
          href={`/${locale}/signup`}
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          {t("signup")}
        </Link>
        <Button className="hidden lg:flex" href={`/${locale}/signin`}>
          {t("login")}
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
