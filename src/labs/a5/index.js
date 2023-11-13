import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
function Assignment5() {
  const API_BASE = "https://kanbas-node-server-app-t9tx.onrender.com";
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={`${API_BASE}/a5/welcome`}
          className="list-group-item">
          Welcome
        </a>
      </div>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;