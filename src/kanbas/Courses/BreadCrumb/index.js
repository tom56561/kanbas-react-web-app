import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css"
import { FaBars, FaGlasses } from "react-icons/fa";


function BreadCrumb() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const breadcrumbs = pathname.split("/");
    breadcrumbs.shift();
    breadcrumbs.shift();
    breadcrumbs.shift();
    const firstBreadcrumb = (
        <li class="breadcrumb-item pt-3">
            <Link to={`/Kanbas/Courses/${breadcrumbs[0]}/Home`}
                className="text-decoration-none fs-3 text-danger">
                {breadcrumbs[0]}
            </Link>
        </li>
    );
    const secondBreadcrumb = (
        <li class="breadcrumb-item active fs-4 text-secondary" aria-current="page">
            {breadcrumbs[1]}
        </li>
    );

    return (
        <div className="d-none d-md-flex mt-3 flex-row ps-3 align-items-center">
            <div>
                <FaBars className="text-danger icon me-2" />
            </div>
            <div>
                <nav className="nav-container" aria-label="breadcrumb">
                    <ol className="breadcrumb d-flex align-items-end">
                        {firstBreadcrumb}
                        {secondBreadcrumb}
                    </ol>
                </nav>
            </div>
            <div class="ms-auto pe-3">
                <button class="btn btn-lg btn-light border-secondary">
                    <FaGlasses className="icon pe-2" />
                    Student View
                </button>
            </div>
        </div>
    );
}

export default BreadCrumb;