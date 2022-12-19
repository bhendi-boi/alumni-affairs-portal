/* 
  props: 
        title = a string 
        text = an array of strings and each array element is treated as a seperate paragraph
*/

const Header = ({ title, text }) => {
  return (
    <header className="left-0 mx-6 border-b-2 top-28">
      <h1 className="py-3 text-5xl capitalize text-title">{title}</h1>
      {text.map((paragraph) => {
        return (
          <p
            key={paragraph}
            className="mx-8 my-2 text-base md:ml-16 sm:text-2xl"
          >
            {paragraph}
          </p>
        );
      })}
    </header>
  );
};

export default Header;
