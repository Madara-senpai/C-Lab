import React from "react";
import Section from "./Section";
import { socials } from "../../constants";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations('footer');
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
            &copy;{' '}
          {new Date().getFullYear()}.
          {t('rights')}
        </p>

        <ul className="flex gap-5 flex-wrap">
            {socials.map((item) => (
                <Link href={item.url} key={item.id} target="_blank" className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6">
                    <Image src={item.iconUrl} alt={item.title} width={16} height={16} />
                </Link>
            ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
