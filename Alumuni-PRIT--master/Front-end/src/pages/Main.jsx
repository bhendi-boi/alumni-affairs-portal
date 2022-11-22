import Hero from "../components/user/Hero";
import Questions from "../components/user/Questions";

const Main = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)]">
      <Hero />
      <div className=" grid grid-cols-8 mx-32 my-10 ">
        <div className="col-span-6 ">
          <Questions />
        </div>
        <div className="col-span-2 bg-gray-700">cool</div>
      </div>
    </main>
  );
};

export default Main;
