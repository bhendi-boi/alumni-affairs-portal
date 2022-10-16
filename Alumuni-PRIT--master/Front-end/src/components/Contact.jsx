//
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("kjcn");
  };

  return (
    <section className="w-full h-96 flex">
      <div className="w-[50%] bg-green-200">
        <p className="text-3xl mx-4 my-2">Contact Info</p>
      </div>
      <form
        className="w-[50%] px-6 flex flex-col bg-black"
        onSubmit={(e) => handleSubmit(e)}
      >
        <p className="text-3xl mx-4 my-2">Reach out!!!</p>
        <input
          className="block mx-6 my-2 bg-transparent text-gray-700 text-lg px-4 py-2 border-solid border-b-2 border-gray-800 focus:outline-none  focus:border-blue-600 transition duration-500"
          type="text"
          required
          placeholder="Name*"
          name="name"
        />
        <input
          className="block mx-6 my-2 bg-transparent text-gray-700 text-lg px-4 py-2 border-solid border-b-2 border-gray-800 focus:outline-none  focus:border-blue-600 transition duration-500"
          type="email"
          required
          placeholder="Email*"
          name="email"
        />
        <input
          className="block mx-6 my-2 bg-transparent text-gray-700 text-lg px-4 py-2 border-solid border-b-2 border-gray-800 focus:outline-none  focus:border-blue-600 transition duration-500"
          type="text"
          required
          placeholder="Subject*"
          name="subject"
        />
        <input
          className="block mx-6 my-2 bg-transparent text-gray-700 text-lg px-4 py-2 border-solid border-b-2 border-gray-800 focus:outline-none  focus:border-blue-600 transition duration-500"
          type="text"
          required
          placeholder="Message*"
          name="message"
        />
        <button
          type="submit"
          className="w-[20%] self-end mx-6 my-4 p-2 bg-blue-600 text-slate-50 border-2 rounded-md border-slate-50"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
