import React from "react";
import { useState } from "react/cjs/react.development";

const Notification = (props) => {
  const [exit, setExit] = useState(false);
  const [time, setTime]= useState(null);
  const [timerActive, setTimerActive] = useState(false);
  // Timeout for notifications
  var timeout = 2;

  // Start timer and update the time state 
  const handleStartTimer = () => {
    const intevalID = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  // Start timer when timerActive is set to true
  React.useEffect(() => {
    handleStartTimer();
  }, [timerActive]);

  // Check every time the time is updated if the timeout is reached and close notification and reset
  React.useEffect(() => {
    if (time > timeout) {
      handleClose();
      setTimerActive(false);
      setTime(0);
    }
  }, [time]);

  // Close the notification
  const handleClose = () => {
    // Run exit notification
    setExit(true);
    // Remove the notificaton
    setTimeout(() => {
        props.dispacth({
            type: "REMOVE_NOTIFICATION",
            id: props.id
        })
    }, 500);
  };

  return (
    <div
      onClick={() => {
        setExit(true);
      }}
      className={`notification-item ${
        props.type === "SUCCESS" ? "success" : "error"
      } ${exit ? "exit" : ""}`}
    >
      <p>{props.message}</p>
    </div>
  );
};

export default Notification;
