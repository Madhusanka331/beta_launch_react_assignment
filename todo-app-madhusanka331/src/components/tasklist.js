import React, { useState } from "react";
import "./dashboard.css";
import PriorityHigh from "../img/Priority-High.svg";
import PriorityMedium from "../img/Priority-Medium.svg";
import PriorityLow from "../img/Priority-Low.svg";
import moment from "moment";

const Tasklist = ({ tasks }) => {
  const tasksPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for tasks to display on the current page
  const startIndex = (currentPage - 1) * tasksPerPage;
  const endIndex = startIndex + tasksPerPage;

  // Slice the tasks array to get tasks for the current page
  const tasksToShow = tasks.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="welcome-card">
      <h3 className="ps-3 pt-3 pb-4 border-bottom">Task</h3>
      {tasksToShow.map((el) => (
        <div className=" bg-white" key={el.id}>
          <div className="task-item border-bottom pt-3 pb-3">
            <div className="row">
              <div className="col-md-8">
                <div className="d-flex ps-3">
                  <div className="badge-sec">
                    <img
                      src={
                        el.priority === "LOW"
                          ? PriorityLow
                          : el.priority === "HIGH"
                          ? PriorityHigh
                          : PriorityMedium
                      }
                      alt=""
                    ></img>
                  </div>
                  <p className="mt-1 ms-2">{el.todo}</p>
                </div>
                {!el.completed && (
                  <button
                    className="a-link ps-3 text-decoration-none border-0 fw-bold"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Mark as Done
                  </button>
                )}
              </div>
              <div className="col-md-4 text-end">
                <span
                  className={`badge bg-${el.completed ? "success" : "warning"}`}
                >
                  {el.completed ? "Done" : "In-Progress"}
                </span>
                <span className="badge bg-light me-5">
                  {moment(el.createdAt).format("MMM DD")}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center mt-5">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link me-2"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </li>
          {Array.from(
            { length: Math.ceil(tasks.length / tasksPerPage) },
            (_, index) => (
              <li
                className={`page-item me-2 ${
                  index + 1 === currentPage ? "active" : ""
                }`}
                key={index}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
          <li
            className={`page-item ${
              currentPage === Math.ceil(tasks.length / tasksPerPage)
                ? "disabled"
                : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Tasklist;
