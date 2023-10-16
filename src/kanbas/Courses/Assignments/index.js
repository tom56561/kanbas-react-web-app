import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaSortDown, FaRegCheckCircle, FaPlus, FaEllipsisV, FaPenSquare } from "react-icons/fa";



function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>

      <div class="border-bottom" style={{ height: '70px' }}>
        <div class="d-flex flex-row">
          <div class="input-group-lg me-auto">
            <input type="text" class="form-control" placeholder="Search" aria-label="Search"
              aria-describedby="basic-addon1" />
          </div>
          <div class="float-end">
            <button class="btn btn-lg btn-light border-secondary ms-2">
              + Group
            </button>
            <button class="btn btn-lg btn-danger border-secondary ms-2">
              + Assignment
            </button>
            <button class="btn btn-lg btn-light border-secondary ms-2">
              <FaEllipsisV />
            </button>
          </div>
        </div>
      </div>

      <div class="fs-4 mt-3">
        <ul class="list-group w-100">
          <li class="fs-4 fw-semibold py-3 list-group-item list-group-item-secondary">
            <FaGripVertical />
            <FaSortDown />
            Assignments for course {courseId}
            <span class="float-end">
              <FaRegCheckCircle className="text-success " />
              <FaSortDown />
              <FaPlus />
              <FaEllipsisV />
            </span>
          </li>
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item d-flex align-items-center py-4">
              <div>
                <FaGripVertical />
              </div>
              <FaPenSquare className="text-success fs-3 ms-2" />
              <i class="fa-regular fa-pen-to-square text-success"></i>
              <div class="ms-3">
                <div class="fs-4 fw-semibold">
                  {assignment.title}
                </div>
                <span class="fs-6 text-secondary">Week 0 - SETUP - Week starting on Monday </span>
                <span class="fs-6 text-secondary">| Due Sep 18, 2022 at 11:59pm | 100 pts </span>
              </div>
              <div class="ms-auto">
                <FaRegCheckCircle className="text-success me-3" />
                <FaEllipsisV />
              </div>
            </Link>
          ))}
        </ul>
      </div>

    </div>
  );
}
export default Assignments;
