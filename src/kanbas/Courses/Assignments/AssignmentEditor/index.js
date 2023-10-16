import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FaRegCheckCircle, FaEllipsisV } from "react-icons/fa";



function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
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
        <input type="name" class="form-control" id="exampleFormControlInput1"
          value={assignment.title} />
      </div>

      <div class="mb-3">
        <textarea class="form-control" id="exampleFormControlTextarea1"
          rows="3">{assignment.course}</textarea>
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
        <label class="col-sm-2 col-form-label" for="exampleFormControlInput2">Assignment
        </label>
        <div class="col-sm-6">
          <select class="form-select" name="pronouns" id="exampleFormControlInput2">
            <option value="1" selected>Assignment</option>
            <option value="2">Optition 1</option>
            <option value="3">Optition 2</option>
            <option value="4">Optition 3</option>
          </select>
        </div>
        <div class="col-sm-2"></div>
      </div>

      <div class="mb-3 row">
        <div class="col-sm-2"></div>
        <label class="col-sm-2 col-form-label" for="exampleFormControlInput2">Display Grade
          as</label>
        <div class="col-sm-6">
          <select class="form-select" name="pronouns" id="exampleFormControlInput2">
            <option value="1" selected>Percentage</option>
            <option value="2">Optition 1</option>
            <option value="3">Optition 2</option>
            <option value="4">Optition 3</option>
          </select>
        </div>
        <div class="col-sm-2"></div>
      </div>
      <div class="mb-3 row">
        <div class="col-sm-2"></div>
        <div class="col-sm-2"></div>
        <div class="col-sm-6">
          <div class="form-check">
            <input id="credit" name="paymentMethod" type="radio"
              class="form-check-input" checked="" required="" />
            <label class="form-check-label" for="credit">Don not count this
              assigment</label>
          </div>
        </div>
        <div class="col-sm-2"></div>
      </div>

      <div class="mb-3 row">
        <div class="col-sm-2"></div>
        <label class="col-sm-2 col-form-label" for="exampleFormControlInput2">Submission
          Type</label>
        <div class="col-sm-6 border">
          <select class="form-select" name="pronouns" id="exampleFormControlInput2">
            <option value="1" selected>Online</option>
            <option value="2">Optition 1</option>
            <option value="3">Optition 2</option>
            <option value="4">Optition 3</option>
          </select>
          <div class="py-2">Online Entry Options</div>
          <div class="form-check">
            <input id="credit" name="paymentMethod" type="radio"
              class="form-check-input" checked="" required="" />
            <label class="form-check-label" for="credit">Text Entry
            </label>
          </div>
          <div class="form-check">
            <input id="credit" name="paymentMethod" type="radio"
              class="form-check-input" checked="" required="" />
            <label class="form-check-label" for="credit">Website URL</label>
          </div>
          <div class="form-check">
            <input id="credit" name="paymentMethod" type="radio"
              class="form-check-input" checked="" required="" />
            <label class="form-check-label" for="credit">Media Recordings</label>
          </div>
          <div class="form-check">
            <input id="credit" name="paymentMethod" type="radio"
              class="form-check-input" checked="" required="" />
            <label class="form-check-label" for="credit">Media Recordings</label>
          </div>
        </div>
        <div class="col-sm-2"></div>
      </div>

      <div class="mb-3 row">
        <div class="col-sm-2"></div>
        <label class="col-sm-2 col-form-label" for="exampleFormControlInput2">Submission
          Type</label>
        <div class="col-sm-6 border">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Assign to</label>
            <input type="name" class="form-control" id="exampleFormControlInput1"
              placeholder="A1-SETUP" />
            <label for="exampleFormControlInput1" class="form-label">Due</label>
            <input type="name" class="form-control" id="exampleFormControlInput1"
              placeholder="A1-SETUP" />
            <label for="exampleFormControlInput1" class="form-label">Available
              from</label>
            <input type="name" class="form-control" id="exampleFormControlInput1"
              placeholder="A1-SETUP" />
            <label for="exampleFormControlInput1" class="form-label">Until
              from</label>
            <input type="name" class="form-control" id="exampleFormControlInput1"
              placeholder="A1-SETUP" />
          </div>

        </div>
        <div class="col-sm-2"></div>
      </div>

      <div class="border-top">
        <div class="form-check d-inline mt-2">
          <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked=""
            required="" />
          <label class="form-check-label" for="credit">Media Recordings</label>
        </div>
        <div class="pt-3 float-end boer" id="profile-edit-link-buttons">
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-light">
            Cancel
          </Link>
          <button onClick={handleSave} className="btn btn-danger me-2">
            Save Profile
          </button>
        </div>
      </div>

    </div>
  );
}


export default AssignmentEditor;
