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
        "items-center flex flex-col flex-1 sm:flex-row mx-4 border-b  border-slate-400"
      }
    >
      <div className="w-full sm:w-[40%] md:w-[30%] h-full px-4 md:p-8  grid place-items-center">
        <h3 className="sm:hidden my-3 text-3xl sm:text-5xl font-medium self-start text-base-100">
          {title}
        </h3>
        <img
          src={imageURL}
          alt="alumni affairs logo"
          className="object-contain p-6"
        />
      </div>
      <div className="w-full sm:w-[70%]">
        <h3 className="hidden sm:inline mx-6 md:mx-12 mt-4 mb-8 text-5xl ">
          {title}
        </h3>
        {text.map((paragraph) => {
          return (
            <p
              key={paragraph}
              className="mx-8 md:ml-16 my-2 text-base sm:text-xl"
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
