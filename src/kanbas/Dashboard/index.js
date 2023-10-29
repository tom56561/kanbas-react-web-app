import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
) {
  return (
    <div class="wd-dashboard-content">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
      <div className="mt-2">
        <button onClick={addNewCourse} className="btn btn-success me-2" >
          Add
        </button>
        <button onClick={updateCourse} className="btn btn-primary">
          Update
        </button>
      </div>

      <div className="row">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="col-xl-3 col-lg-4 col-md-6 py-3 text-decoration-none">
            <div class="card" style={{ width: '270px' }}>
              <div class="card-img-top bg-primary" style={{ height: '100px' }}>
                <a href="#" class="float-end p-4">
                  <i class="fa-solid fa-ellipsis-vertical fa-2xl text-white"></i>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title text-primary">{course.name}</h5>
                <p class="card-text">CS5610.17387.202410_ Fall 2024 Semester Full Term...</p>
                <a href="#" class="course-card-icon">
                  <i class="fa-regular fa-pen-to-square fa-lg text-secondary"></i> </a>
              </div>
              <div className="m-2 d-flex justify-content-end">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }} className="btn btn-warning me-2">
                  Edit
                </button>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }} className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
export default Dashboard;