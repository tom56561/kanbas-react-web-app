import ModuleList from "./ModuleList";
import { FaRegCheckCircle, FaEllipsisV } from "react-icons/fa";
function Modules() {
  return (
    <div>
      <div class="border-bottom" style={{ height: '70px' }}>
        <div class="float-end d-flex flex-row">
          <button class="btn btn-lg btn-light border-secondary">
            Collapse All
          </button>
          <button class="btn btn-lg btn-light border-secondary ms-2">
            View Progress
          </button>
          <div class="dropdown ms-2">
            <button class="btn  btn-lg btn-light border-secondary dropdown-toggle" type="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              <FaRegCheckCircle className="text-success me-1"/>
              Publish All
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

          <button class="btn btn-lg btn-danger border-secondary ms-2">
            + Module
          </button>
          <button class="btn btn-lg btn-light border-secondary ms-2">
            <FaEllipsisV/>
          </button>
        </div>
      </div>
      <ModuleList />
    </div>
  );
}

export default Modules;
