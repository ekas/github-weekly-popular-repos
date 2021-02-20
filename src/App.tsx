import { useEffect, useState } from "react";
import Card from "./components/card";
import FilterBar from "./components/filter-bar";
import Header from "./components/header";
import { repoData } from "./types/repoData";
import { format, subDays } from "date-fns";

import "./App.scss";

import {
  GITHUB_API_URL,
  GITHUB_DATA_ORDER,
  GITHUB_DATA_QUERY,
  GITHUB_DATA_SORT_BY,
  GITHUB_DATA_NUMBER_PAGES,
} from "./constants";

const App = () => {
  const [githubData, setGithubData] = useState<repoData[]>([]);
  const [filteredData, setFilteredData] = useState<repoData[]>([]);
  const [githubFilteredData, setGithubFilteredData] = useState<repoData[]>([]);
  const [langFilter, setLangFilter] = useState<string>("");

  //To fetch data from Github
  const fetchGithubData = async () => {
    return await fetch(
      `${GITHUB_API_URL}search/repositories?sort=${GITHUB_DATA_SORT_BY}
      &order=${GITHUB_DATA_ORDER}&q=${GITHUB_DATA_QUERY.replace(
        "date",
        format(subDays(new Date(), 7), "yyyy-MM-dd")
      )}&per_page=${GITHUB_DATA_NUMBER_PAGES}`
    );
  };

  const filterData = async () => {
    return await githubData.filter((item) => item.language != null);
  };

  useEffect(() => {
    //Fetch data
    fetchGithubData()
      .then((response) => response.json())
      .then((data) => setGithubData(data.items));
  }, []);

  useEffect(() => {
    //Get languages from Github Data
    filterData().then((data) => setFilteredData(data));
  }, [githubData]);

  useEffect(() => {
    //Language Filter
    setGithubFilteredData(
      githubData.filter((item) => {
        if (langFilter === "other") {
          return item.language === null;
        } else {
          return item.language === langFilter;
        }
      })
    );
  }, [langFilter]);

  return (
    <div className="App">
      <Header />
      <FilterBar
        filteredData={filteredData}
        setLanguageFilter={setLangFilter}
      />
      <main>
        <div className="card-container">
          {githubFilteredData.length === 0
            ? githubData.map((item, i) => (
                <Card data={item} key={`card_${i}`}></Card>
              ))
            : githubFilteredData.map((item, i) => (
                <Card data={item} key={`card_${i}`}></Card>
              ))}
        </div>
      </main>
    </div>
  );
};

export default App;
