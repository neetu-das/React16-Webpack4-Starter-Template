import axios from "axios";
import moxios from "moxios";
import { addApiData, getApiDetails, setSearchTerm } from "../actionCreators";

jestxs.mock("axios");

xtest("setSearchTerm", () => {
  expect(setSearchTerm("Black")).toMatchSnapshot();
});

xtest("addApiData", () => {
  expect(
    addApiData({
      jj: "gg",
      title: "Breaking Bad",
      year: "2008–2013",
      description:
        "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
      poster: "bb.jpg",
      imdbID: "tt0903747",
      trailer: "XZ8daibM3AE",
      rating: "9.0"
    })
  ).toMatchSnapshot();
});

test("getApiDetails with jest", () => {
  const dispatchMock = jest.fn();
  const apiData = {
    jj: "gg",
    title: "Breaking Bad",
    year: "2008–2013",
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    poster: "bb.jpg",
    imdbID: "tt0903747",
    trailer: "XZ8daibM3AE",
    rating: "9.0"
  };
  const resp = { data: apiData };
  axios.get.mockResolvedValue(resp);
  getApiDetails(apiData.imdbID)(dispatchMock).then(data => {
    expect(dispatchMock.mock.calls.length).toBe(1);
    expect(dispatchMock.mock.calls[0][0]).toStrictEqual(addApiData(apiData));
    expect(dispatchMock).toBeCalledWith(addApiData(apiData));
  });
});

xtest("getApiDetails with moxios", done => {
  const dispatchMock = jest.fn();
  const apiData = {
    jj: "gg",
    title: "Breaking Bad",
    year: "2008–2013",
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    poster: "bb.jpg",
    imdbID: "tt0903747",
    trailer: "XZ8daibM3AE",
    rating: "9.0"
  };
  moxios.withMock(() => {
    getApiDetails(apiData.imdbID)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: apiData }).then(() => {
        expect(request.url).toEqual(`http://localhost:3000/${apiData.imdbID}`);
        expect(dispatchMock).toBeCalledWith(addApiData(apiData));
        done();
      });
    });
  });
});
