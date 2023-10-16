import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaSortDown, FaRegCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div class="fs-4 mt-3">

            <ul className="list-group">
                {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <li key={index} className="py-4 list-group-item list-group-item-secondary mb-4">
                                <FaGripVertical />
                                <FaSortDown />
                                {module.name}
                                <span class="float-end">
                                    <FaRegCheckCircle className="text-success"/>
                                    <FaSortDown />
                                    <FaPlus />
                                    <FaEllipsisV />
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

<div class="fs-4 mt-3">
    <ul class="list-group w-100">
        <li class="py-3 list-group-item list-group-item-secondary">
            <i class="fa-solid fa-grip-vertical fa-2xs"></i>
            <i class="fa-solid fa-sort-down fa-xs"></i>
            Week 0 - INTRO
            <span class="float-end">
                <i class="fa fa-check-circle text-success"></i>
                <i class="fa-solid fa-sort-down fa-sm"></i>
                <i class="fa fa-plus px-3"></i>
                <i class="fa fa-ellipsis-v"></i>
            </span>
        </li>
        <li class="py-3 list-group-item">
            <i class="fa-solid fa-grip-vertical fa-2xs"></i>
            LEARNING OBJECTIVES
            <span class="float-end">
                <i class="fa fa-check-circle text-success pe-4"></i>
                <i class="fa fa-ellipsis-v"></i>
            </span>
        </li>
        <li class="py-3 list-group-item">
            <i class="fa-solid fa-grip-vertical fa-2xs pe-4"></i>
            <span class="float-end">
                <i class="fa fa-check-circle text-success pe-4"></i>
                <i class="fa fa-ellipsis-v"></i>
            </span> Introduction to the course
        </li>
        <li class="py-3 list-group-item">
            <i class="fa-solid fa-grip-vertical fa-2xs pe-4"></i>
            <span class="float-end">
                <i class="fa fa-check-circle text-success pe-4"></i>
                <i class="fa fa-ellipsis-v"></i>
            </span> Learn what is Web Development
        </li>
        <li class="py-3 list-group-item">
            <i class="fa-solid fa-grip-vertical fa-2xs pe-4"></i>
            <span class="float-end">
                <i class="fa fa-check-circle text-success pe-4"></i>
                <i class="fa fa-ellipsis-v"></i>
            </span> Creating a development environment
        </li>
        <li class="py-3 list-group-item">
            <i class="fa-solid fa-grip-vertical fa-2xs pe-4"></i>
            <span class="float-end">
                <i class="fa fa-check-circle text-success pe-4"></i>
                <i class="fa fa-ellipsis-v"></i>
            </span> Creating a Web Application
        </li>
        <li class="py-3 list-group-item">
            <i class="fa-solid fa-grip-vertical fa-2xs pe-4"></i>
            <span class="float-end">
                <i class="fa fa-check-circle text-success pe-4"></i>
                <i class="fa fa-ellipsis-v"></i>
            </span> Getting started with the 1st assignment
        </li>
        <li class="py-3 list-group-item">
            <i class="fa-solid fa-grip-vertical fa-2xs"></i>
            <span class="float-end">
                <i class="fa fa-check-circle text-success pe-4"></i>
                <i class="fa fa-ellipsis-v"></i>
            </span> READING
        </li>
        <li class="py-3 list-group-item">
            <i class="fa-solid fa-grip-vertical fa-2xs pe-4"></i>
            <span class="float-end">
                <i class="fa fa-check-circle text-success pe-4"></i>
                <i class="fa fa-ellipsis-v"></i>
            </span> Full Stack - Chapter 1
        </li>
        <li class="py-3 list-group-item">
            <i class="fa-solid fa-grip-vertical fa-2xs pe-4"></i>
            <span class="float-end">
                <i class="fa fa-check-circle text-success pe-4"></i>
                <i class="fa fa-ellipsis-v"></i>
            </span> Full Stack - Chapter 2
        </li>
        <li class="py-3 list-group-item">
            <i class="fa-solid fa-grip-vertical fa-2xs"></i>
            <span class="float-end">
                <i class="fa fa-check-circle text-success pe-4"></i>
                <i class="fa fa-ellipsis-v"></i>
            </span> SLIDES
        </li>
        <li class="py-3 list-group-item">
            <i class="fa-solid fa-grip-vertical fa-2xs"></i>
            <i class="fa-solid fa-link fa-2xs pe-4 text-success"></i>
            <a href="#" class="text-danger text-decoration-none">
                Introduction to Web Development
                <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
            </a>
            <span class="float-end">
                <i class="fa fa-check-circle text-success pe-4"></i>
                <i class="fa fa-ellipsis-v"></i>
            </span>
        </li>
        <li class="py-3 list-group-item">
            <i class="fa-solid fa-grip-vertical fa-2xs"></i>
            <i class="fa-solid fa-link fa-2xs pe-4 text-success"></i>
            <a href="#" class="text-danger text-decoration-none">
                Creating an HTTP server wiht Node.js
                <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
            </a>
            <span class="float-end">
                <i class="fa fa-check-circle text-success pe-4"></i>
                <i class="fa fa-ellipsis-v"></i>
            </span>
        </li>
        <li class="py-3 list-group-item">
            <i class="fa-solid fa-grip-vertical fa-2xs"></i>
            <i class="fa-solid fa-link fa-2xs pe-4 text-success"></i>
            <a href="#" class="text-danger text-decoration-none">
                Creating a React Application
                <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
            </a>
            <span class="float-end">
                <i class="fa fa-check-circle text-success pe-4"></i>
                <i class="fa fa-ellipsis-v"></i>
            </span>
        </li>
    </ul>
</div>