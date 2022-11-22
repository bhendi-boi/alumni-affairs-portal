/* 
  props: 
        title = a string 
        text = an array of strings and each array element is treated as a seperate paragraph
*/

const Header = ({ title, text }) => {
  return (
    <header className="border-b-2 mx-6 top-28 left-0">
      <h3 className="text-5xl capitalize py-3">{title}</h3>
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
    </header>
  );
};

export default Header;
