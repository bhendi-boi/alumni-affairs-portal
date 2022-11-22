import Header from "./components/Header";
const Reunions = () => {
  const title = "reunions";
  const text = ["reunions summary"];

  return (
    <main className="min-h-screen">
      <Header title={title} text={text} />
    </main>
  );
};

export default Reunions;
