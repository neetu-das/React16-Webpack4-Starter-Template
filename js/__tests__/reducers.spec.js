import reducers from "../reducers";

xtest("SET_SEARCH_TERM", () => {
  let state = reducers(
    { searchTerm: "", apiData: {} },
    { type: "SET_SEARCH_TERM", payload: "black" }
  );
  expect(state).toEqual({ searchTerm: "black", apiData: {} });
});

xtest("ADD_API_DATA", () => {
  let state;
  state = reducers(
    { searchTerm: "black", apiData: {} },
    {
      type: "ADD_API_DATA",
      payload: {
        rating: "1.8",
        title: "Black Mirror",
        year: "2011–",
        description:
          "A television anthology series that shows the dark side of life and technology.",
        poster: "bm.jpg",
        imdbID: "tt2085059",
        trailer: "jDiYGjp5iFg"
      }
    }
  );
  expect(state).toEqual({
    searchTerm: "black",
    apiData: {
      tt2085059: {
        rating: "1.8",
        title: "Black Mirror",
        year: "2011–",
        description:
          "A television anthology series that shows the dark side of life and technology.",
        poster: "bm.jpg",
        imdbID: "tt2085059",
        trailer: "jDiYGjp5iFg"
      }
    }
  });
});
