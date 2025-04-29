import unsplash from "../api/api";

const searchAction = async (previousState, formData) => {
  const query = formData.get("searchTerm");
  if (query) {
    const response = await unsplash.get("/search/photos", {
      params: { query, page: 1, per_page: 21 },
    });

    return {
      images: response.data.results,
      total: response.data.total,
    };
  } else {
    return {
      images: [],
      total: 0,
    };
  }
};
export default searchAction;
