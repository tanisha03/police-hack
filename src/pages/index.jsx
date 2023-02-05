import { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import SelectBadge from "../components/SelectBadge";
import TagBadge from "../components/TagBadge";
import Icon from "../components/Icon";
import { SEARCH_TAGS, SOURCE_TO_ENUM_MAPPER } from "../utils/constant";
import LoadingState from "../components/LoadingState";
import Profile from "@/components/Profile";
import HTMLProfile from "@/components/HTMLProfile";
import axios from "axios";
import { generateHTML, htmlStringToPdf } from "../utils/helpers";
import { getData, generateReport } from "../http/api";
import { RESPONSE } from "@/utils/mock";

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeQuery, setActiveQuery] = useState();
  const [searchQueryArr, setSearchQueryArr] = useState([]);
  const [searchQuery, setSearchQuery] = useState();
  const searchRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [resultsFetched, setResultsFetched] = useState(false);
  const [fileUrl, setFileUrl] = useState();
  const [responseData, setResponseData] = useState();
  const [count, setCount] = useState(17);

  const handleRemove = (query) => {
    const filteredArr = searchQueryArr.filter((item) => item.query !== query);
    setSearchQueryArr([...filteredArr]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQueryArr.length)
      setSearchQueryArr([{ id: activeQuery || "search", query: searchQuery }]);
    else {
      const query = activeQuery || "search";
      const filteredArr = searchQueryArr.filter((item) => item.id !== query);
      setSearchQueryArr([
        ...filteredArr,
        {
          id: query,
          query: searchQuery,
        },
      ]);
    }
    searchRef.current.value = "";
  };

  const handleSearch = () => {
    setIsLoading(true);
    const socialArr = searchQueryArr
      .filter((item) => item.id !== "search")
      .map((item) => ({
        type: SOURCE_TO_ENUM_MAPPER[item.id],
        value: item.query,
      }));
    const contextField =
      searchQueryArr.filter((item) => item.id === "search")?.[0]?.query || "";
    const reqBody = {
      inputs: socialArr,
      context: contextField,
    };
    console.log(
      reqBody.inputs[0]?.type?.toLowerCase() === "phone"
        ? "truecaller"
        : reqBody.inputs[0]?.type?.toLowerCase(),
      reqBody.inputs[0]?.value
    );
    getData(
      reqBody.inputs[0]?.type?.toLowerCase() === "phone"
        ? "truecaller"
        : reqBody.inputs[0]?.type?.toLowerCase() === "email" ? "name" : reqBody.inputs[0]?.type?.toLowerCase(),
      // socialArr.inputs?.[0]?.type?.toLowerCase(),
      // "truecaller",
      reqBody.inputs[0]?.value
    )
      .then((res) => {
        // if(typeof res === AxiosError)
        console.log("REsponse: ", res);
        setResponseData(res);
        setResultsFetched(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        alert("Something went wrong!");
      });
    setCount(count+1);
    console.log(reqBody);
  };

  const generate = async () => {
    const html = generateHTML(
      // ReactDOMServer.renderToString(<HTMLProfile response={responseData} />)
      ReactDOMServer.renderToString(<HTMLProfile response={RESPONSE} />)
    );
    console.log(html);
    let pdfBlobOutput = await htmlStringToPdf(html);
    const url = window.URL.createObjectURL(
      new Blob([pdfBlobOutput], { type: "application/pdf" })
    );
    console.log(url);
    setFileUrl(url);
  };

  useEffect(() => {
    // getData("truecaller", "9628356967")
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    // generate();
  });

  if (isLoading)
    return (
      <>
        <Head>
          <title>Namma Sherlock</title>
        </Head>
        <main class="w-full h-full">
          <LoadingState />
        </main>
      </>
    );
  else if (resultsFetched)
    return (
      <>
        <Head>
          <title>Namma Sherlock</title>
        </Head>
        <main>
          <button class="text-xl font-semibold text-white-200 bg-blue-400 py-2 px-3 rounded-full ml-10 mt-4"
          onClick={async() => {
                const html = await generateHTML(
                  ReactDOMServer.renderToString(<HTMLProfile response={responseData} />)
                );
                const file = await generateReport(html)
                const url = await window.URL.createObjectURL(
                  new Blob([file], { type: "application/pdf" })
                );
                window.open(url);
            }}>Download</button>
          <div class="w-full h-screen px-12 py-12">
            <Profile response={responseData} />
            {/* <HTMLProfile /> */}
          </div>
        </main>
      </>
    );
  else
    return (
      <>
        <Head>
          <title>Namma Sherlock</title>
        </Head>
        <main class="w-full h-full">
          <center>
          <img class="h-32 w-32 mt-4" src="https://play-lh.googleusercontent.com/SV8kAhQIp5UHK75W8UHXDrs_tnLzqvi-aVXtLi2Ap4v23csS9wvjbojMnRouWUw3AEQ" />
            <h1 class="mb-2 text-3xl font-bold text-gray-900 mt-2">Namma Sherlock</h1>
          </center>
          <div class="w-full px-12 py-12">
            <form onSubmit={handleSubmit}>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Icon name={activeQuery || "search"} />
                </div>
                <input
                  ref={searchRef}
                  type="search"
                  id="default-search"
                  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-t-lg bg-gray-100 focus:outline-0"
                  placeholder="Search Mockups, Logos..."
                  required
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowDropdown(true)}
                />
                <div
                  onClick={handleSearch}
                  class="text-white cursor-pointer absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 "
                >
                  Search
                </div>
              </div>
            </form>
            {showDropdown ? (
              <div class="w-full p-4 bg-gray-100 rounded-b-lg">
                {searchQueryArr.length ? (
                  <div className="mb-4 border-b-2 pb-4">
                    <h1 className="text-gray-500 font-semibold text-sm mb-2">
                      Search Tags
                    </h1>
                    <div>
                      {searchQueryArr.map((searchField, id) => (
                        <TagBadge
                          text={searchField.query}
                          key={searchField.id}
                          icon={searchField.id}
                          handleRemove={() => handleRemove(searchField.query)}
                        />
                      ))}
                    </div>
                  </div>
                ) : null}
                <div className="mb-4 border-b-2 pb-4">
                  <h1 className="text-gray-500 font-semibold text-sm mb-2">
                    I am Searching in
                  </h1>
                  <div>
                    {SEARCH_TAGS.map((tag, i) => (
                      <SelectBadge
                        key={tag.id}
                        text={tag.label}
                        icon={tag.id}
                        active={tag.id === activeQuery}
                        handleClick={() => {
                          setSearchQueryArr([])
                          setActiveQuery(tag.id)
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h1 className="text-gray-500 font-semibold text-sm mb-2">
                    Total Searches : {count}
                  </h1>
                  <div>
                    {/* {SELECTED_TAGS.map((searchField, id) => (
                    <TagBadge
                      text={searchField.query}
                      key={searchField.id}
                      icon={searchField.id}
                    />
                  ))} */}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </main>
      </>
    );
}