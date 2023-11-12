import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { FaGripVertical, FaSortDown, FaRegCheckCircle, FaPlus, FaEllipsisV, FaPenSquare } from "react-icons/fa";
import { setAssignment } from "./assignmentsReducer";



function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return new Intl.DateTimeFormat('en-US', options).format(date).replace(',', '');
  };

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
            <button
              onClick={() => {navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
              dispatch(setAssignment({...assignment, name: "New Assignment", course: courseId}));
            }}
              class="btn btn-lg btn-danger border-secondary ms-2">
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
            <div
              key={assignment._id}
              onClick={() => {
                dispatch(setAssignment(assignment));
                navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`);
            }}
              className="list-group-item d-flex align-items-center py-4"
              style={{ cursor: 'pointer' }}
              >
              <div>
                <FaGripVertical />
              </div>
              <FaPenSquare className="text-success fs-3 ms-2" />
              <i class="fa-regular fa-pen-to-square text-success"></i>
              <div class="ms-3">
                <div class="fs-4 fw-semibold">
                  {assignment.name}
                </div>
                <span class="fs-6 text-secondary">Not available until {formatDate(assignment.availableFromDate)} </span>
                <span class="fs-6 text-secondary">| Due {formatDate(assignment.dueDate)} | 100 pts </span>
              </div>
              <div class="ms-auto">
                <FaRegCheckCircle className="text-success me-3" />
                <FaEllipsisV />
              </div>
            </div>
          ))}
        </ul>
      </div>

    </div>
  );
}
export default Assignments;
