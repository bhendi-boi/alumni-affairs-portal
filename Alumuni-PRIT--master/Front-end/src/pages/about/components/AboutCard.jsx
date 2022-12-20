/* 
  use this component to display a card of info about Alumni Affairs
  @props 
        title = a string 
        text = an array of strings and each array element is treated as a seperate paragraph
        logo = image source relative to parent component
        reverse = an optional prop to reverse the apperance of logo and text
*/

const AboutCard = ({ title, text, imageURL, reverse }) => {
  return (
    <div
      className={
        (reverse ? "sm:flex-row-reverse " : " ") +
        "flex flex-col sm:flex-row  border-b border-gray-600"
      }
    >
      <div className="w-full sm:w-[40%] md:w-[30%]  md:p-8 flex flex-col items-center">
        <h3 className="self-start my-3 text-3xl font-medium sm:hidden sm:text-5xl text-subtitle">
          {title}
        </h3>
        <img
          src={imageURL}
          alt="alumni affairs logo"
          className="object-contain p-6"
        />
      </div>
      <div className="w-full sm:w-[70%] h-full flex flex-col justify-between px-2 sm:px-6 pb-4">
        <h3 className="hidden mt-4 text-5xl font-medium sm:inline text-subtitle">
          {title}
        </h3>
        {text.map((paragraph) => {
          return (
            <p
              key={paragraph}
              className="my-1 text-base sm:text-xl text-paragraph"
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
