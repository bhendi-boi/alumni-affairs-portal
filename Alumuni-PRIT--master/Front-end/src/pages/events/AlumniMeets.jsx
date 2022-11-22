import Header from "./components/Header";

const AlumniMeets = () => {
  const title = "alumni meets";
  const text = ["alumni meets summary"];

  return (
    <main className="min-h-screen">
      <Header text={text} title={title} />
    </main>
  );
};

export default AlumniMeets;
