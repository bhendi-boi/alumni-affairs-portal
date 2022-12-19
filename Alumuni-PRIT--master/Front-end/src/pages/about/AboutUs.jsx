import Contact from "./components/Contact";
import AboutCard from "./components/AboutCard";
import Header from "/src/components/Header";
import Team from "./components/Team";

// img
import alumniAffairsLogo from "/src/assets/oldoldlogo_whiteishhhh.png";

const AboutUs = () => {
  // todo?
  /*  update imageURL, text in AboutCards
      update imageURL in team
      update domain name in contact
  */

  return (
    <main className="min-h[calc(100vh - 4rem)] w-full bg-base-100">
      <Header title={"about us"} />
      <section className="flex flex-col">
        <AboutCard
          title={"History and Vision"}
          imageURL={alumniAffairsLogo}
          text={[
            "The office of Alumni Affairs was established in 2013 IIITDM works to connect alumni, students and the institite to create a seamless experience through various events such as Alumni Talks, Batch-Reunions, Alumni Meets & Conferences.",
            "Our vision is to build a better community among alumni and students",
          ]}
        />
        <AboutCard
          title={"Message from the PIC"}
          imageURL={alumniAffairsLogo}
          text={[
            "message from the pic lLorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis delectusmessage from the director lLorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis delectusmessage from the director lLorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis delectusmessage from the director lLorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis delectus",
          ]}
          reverse
        />
        <AboutCard
          title={"Message from the Director"}
          imageURL={alumniAffairsLogo}
          text={[
            "message from the director lLorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis delectusmessage from the director lLorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis delectusmessage from the director lLorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis delectusmessage from the director lLorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis delectus",
          ]}
        />
      </section>
      <Team />
      <Contact />
    </main>
  );
};

export default AboutUs;
