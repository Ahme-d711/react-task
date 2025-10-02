const Pagination = () => {

  return (
    <div className="flex justify-center items-center gap-2 my-8">
      {/* Previous Button */}
      <button
        className="px-4 py-2 rounded-lg font-medium bg-card transition duration-300"
      >
        Pre
      </button>

      <button className="px-4 py-2 rounded-lg font-medium bg-card-foreground text-card transition duration-300">1</button>
      <button className="px-4 py-2 rounded-lg font-medium bg-card transition duration-300">2</button>

      {/* Next Button */}
      <button
        className="px-4 py-2 rounded-lg font-medium bg-card transition duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;