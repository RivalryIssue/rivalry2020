import React, { useState, useEffect } from "react";
import tmd from "../../images/tmd-donate.jpg";
import lantern from "../../images/lantern-donate.jpg";

export default function DonationGraphic() {
  const [lanternMoney, setLanternMoney] = useState("");
  const [dailyMoney, setDailyMoney] = useState("");

  const updateProgressBar = (value) => {
    let str_array = value.slice(1).split(",");
    let str = str_array[0] + str_array[1];
    value = Number(str) / 100;
    let progressbar = document.getElementById("download");
    value = Math.min(value, 100);
    if (value >= 0 && value <= 100) {
      progressbar.style.width = value + "%";
    }
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/RivalryIssue/donations-scraper/master/data.json"
    )
      .then((response) => response.json())
      .then((result) => {
        setLanternMoney(result.data.lantern);
      });
  }, []);

  useEffect(() => {
    updateProgressBar(lanternMoney);
  }, [lanternMoney]);

  return (
    <div className="graphic-container">
      <h2 className="graphic-title">Current Status</h2>
      <div className="donation_container">
        <h2 className="donation_title">The Michigan Daily</h2>
        <div className="progess_container">
          <div className="progress">
            <div id="download" className="progress__bar"></div>
          </div>
          <h4 className="donation_amount">{lanternMoney} of $10,000</h4>
        </div>
      </div>
      <div className="donation_container">
        <h2 className="donation_title">The Lantern</h2>
        <div className="progess_container">
          <div className="progress">
            <div id="download" className="progress__bar"></div>
          </div>
          <h4 className="donation_amount">{lanternMoney} of $10,000</h4>
        </div>
      </div>

      <div className="buttons-container">
        <div className="donation-button">
          <a
            href="https://give.communityfunded.com/o/university-of-michigan/i/giving-tuesday/s/tmd-lantern-rivalry"
            target="_blank"
          >
            <img src={tmd} />
          </a>
        </div>
        <div className="donation-button">
          <a href="https://buckeyefunder.osu.edu/project/21918" target="_blank">
            <img src={lantern} />
          </a>
        </div>
      </div>
    </div>
  );
}
