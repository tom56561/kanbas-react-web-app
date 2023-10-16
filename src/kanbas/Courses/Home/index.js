import Modules from "../Modules";
import { FaFileImport, FaChartBar, FaRegEye } from "react-icons/fa";


function Home() {
    return (
        <div className="row">
            <div class="col-xl-9">
                <Modules />
            </div>
            <div class="col-xl-3">
                <div>
                    <button class="w-100 btn btn-light border-secondary mb-1 py-2 text-start">
                        <FaFileImport />
                        Import Existing Content
                    </button>
                    <button class="w-100 btn btn-light border-secondary mb-1 py-2 text-start">
                        <FaFileImport />
                        Import from Commons
                    </button>
                    <button class="w-100 btn btn-light border-secondary mb-1 py-2 text-start">
                        <FaRegEye />
                        Choose Home Page
                    </button>
                    <button class="w-100 btn btn-light border-secondary mb-1 py-2 text-start">
                        <FaChartBar />
                        View Course Stream
                    </button>
                    <button class="w-100 btn btn-light border-secondary mb-1 py-2 text-start">
                        <FaChartBar />
                        New Analytics
                    </button>
                </div>
                <div className="mt-3">
                    <h4>To do</h4>
                    <hr/>
                    <p>Nothing for the next week</p>
                </div>

            </div>
        </div>

    );
}
export default Home;
