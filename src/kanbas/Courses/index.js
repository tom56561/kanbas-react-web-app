import db from "../Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import BreadCrumb from "./BreadCrumb"
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";


function Courses({courses}) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <div className="flex-fill">
            <BreadCrumb />
            <hr className="horizontal-rule" />

            <div className="mt-3 row">
                <CourseNavigation className="col-xl-2 col-lg-2 d-none d-lg-block" />
                <div className="col-xl-10 col-lg-10">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>

        </div>
    );
}
export default Courses;