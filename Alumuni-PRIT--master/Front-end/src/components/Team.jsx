import TeamMemberProfile from "./TeamMemberProfile";

const Team = () => {
  // ? update imageURLs
  const teamMembers = [
    {
      name: "pic ",
      emailId: "",
      imageURL: "",
      post: "Professor In Charge",
      linkedIn: "#",
    },
    {
      name: "Shree Dhyuthi",
      emalId: "ced19i027@iiitdm.ac.in",
      imageURL: "iufhi",
      post: "secratry",
      linkedIn: "#",
    },
    {
      name: "Srinidhi",
      emailId: "jdvni",
      imageURL: "djkvn",
      post: "joint secratry",
      linkedIn: "#",
    },
  ];

  const pastTeamMembers = [];

  return (
    <section className="px-6 my-4">
      <section className="flex flex-col border-b border-slate-100">
        <h3 className="py-6 capitalize text-5xl section-title">team</h3>
        <div className="h-full min-w-full grid sm:grid-flow-col place-items-center gap-4 sm:gap-6 pb-6 overflow-x-scroll ">
          {teamMembers.map((member) => {
            return (
              <TeamMemberProfile
                key={member.name}
                name={member.name}
                emailId={member.emalId}
                imageURL={member.imageURL}
                post={member.post}
              />
            );
          })}
        </div>
      </section>
      <section className="flex flex-col">
        <h3 className="py-6 capitalize text-5xl">previous teams</h3>
        <div className=" min-w-full grid sm:grid-flow-col place-items-center gap-4 sm:gap-6 pb-6 overflow-x-scroll lg:overflow-hidden">
          {teamMembers.map((member) => {
            return (
              <TeamMemberProfile
                key={member.name}
                name={member.name}
                emailId={member.emalId}
                imageURL={member.imageURL}
                post={member.post}
                linkedIn={member.linkedIn}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Team;
