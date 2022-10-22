import { useState } from "react";
import Header from "../../components/Header";

const Community = () => {
  const [links, setLinks] = useState([
    { link: "cs", name: "computer science", isActive: false },
    { link: "ec", name: "eletronics", isActive: false },
    { link: "me", name: "mechanical", isActive: false },
  ]);

  return (
    <main>
      <Header title={"community"} links={links} setLinks={setLinks} />
    </main>
  );
};

export default Community;
