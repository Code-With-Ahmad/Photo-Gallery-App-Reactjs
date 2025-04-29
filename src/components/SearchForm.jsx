import React from "react";

const SearchForm = ({ formAction }) => {
  return (
    <form
      action={formAction}
      className="w-[90%] max-w-[600px] mx-auto h-20 bg-[#434989] flex items-center rounded-lg"
    >
      <input
        type="text"
        name="searchTerm"
        placeholder="Search Anything Here..."
        className="flex-1 h-full bg-transparent text-white text-lg px-8 outline-none"
      />
      <button
        type="submit"
        className="px-10 h-full bg-[#ff3929] text-white text-lg rounded-r-lg"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
