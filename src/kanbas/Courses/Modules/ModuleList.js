import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaGripVertical, FaSortDown, FaRegCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    return (
        <div class="fs-4 mt-3">
            <ul className="list-group">
                <li className="list-group-item">
                    <input className="form-control" value={module.name}
                        onChange={(e) => dispatch(setModule({
                            ...module, name: e.target.value
                        }))}
                    />
                    <textarea className="form-control" value={module.description}
                        onChange={(e) => dispatch(setModule({
                            ...module, description: e.target.value
                        }))}
                    />
                    <button className="btn btn-primary mt-2 me-2" onClick={() => dispatch(updateModule(module))}> Update </button>
                    <button className="btn btn-success mt-2" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
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
                                    onClick={() => dispatch(setModule(module))}>
                                    Edit
                                </button>
                                <button className="btn btn-danger"
                                    onClick={() => dispatch(deleteModule(module._id))}>
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