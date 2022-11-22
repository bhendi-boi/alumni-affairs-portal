import Header from "./components/Header";

const Others = () => {
  const title = "others";
  const text = ["others section"];
  return (
    <main className="min-h-screen">
      <Header title={title} text={text} />
    </main>
  );
};

export default Others;
