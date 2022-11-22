import Header from "./components/Header";

const AlumniTalks = () => {
  const title = "alumni talks";
  const text = [
    "Alumni Talks is a series of talk cum Q&A sessions where students get to interact with esteemed alumni and understand the spectrum of oppurtunities available to them.",
  ];

  return (
    <section className="min-h-screen">
      <Header title={title} text={text} />

      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
    </section>
  );
};

export default AlumniTalks;
