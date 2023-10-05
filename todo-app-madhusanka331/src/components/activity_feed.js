import React from "react";
import "./dashboard.css";
import moment from "moment";
import Avatar from "../img/Avatar-1.svg"
import Avatar_one from "../img/Avatar-2.svg";

const ActivityFeed = ({ tasks }) => {
  return (
    <div>
      <div className="welcome-card bg-white">
        <h3 className="ps-3 pt-3">Activity Feed</h3>
        <hr></hr>
        {tasks
          .filter((el) => el.completed)
          .slice(0, 1)
          .map((el) => (
            <div key={el.id}>
              <div className="d-flex ps-3">
                <div className="badge-sec">
                  <img src={Avatar} alt=""></img>
                </div>
                <p className="mt-1 ms-2 me-1 fw-bold">
                  {el.createdBy}
                  <span className="ms-1" style={{ color: "#BC006D " }}>
                    {el.todo}
                  </span>{" "}
                </p>
              </div>
              <span className="badge bg-light ps-3 mb-4" style={{ height: "1px" }}>
                {moment(el.createdAt).format("MMM DD, YYYY [at] h:mm: a")}
              </span>
            </div>
          ))}

        <div>
          <div className="d-flex ps-3">
            <div className="badge-sec">
              <img src={Avatar_one} alt=""></img>
            </div>
            <p className="mt-1 ms-2 me-1">
              Lorem ipsum <span className="fw-bold">dolor sit amet,</span>{" "}
              consectetur adipiscing elit. Maecenas pretium neque
              <span className="ms-1" style={{ color: "#BC006D " }}></span>{" "}
            </p>
          </div>
          <span className="badge bg-light ps-3 mb-4" style={{ height: "1px" }}>
            Sep 16, 2022 at 11:45 AM
          </span>
        </div>

        <div>
          <div className="d-flex ps-3">
            <div className="badge-sec">
              <img src={Avatar_one} alt=""></img>
            </div>
            <p className="mt-1 ms-2 me-1">
              Lorem ipsum <span className="fw-bold">dolor sit amet,</span>{" "}
              consectetur adipiscing elit. Maecenas pretium neque
              <span className="ms-1" style={{ color: "#BC006D " }}></span>{" "}
            </p>
          </div>
          <span className="badge bg-light ps-3 mb-4" style={{ height: "1px" }}>
            Sep 16, 2022 at 11:45 AM
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
