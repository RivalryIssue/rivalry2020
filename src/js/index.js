import React from "react";
import ReactDOM from "react-dom";
import ArticleGrid from "./components/ArticleGrid";
import DonationGraphic from "./components/DonationGraphic";
import Intro from "./components/Intro";
import LandingPage from "./components/LandingPage/LandingPage";
import Tabs from "./components/Tabs";
import data from "../data/copy.json";

window.onload = () => {
  const mountNode = document.getElementById("app");
  ReactDOM.render(<App />, mountNode);
};

const App = () => (
  <>
    <LandingPage data={data} />
    <Intro />
    <DonationGraphic />
    <Tabs />
    <ArticleGrid />
  </>
)

export default App;
