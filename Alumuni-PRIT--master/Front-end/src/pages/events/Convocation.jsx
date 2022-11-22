import Header from "./components/Header";

const Convocation = () => {
  const title = "convocation";
  const text = ["convocation summary"];
  return (
    <main className="min-h-screen">
      <Header title={title} text={text} />
    </main>
  );
};

export default Convocation;
