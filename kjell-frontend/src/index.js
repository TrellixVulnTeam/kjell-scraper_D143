import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import Statistics from "./Statistics/Statistics"
import NotificationProvider from "./App/components/NotificationProvider";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./App/components/Header";

const rootElement = document.getElementById("root")

ReactDOM.render(
  <BrowserRouter>
    <NotificationProvider>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </NotificationProvider>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
