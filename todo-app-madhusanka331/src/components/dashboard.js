import React from "react";
import './dashboard.css'
import Dashboard from '../img/Dashboard.svg';
import profile from "../img/Profile.svg";
import Arrow from "../img/Chevron-down.svg";
import Notifications from "../img/Notifications.svg";
import Close from "../img/Close.svg";
import TaskList from "../components/tasklist.js"
import ActivityFeed from "../components/activity_feed.js"
import Chart from "../components/chart.js"
import { useContext } from "react";
import { AppContext } from "../userContext";
import { Link } from "react-router-dom";



const Dashboards =  () => {
  const {tasks} = useContext(AppContext)
  return (
    <div>
      <div className="row g-0">
        <div className="col-md-2 side-bar-section">
          <div className="logo-section text-center w-100 pt-2 pb-2">
            <h1 className="text-white fw-bold">Acmy Solutions</h1>
          </div>

          <div className="menu-section mt-5">
            <button className="btn align-items-center nav-btn ms-2">
              <img src={Dashboard} alt="" className="img-fluid me-2" />
              Dashboard
            </button>
          </div>
        </div>
        <div className="col-md-10  pe-5 pb-5">
          <div className="nav-bar-sec mb-4">
            <div className="row">
              <div className="col-md-6">
                <h2 className="fw-bold ms-2 pt-3 pb-1">Dashbord</h2>
              </div>
              <div className="col-md-6 text-end pe-5">
                <img
                  src={Notifications}
                  className="img-fluid pt-3 me-4"
                  alt=""
                ></img>
                <img src={profile} className="img-fluid pt-2 me-3" alt=""></img>
                <img src={Arrow} className="img-fluid pt-3" alt=""></img>
              </div>
            </div>
          </div>
          <div className="welcome-card p-3 s-2 ms-3 bg-white">
            <div className="row">
              <div className="col-md-9">
                <h1 className="text-dark">Welcome back, John Doe</h1>
                <div className="welcome-inner-sec">
                  <p className="mute-text">
                    The end of the year is coming. Are you planning your
                    performance interviews? You can do this super efficiently
                    with Acmy.
                  </p>

                  <Link to="#" className="a-link">
                    Look here for more information
                  </Link>

                </div>
              </div>
              <div className="col-md-3 text-end">
                <div className="cross-area h-100">
                  <img src={Close} className="img-fluid me-2" alt=""></img>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-8 ps-4">
              <TaskList tasks={tasks} />
            </div>
            <div className="col-md-4">
              <ActivityFeed tasks={tasks} />

              <div className="welcome-card mt-5 p-3">
                <h3 className="pt-1 pb-3 border-bottom">Tasks Priorities</h3>
                <Chart tasks={tasks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboards;
