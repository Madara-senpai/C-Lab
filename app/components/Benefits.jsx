import React from "react";
import Section from "./Section"; // Importing a custom component for a section layout.
import Heading from "./Heading"; // Importing a custom component for the title/heading.
import { benefits } from "../../constants"; // Importing 'benefits' data from a constants file (though it's not used here directly).
import Image from "next/image"; // Importing the Image component from Next.js for optimized images.
import Arrow from "@/app/components/svg/Arrow"; // Importing a custom Arrow SVG component.
import { GradientLight } from "./design/Benefits"; // Importing a custom gradient light design component.
import ClipPath from "@/app/components/svg/ClipPath"; // Importing a custom ClipPath SVG component.
import { useTranslations } from "next-intl"; // Importing a hook to handle translations (for multilingual support).

const Benefits = () => {
  // Fetching the translation for 'benefits' using the 'next-intl' hook.
  const t = useTranslations("benefits");
  // Getting the raw array of navigation items (likely benefits sections) from translations.
  const navigationItems = t.raw("mitems");

  return (
    <Section id="features">
      {" "}
      {/* Section component to wrap the content. */}
      <div className="container relative z-2">
        {" "}
        {/* A container for the section, with z-index. */}
        <Heading className="md:max-w-md lg:max-w-2xl" title={t("title")} />{" "}
        {/* Heading component with translated title. */}
        <div className="flex flex-wrap gap-10 mb-10">
          {" "}
          {/* A flex container for items, with gaps between them. */}
          {navigationItems.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              key={item.id} // Mapping through navigationItems to create individual benefit cards
              style={{ backgroundImage: `url(${item.backgroundUrl})` }} //Dynamic background image based on the item data.
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                {/* Card container with flexbox layout and padding */}
                <h5 className="h5 mb-5">{item.title}</h5>{" "}
                {/* Title of the benefit */}
                <p className="body-2 mb-6 text-n-3">{item.text}</p>{" "}
                {/* Description of the benefit */}
                <div className="flex items-center mt-auto">
                  {" "}
                  {/* Footer of the card with icon and 'open' text */}
                  <Image
                    src={item.iconUrl}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    {t("open")} {/* Translated 'open' text */}
                  </p>
                  <Arrow /> {/* Arrow component */}
                </div>
              </div>
              {item.light && <GradientLight />}{" "}
              {/* Conditionally rendering the GradientLight component if item.light is true */}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                {/* This part adds an overlay with clip-path style to create a custom shape */}
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={380}
                      height={362}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />{" "}
              {/* Adding a ClipPath component for custom SVG masking. */}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
