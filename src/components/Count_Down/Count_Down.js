import "./Count_Down.css";

const Count_Down = (props) => {
  return (
    <>
      <div className="btn-cont">
        <div className="titlediv">
          <h1 className="title">
            <img
              src="https://i.pinimg.com/736x/18/9c/a3/189ca3d2b345be2718567155b91f2792.jpg"
              className="timerlogo"
            />
            Timer
          </h1>
        </div>

        <hr />

        <div className="timediv">
          <p className="time">
            {props.time}
            <span>s</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Count_Down;
