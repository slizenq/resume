import React, { useState, useEffect } from "react";
import "./index.css";
import Taskbar from "../../components/Taskbar/Taskbar";

const WindowsPortfolio = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div className="windows-desktop">
      <div className="wallpaper"></div>

      <Taskbar time={time} formatTime={formatTime} formatDate={formatDate} />
    </div>
  );
};

export default WindowsPortfolio;
