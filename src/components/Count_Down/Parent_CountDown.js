import Count_Down from "./Count_Down";
import "./Count_Down.css";
import { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import "./Parent_CountDown.css"

const Parent_CountDown = () => {
  const timeLimit = 60;
  const [isStatusActive, setStatusActive] = useState(false);
  const [isStatuspaused, setStatusPaused] = useState(false);
  const [time, setTime] = useState(timeLimit);

  const inputRef = useRef();

  useEffect(() => {
    let interval = null;

    if (isStatusActive && isStatuspaused === false) {
      interval = setInterval(() => {
        setTime((time) => {
          if (time === 0) {
            clearInterval(interval);
            return time;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStatusActive, isStatuspaused]);

  const handleStart = () => {
    setStatusActive(true);
    setStatusPaused(false);
    inputRef.current.value = "";
  };

  const handlePaused = () => {
    setStatusPaused(!isStatuspaused);
    inputRef.current.value = "";
  };

  const handleReset = () => {
    setStatusActive(false);
    setTime(timeLimit);
    inputRef.current.value = "";
  };

  const handleTimeLimit = (e) => {
    setTime(e.target.value);
  };

  console.log(time);

  return (
    <div className="mainbgdiv">
      <Navbar />
      <div className="maincont">
        <p className="hint">
          Default Time limit is 60 sec you can change Time limit by input box
        </p>
        <div className="ipdiv">
          <div className="ipdiv_small">
            <input
              type="number"
              placeholder="Please Enter Time Limit"
              onChange={handleTimeLimit}
              ref={inputRef}
              className="iptext"
            />
          </div>
        </div>

        <Count_Down
          time={time}
          isStatusActive={isStatusActive}
          isStatuspaused={isStatuspaused}
        />

        <div className="btn-div">
          {isStatusActive ? (
            <>
              {isStatuspaused ? (
                <button className="btn1" onClick={handleStart}>
                  START
                </button>
              ) : (
                <button className="btn1" onClick={handlePaused}>
                  PAUSE
                </button>
              )}

              <button className="btn2" onClick={handleReset}>
                RESET
              </button>
            </>
          ) : (
            <>
              <button className="btn1" onClick={handleStart}>
                PLAY
              </button>
              <button className="btn2" onClick={handleReset}>
                RESET
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Parent_CountDown;
