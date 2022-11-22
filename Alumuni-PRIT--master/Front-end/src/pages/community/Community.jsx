import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const Community = () => {
  const [links, setLinks] = useState([
    { link: "cs", name: "computers", isActive: false },
    { link: "ec", name: "eletronics", isActive: false },
    { link: "me", name: "mechanical", isActive: false },
  ]);

  return (
    <main className="min-h-[calc(100vh-1rem)] bg-base-content text-white">
      <Header title={"community"} links={links} setLinks={setLinks} />
      <Outlet />
    </main>
  );
};

export default Community;
