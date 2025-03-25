import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import {
  check,
  service1,
  service2,
  service3,
  smallSphere,
  stars,
} from "../../public/assets";
import Image from "next/image";
import { brainwaveServicesIcons } from "../../constants";
import Generating from "./Generating";
import {
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import { Gradient } from "./design/Hero";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("service");
  const brainwaveservices = t.raw("stext");

  return (
    <Section id="how-to-use">
      <div className="container">
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
        <Heading title={t("title")} text={t("text")} />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <Image
                src={service1}
                alt="Smartest AI"
                width={800}
                height={730}
                className="w-full h-full object-cover md:object-right"
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">{t("hfore")}</h4>
              <p className="body-2 mb-[3rem] text-n-3">{t("paragraf")}</p>
              <ul className="body-2">
                {brainwaveservices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <Image src={check} alt={index} width={24} height={24} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={service2}
                  alt="robot"
                  width={630}
                  height={750}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">{t("title2")}</h4>
                <p className="body-2 mb-[3rem] text-n-3">{t("paragraf2")}</p>
              </div>
              <PhotoChatMessage />
            </div>
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">{t("hfore2")}</h4>
                <p className="body-2 mb-[2rem] text-n-3">{t("paragraf3")}</p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <Image src={item} alt={item} width={24} height={24} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <Image
                  src={service3}
                  alt="Scary robot"
                  width={520}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
