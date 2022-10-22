import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const Events = () => {
  const [links, setLinks] = useState([
    { link: "alumnitalks", name: "alumni talks", isActive: true },
    { link: "reunions", name: "reunions", isActive: false },
    { link: "alumnimeets", name: "alumnni meets", isActive: false },
    { link: "alumniconferences", name: "alumni conferences", isActive: false },
    { link: "convocation", name: "convocation", isActive: false },
    { link: "others", name: "others", isActive: false },
  ]);

  return (
    <main className="min-h-[calc(100vw - 1rem)]">
      <Header title={"events"} links={links} setLinks={setLinks} />
      <Outlet />
    </main>
  );
};

export default Events;
