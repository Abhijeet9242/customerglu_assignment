import ButtonSheet from "./ButtonSheet";
import "./Parent_ButtonSheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";

const Parent_ButtonSheet = () => {
  const data = [
    { name: "Bangalore" },
    { name: "Hyderabad" },
    { name: "Chennai" },
    { name: "Mumbai" },
  ];

  return (
    <>
      <Navbar />
      <div>
        <div>
          <div class="col-12 col-md-4 offset-md-4 d-flex justify-content-center mt-5">
            <button
              type="button"
              class="btn btn-secondary border rounded-pill shadow-sm mb-1"
              data-toggle="modal"
              data-target="#bottom_modal"
            >
              Open Bottom Sheet <i class="fa fa-angle-down pl-2"></i>
            </button>
          </div>

          <ButtonSheet data={data} />
        </div>
      </div>
    </>
  );
};

export default Parent_ButtonSheet;
