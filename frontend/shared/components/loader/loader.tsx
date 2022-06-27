const Loader = () => {
  return (
    <div className="absolute absolute left-0 top-0 w-full h-full flex items-center justify-center">
      <div className="absolute absolute left-0 top-0 w-full h-full bg-black opacity-50"></div>
      <div className="bg-primary rounded-xl z-10 px-20 py-6">
        <div className="loader"></div>
        <div className="text-white mt-4 text-xl text-center">Waiting for confirmation...</div>
      </div>
    </div>
  );
};

export default Loader;
