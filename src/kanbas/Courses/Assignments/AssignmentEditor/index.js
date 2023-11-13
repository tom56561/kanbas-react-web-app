import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaRegCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { addAssignment, deleteAssignment, updateAssignment, setAssignment } from "../assignmentsReducer";
import * as client from "../client";


function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);

  const handleSave = async () => {
    (assignmentId === "new") ? await handleAddAssignment() : await handleUpdateAssignment();
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleDateChange = (field) => (e) => {
    dispatch(setAssignment({ ...assignment, [field]: e.target.value }));
  };

  const formatDateForInput = (isoString) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    return date.toISOString().split('T')[0];
  };

  const handleAddAssignment = () => {
    client.createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment({ ...assignment, course: courseId }));
    });
  };
  const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };
  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  return (
    <div>
      <div class="border-bottom" style={{ height: '70px' }}>
        <div>
          <div class="float-end d-flex align-items-center">
            <div class="fs-4 text-success">
              <FaRegCheckCircle className="text-success " />
              Published
            </div>
            <button class="btn btn-lg btn-light border-secondary ms-2">
              <FaEllipsisV />
            </button>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label fs-4">Assignment Name</label>
        <input type="name" class="form-control"
          value={assignment.name} onChange={(e) => dispatch(setAssignment({ ...assignment, name: e.target.value }))} />
      </div>

      <div class="mb-3">
        <textarea class="form-control"
          rows="3" value={assignment.description} onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))} />
      </div>

      <div class="mb-3 row">
        <div class="col-sm-2"></div>
        <label for="inputPassword" class="col-sm-2 col-form-label">Point</label>
        <div class="col-sm-6">
          <input type="password" class="form-control" id="inputPassword"
            placeholder="100" />
        </div>
        <div class="col-sm-2"></div>
      </div>


      <div class="mb-3 row">
        <div class="col-sm-2"></div>
        <label class="col-sm-2 col-form-label" for="exampleFormControlInput2">
          Assign</label>
        <div class="col-sm-6 border">
          <div class="mb-3">
            <label for="due" className="form-label">Due</label>
            <input
              id="due"
              class="form-control"
              type="date"
              data-placeholder="Due Date (yyyy-mm-dd)"
              value={formatDateForInput(assignment.dueDate)}
              onChange={handleDateChange('dueDate')
              }
            />

            <label for="availableFrom" className="form-label">Available From</label>
            <input
              id="availableFrom"
              class="form-control"
              type="date"
              value={formatDateForInput(assignment.availableFromDate)}
              onChange={handleDateChange('availableFromDate')}
            />

            <label for="until" className="form-label">Until</label>
            <input
              id="until"
              class="form-control"
              type="date"
              value={formatDateForInput(assignment.availableUntilDate)}
              onChange={handleDateChange('availableUntilDate')}
            />
          </div>
        </div>
        <div class="col-sm-2"></div>
      </div>

      <div class="border-top">
        <div class="pt-3 float-end boer" id="profile-edit-link-buttons">
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-light me-2">
            Cancel
          </Link>
          <button className="btn btn-danger me-2"
            onClick={() => {
              handleDeleteAssignment(assignmentId);
              navigate(`/Kanbas/Courses/${courseId}/Assignments`)
            }}>
            Delete
          </button>
          <button onClick={handleSave} className="btn btn-primary me-2">
            Save Profile
          </button>
        </div>
      </div>

    </div>
  );
}


export default AssignmentEditor;
