import React from "react";
import { useActionState } from "react";
import SearchForm from "./components/SearchForm";
import ImageGrid from "./components/ImageGrid";
import searchAction from "./utils/searchAction";

const App = () => {
  const [{ images, total }, formAction, isPending] = useActionState(
    searchAction,
    {
      images: [],
      total: null,
    }
  );

  return (
    <div className="min-h-screen bg-[#39297b] text-white relative pb-20">
      <h1 className="text-center pt-24 mb-12 text-3xl font-semibold">
        Image Search Engine
      </h1>

      <SearchForm formAction={formAction} />

      {isPending && <h1 className="text-center text-xl mt-12">Loading...</h1>}

      {!isPending && total === null && (
        <h1 className="text-center text-xl mt-12"></h1>
      )}

      {!isPending && total === 0 && (
        <h1 className="text-center text-xl mt-12">No Images Found</h1>
      )}

      {!isPending && images.length > 0 && <ImageGrid images={images} />}
    </div>
  );
};

export default App;
