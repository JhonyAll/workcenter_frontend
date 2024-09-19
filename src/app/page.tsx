import Login from "@/components/login";

const Home = () => {
  return (
    <main className="h-screen grid place-items-center">
      {/* flex gap-4 flex-col justify-center	align-center w-full h-full */}
      <Login />
      {/* <input
        type="text"
        name=""
        id=""
        placeholder="Nome..."
        className="w-80 h-12 p-2 bg-gray-200 block focus:outline-none hover:bg-gray-300 focus:bg-gray-100 border-solid border border-slate-700 focus:border-purple-700 focus:shadow-[0rem_0rem_.25rem_0rem_rgba(122,53,122,1)] text-sm font-sans rounded"
      />
      <button className="w-80 h-12 bg-purple-300 hover:bg-purple-400 rounded">
        Enviar
      </button> */}
    </main>
  );
};

export default Home;
