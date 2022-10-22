import Contact from "../components/Contact";
import alumniAffairsLogo from "../assets/aa_logo.png";
import AboutCard from "../components/AboutCard";
import Header from "../components/Header";

const AboutUs = () => {
  return (
    <main className="min-h[calc(100vh - 4rem)] w-full">
      <Header title={"about us"} />
      <section className="flex flex-col">
        {/* history and vision */}
        <AboutCard
          title={"History and Vision"}
          logoSrc={alumniAffairsLogo}
          text={[
            "The office of Alumni Affairs was established in 2013 IIITDM works to connect alumni, students and the institite to create a seamless experience through various events such as Alumni Talks, Batch-Reunions, Alumni Meets & Conferences.",
            "Our vision is to build a better community among alumni and students",
          ]}
        />
        <AboutCard
          title={"Message from PIC"}
          logoSrc={alumniAffairsLogo}
          text={["message from pic"]}
          reverse
        />
        <AboutCard
          title={"Message from the Director"}
          logoSrc={alumniAffairsLogo}
          text={["message from the director"]}
        />
      </section>
      {/* todo: past teams */}
      <section className="h-96 bg-gray-500">
        <h3 className="capitalize">the team</h3>
        <div>images</div>
      </section>
      <div className="h-96">empty div</div>
      <Contact />
    </main>
  );
};

export default AboutUs;
