import React from "react";
import Section from "./Section";
import { smallSphere, stars } from "@/public/assets";
import Image from "next/image";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Pricing = () => {
  const t = useTranslations('pricing');
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <Image
            src={smallSphere}
            alt="Sphere"
            width={255}
            height={255}
            className="relative z-1"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src={stars}
              alt="stars"
              width={950}
              height={400}
              className="w-full"
            />
          </div>
        </div>
        <Heading
          tag={t('tagtext')}
          title={t('title')}
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
            <Link href="#" className="text-xs font-code font-bold tracking-wider uppercase border-b">{t('seefull')}</Link>

        </div>
      </div>
    </Section>
  );
};

export default Pricing;
