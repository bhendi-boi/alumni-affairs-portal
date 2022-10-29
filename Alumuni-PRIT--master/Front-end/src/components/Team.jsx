import TeamMemberProfile from "./TeamMemberProfile";

const Team = () => {
  // ? update imageURLs
  const teamMembers = [
    {
      name: "pic ",
      emailId: "",
      imageURL: "",
      post: "Professor In Charge",
    },
    {
      name: "Shree Dhyuthi",
      emalId: "ced19i027@iiitdm.ac.in",
      imageURL: "iufhi",
      post: "secratry",
    },
    {
      name: "Srinidhi",
      emailId: "jdvni",
      imageURL: "djkvn",
      post: "joint secratry",
    },
  ];

  const pastTeamMembers = [];

  return (
    <section className="px-6 my-4">
      <section className="flex flex-col">
        <h3 className="py-6 capitalize text-5xl">team</h3>
        <div className="h-full grid sm:grid-flow-col place-items-center gap-4 pb-6">
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
        <div className="h-full grid sm:grid-flow-col place-items-center gap-4 pb-6">
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
