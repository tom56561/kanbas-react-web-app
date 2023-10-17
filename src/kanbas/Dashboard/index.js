import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
  const courses = db.courses;
  return (
    <div class="wd-dashboard-content">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div className="row">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="col-xl-3 col-lg-4 col-md-6 py-3 text-decoration-none">
              <div class="card" style={{width: '270px'}}>
                <div class="card-img-top bg-primary" style={{height: '100px'}}>
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
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;