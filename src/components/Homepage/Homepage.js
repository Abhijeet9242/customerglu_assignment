import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import task1 from "./task1.png";
import task2 from "./task2.png";

const Homepage = () => {
  const navigate = useNavigate();

  const goToTask1 = () => {
    navigate("/task1");
  };
  const goToTask2 = () => {
    navigate("/task2");
  };

  return (
    <>
      <div className="bg">
        <div className="mainbody">
          <div>.</div>
          <div className="bodycont">
            <div className="itemdiv">
              <div className="itemcont" onClick={goToTask1}>
                <div className="imgdiv">
                  <img src={task1} />
                </div>
                <div className="hometitlediv">
                  <p>Task1</p>
                </div>
              </div>
              <div className="itemcont" onClick={goToTask2}>
                <div className="imgdiv">
                  <img src={task2} />
                </div>
                <div className="hometitlediv">
                  <p>Task2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
