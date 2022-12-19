import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const Events = () => {
  const [links, setLinks] = useState([
    { link: "alumnitalks", name: "talks", isActive: true },
    { link: "reunions", name: "reunions", isActive: false },
    { link: "alumnimeets", name: "meets", isActive: false },
    { link: "alumniconferences", name: "conferences", isActive: false },
    { link: "convocation", name: "convocation", isActive: false },
    { link: "others", name: "others", isActive: false },
  ]);

  return (
    <main className="min-h-[calc(100vh - 1rem)] bg-base-100 relative">
      <Header title={"events"} links={links} setLinks={setLinks} />
      <Outlet />
    </main>
  );
};

export default Events;
