import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaSortDown, FaRegCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";

function ModuleList() {
    const { courseId } = useParams();
    const [modules, setModules] = useState(db.modules);
    const [module, setModule] = useState({
        name: "New Module",
        description: "New Description",
        course: courseId,
    });
    const addModule = (module) => {
        setModules([
            { ...module, _id: new Date().getTime().toString() },
            ...modules,
        ]);
    };
    const deleteModule = (moduleId) => {
        setModules(modules.filter(
            (module) => module._id !== moduleId));
    };
    const updateModule = () => {
        setModules(
            modules.map((m) => {
                if (m._id === module._id) {
                    return module;
                } else {
                    return m;
                }
            })
        );
    }

    return (
        <div class="fs-4 mt-3">
            <ul className="list-group">
                <li className="list-group-item">
                    <input className="form-control" value={module.name}
                        onChange={(e) => setModule({
                            ...module, name: e.target.value
                        })}
                    />
                    <textarea className="form-control" value={module.description}
                        onChange={(e) => setModule({
                            ...module, description: e.target.value
                        })}
                    />
                    <button className="btn btn-primary mt-2 me-2" onClick={updateModule}> Update </button>
                    <button className="btn btn-success mt-2" onClick={() => { addModule(module) }}>Add</button>
                </li>

                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="py-4 list-group-item list-group-item-secondary mb-4">
                            <FaGripVertical />
                            <FaSortDown />
                            {module.name}
                            <span class="float-end">
                                <FaRegCheckCircle className="text-success" />
                                <FaSortDown />
                                <FaPlus />
                                <FaEllipsisV />
                                <button className="btn btn-warning me-1"
                                    onClick={(event) => { setModule(module); }}>
                                    Edit
                                </button>
                                <button className="btn btn-danger"
                                    onClick={() => deleteModule(module._id)}>
                                    Delete
                                </button>
                            </span>

                            {/* <p>{module.description}</p> */}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
export default ModuleList;