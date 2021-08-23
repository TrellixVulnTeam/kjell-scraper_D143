import React from "react";
import "./Notifications.scss";
import Notification from "./Notification";
import { createContext, useReducer } from "react/cjs/react.development";

export const NotificationContext = createContext();

const NotificationProvider = (props) => {
  // List of notifications
  const [state, dispacth] = useReducer((state, action) => {
    // Get command and create or remove notification
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return [...state, { ...action.payload }];
      case "REMOVE_NOTIFICATION":
        return state.filter((el) => el.id !== action.id);
      default:
        return state;
    }
  }, []);
  
  // TEMPLATE NOTIFICATION
  // dispacth({
  //   type: "ADD_NOTIFICATION",
  //   payload: {
  //     id: v4(),
  //     type: "SUCCESS",
  //     message: "Ett glatt meddelande",
  //   },
  // });

  return (
    <NotificationContext.Provider value={dispacth}>
      <div className="notification-wrapper">
        {state.map((note) => {
          return <Notification dispacth={dispacth} {...note} />;
        })}
      </div>
      {props.children}
    </NotificationContext.Provider>
  );
};
export default NotificationProvider;
