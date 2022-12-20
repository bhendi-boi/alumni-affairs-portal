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
    <section>
      <section className="flex flex-col px-4 py-3">
        <h3 className="text-3xl font-medium capitalize sm:px-6 sm:text-5xl text-subtitle">
          the team
        </h3>
        <div className="grid h-full min-w-full gap-4 pb-6 border-b border-gray-600 sm:grid-flow-col place-items-center sm:gap-6 sm:overflow-x-scroll lg:overflow-hidden">
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
      <section className="flex flex-col px-4">
        <h3 className="text-3xl font-medium capitalize sm:px-6 sm:text-5xl text-subtitle">
          previous teams
        </h3>
        <div className="grid h-full min-w-full gap-4 pb-6 border-b border-gray-600 sm:grid-flow-col place-items-center sm:gap-6 sm:overflow-x-scroll lg:overflow-hidden">
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
    </section>
  );
};

export default Team;
