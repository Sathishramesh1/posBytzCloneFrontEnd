import React from "react";
import "./DemoPage.css";
import ReactPlayer from "react-player/youtube";
import data from "../utilites/data.json";

function DemoPage() {
  return (
    <div className="demo_page">
      <h1>How it Works?</h1>
      <p>
        <b>
          Checkout how you can Automate your Business with PosBytz ERP Software
        </b>
      </p>
      <p>
        Discover how our <span>retail </span> and <span>restaurant</span> ERP
        software can revolutionize your business operations today!
      </p>

      <div className="demo_video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=xxQzhDkWPpc"
          width="100%"
          height="100%"
        />
      </div>

      <div className="postbytz">
        <h1>Reasons to Choose PosBytz ERP Software</h1>

        <h2>
          One of Best Cloud ERP Software for
          <br />
          Small & Medium businesses
        </h2>

        <h1>
          <span>PosBytz ERP</span>
        </h1>
      </div>

      <div className="card_container">
        {data.map((ele, index) => {
          return (
            <div
              key={index}
              className="card_content"
              style={{ border: `4px solid ${ele.border}` }}
            >
              <img src={ele.url} />
              <div style={{ color: ele.color, fontWeight: 600 }}>
                {ele.name}
              </div>
              <div className="title">{ele.title}</div>

              <p>{ele.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DemoPage;
