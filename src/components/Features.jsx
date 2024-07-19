import React, { useState } from "react";
import "./Features.css";
import data from "../utilites/features.json";
import { GiCheckMark } from "react-icons/gi";

function Features() {
  const [select, setSelected] = useState("pos");
  const [tab, setTab] = useState(data[0]);

  const handelClick = (tab) => {
    const filtered = data.filter((ele) => ele.id === tab);
    setSelected(tab);
    setTab(filtered[0]);
  };

  return (
    <div className="features">
      <h1>Features of Our ERP Software?</h1>

      <div className="features_options">
        <div className="features_list">
          <div
            id="pos"
            className={`${select == "pos" ? "active" : ""}`}
            onClick={() => handelClick("pos")}
          >
            <img
              src="https://posbytz.com/wp-content/uploads/2023/07/itl1.png"
              alt="Point of sales"
            />
            <p style={{ color: "#ff8100", fontWeight: "700" }}>POS</p>
          </div>
          <div
            id="order"
            className={`${select == "order" ? "active" : ""}`}
            onClick={() => handelClick("order")}
          >
            <img
              src="https://posbytz.com/wp-content/uploads/2023/07/Untitl.png"
              alt="Order Management for ERP"
            />
            <p style={{ color: "#a90030", fontWeight: "700" }}>
              Order Management
            </p>
          </div>
          <div
            id="purchase"
            className={`${select == "purchase" ? "active" : ""}`}
            onClick={() => handelClick("purchase")}
          >
            <img
              src="https://posbytz.com/wp-content/uploads/2023/07/itled-1.png"
              alt="Purchase & Inventory Management"
            />

            <p style={{ color: "#24007e", fontWeight: "700" }}>
              Purchase & Inventory Management
            </p>
          </div>
          <div
            id="ecom"
            className={`${select == "ecom" ? "active" : ""}`}
            onClick={() => handelClick("ecom")}
          >
            <img
              src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-.png"
              alt="Ecommerce Online ordering"
            />
            <p style={{ color: "#38ad8d", fontWeight: "700" }}>
              Ecommerce & Online ordering
            </p>
          </div>
          <div
            id="accounting"
            className={`${select == "accounting" ? "active" : ""}`}
            onClick={() => handelClick("accounting")}
          >
            <img
              src="https://posbytz.com/wp-content/uploads/2023/07/1.png"
              alt="Accounting & Finance"
            />
            <p style={{ color: "#6c0758", fontWeight: "700" }}>
              Accounting & Finance
            </p>
          </div>

          <div
            id="crm"
            className={`${select == "crm" ? "active" : ""}`}
            onClick={() => handelClick("crm")}
          >
            <img src="https://posbytz.com/wp-content/uploads/2023/07/Un.png" />
            <p style={{ color: "#582010", fontWeight: "700" }}>
              CRM & Marketing Automation
            </p>
          </div>

          <div
            id="payroll"
            className={`${select == "payroll" ? "active" : ""}`}
            onClick={() => handelClick("payroll")}
          >
            <img src="https://posbytz.com/wp-content/uploads/2023/07/Un.png" />
            <p style={{ color: "#ff8100", fontWeight: "700" }}>HR & Payroll</p>
          </div>
        </div>
        <div className="selected_tab">
          <div className="selected_content" id={select}>
            <div className="selected_content_left">
              <div className="selected_content_title">{tab.title}</div>

              <ul>
                {tab.features.map((ele) => {
                  return (
                    <li>
                      <GiCheckMark /> &nbsp;
                      {ele}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="selected_content_right">
              <div className="image_content">
                <img src={tab.url} alt={tab.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
