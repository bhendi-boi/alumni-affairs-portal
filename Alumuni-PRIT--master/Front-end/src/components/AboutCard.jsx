const AboutCard = ({ title, text, logoSrc, reverse }) => {
  return (
    <div
      className={
        (reverse ? "sm:flex-row-reverse " : " ") +
        "items-center flex flex-col sm:flex-row"
      }
    >
      <div className="w-full sm:w-[40%] md:w-[30%] h-full px-4 md:p-8  grid place-items-center">
        <h3 className="sm:hidden my-3 text-3xl sm:text-5xl font-medium self-start">
          {title}
        </h3>
        <img
          src={logoSrc}
          alt="alumni affairs logo"
          className="object-contain p-6"
        />
      </div>
      <div className="w-full sm:w-[70%]">
        <h3 className="hidden sm:inline mx-6 md:mx-12 mt-4 mb-8 text-5xl">
          {title}
        </h3>
        {text.map((paragraph) => {
          return (
            <p
              key={paragraph}
              className="mx-8 md:ml-16 my-2 text-base sm:text-2xl"
            >
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default AboutCard;
