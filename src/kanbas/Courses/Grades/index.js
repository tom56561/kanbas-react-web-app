import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaGear, FaFilter } from "react-icons/fa6";

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <div style={{ height: '70px' }}>
                <div>
                    <div class="float-end">
                        <button class="btn btn-lg btn-light border-secondary">
                            <FaFileImport />
                            Import
                        </button>
                        <button class="btn btn-lg btn-light border-secondary ms-2">
                            <FaFileImport />
                            Export
                        </button>
                        <button class="btn btn-lg btn-light border-secondary ms-2">
                            <FaGear />
                        </button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="mb-3 col">
                    <label for="exampleFormControlInput1" class="form-label">Student Names</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                        placeholder="Search Students" />
                </div>
                <div class="mb-3 col">
                    <label for="exampleFormControlInput1" class="form-label">Assignment Names</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                        placeholder="Search Assignments" />
                </div>
            </div>

            <div>
                <button class="btn btn-lg btn-light border-secondary ms-2">
                    <FaFilter />
                    Apply Filters
                </button>
            </div>
            <div className="table-responsive fs-4 mt-3">
                <table className="table table-striped border">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td className="text-danger">{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}
export default Grades;