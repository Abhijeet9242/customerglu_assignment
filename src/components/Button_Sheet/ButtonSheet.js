import "./ButtonSheet.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ButtonSheet = (props) => {
  return (
    <div
      className="modal modal-bottom fade "
      id="bottom_modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="bottom_modal"
    >
      <div className="modal-dialog  " role="document">
        <div className="modal-content ">
          <div className="modal-header">
            <h5 className="modal-title">Cities Name</h5>
           
          </div>
          <div className="modal-body">
           
             {props.data.map((element,i)=>(
                <p key={i}>{element.name}</p>
             ))}
          
          </div>
          <div className="modal-footer modal-footer-fixed d-none">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonSheet;
