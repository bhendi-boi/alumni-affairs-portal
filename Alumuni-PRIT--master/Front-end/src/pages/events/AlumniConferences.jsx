import Header from "./components/Header";

const AlumniConferences = () => {
  const title = "alumni conferences";
  const text = ["alumni conferences summary"];

  return (
    <main className="min-h-screen">
      <Header title={title} text={text} />
    </main>
  );
};

export default AlumniConferences;
