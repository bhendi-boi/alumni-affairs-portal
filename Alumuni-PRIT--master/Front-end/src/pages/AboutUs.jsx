import Contact from "../components/Contact";

const AboutUs = () => {
  return (
    <main className="min-h[calc(100vh - 4rem)] w-full">
      <header>
        <h1 className="text-5xl mx-4 my-2">About Us</h1>
      </header>
      {/* <section className="bg-slate-200">
        <h3>History and Vision</h3>
      </section> */}
      <div className="h-64"></div>
      <Contact />
    </main>
  );
};

export default AboutUs;
