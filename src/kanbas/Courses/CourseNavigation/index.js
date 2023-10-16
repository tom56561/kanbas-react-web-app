import { Link, useParams, useLocation } from "react-router-dom";

function CourseNavigation() {
    const links = [
        "Home",
        "Modules",
        "Announcements",
        "Quizzes",
        "Grades",
        "ZoomMeetings",
        "Assignments",
        "People",
        "Settings"
    ];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="col-xl-2 col-lg-2 d-none d-lg-block">
            <ul className="nav flex-column fs-5">
                {links.map((link, index) => (
                    <li key={index} className={`nav-item ${pathname.includes(link) ? "border-start border-dark" : ""}`}>
                        <Link
                            to={`/Kanbas/Courses/${courseId}/${link}`}
                            className={`nav-link ${pathname.includes(link) ? "active text-dark" : "text-danger"}`}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default CourseNavigation;