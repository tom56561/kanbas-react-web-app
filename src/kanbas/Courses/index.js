import db from "../Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import BreadCrumb from "./BreadCrumb"



function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div className="flex-fill">
            <BreadCrumb />
            {/* <h1>{course.number} {course.name}</h1> */}
            <hr className="horizontal-rule" />

            <div className="mt-3 row">
                <CourseNavigation className="col-xl-2 col-lg-2 d-none d-lg-block"/>
                <div className="col-xl-10 col-lg-10">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<h1>Home</h1>} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<h1>Assignments</h1>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<h1>Assignment Editor</h1>}
                        />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>

        </div>
    );
}
export default Courses;