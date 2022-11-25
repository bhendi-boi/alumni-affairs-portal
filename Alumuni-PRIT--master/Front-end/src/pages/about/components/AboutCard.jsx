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
        "flex flex-col sm:flex-row mx-4 border-b border-slate-400"
      }
    >
      <div className="w-full sm:w-[40%] md:w-[30%] px-4 md:p-8 flex flex-col items-center">
        <h3 className="sm:hidden my-3 text-3xl sm:text-5xl text-slate-50 font-medium self-start">
          {title}
        </h3>
        <img
          src={imageURL}
          alt="alumni affairs logo"
          className="object-contain p-6"
        />
      </div>
      <div className="w-full sm:w-[70%] h-full flex flex-col justify-between px-2 sm:px-6 pb-4">
        <h3 className="hidden sm:inline text-5xl font-medium text-slate-50 mt-4">
          {title}
        </h3>
        {text.map((paragraph) => {
          return (
            <p
              key={paragraph}
              className="text-base sm:text-xl my-1 text-gray-300"
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
