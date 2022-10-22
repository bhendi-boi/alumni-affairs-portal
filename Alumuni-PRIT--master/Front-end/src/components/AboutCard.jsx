import React from "react";

const AboutCard = ({ title, text, logoSrc, reverse }) => {
  return (
    <div className={(reverse ? "flex flex-row-reverse " : "flex ") + ""}>
      <div className="w-[30%] h-full p-8 flex items-center">
        <img
          src={logoSrc}
          alt="alumni affairs logo"
          className="object-contain"
        />
      </div>
      <div className="w-[70%]">
        <h3 className="mx-12 mt-4 mb-8 text-5xl">{title}</h3>
        {text.map((paragraph) => {
          return (
            <p key={paragraph} className="ml-16 my-2 text-2xl">
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default AboutCard;
