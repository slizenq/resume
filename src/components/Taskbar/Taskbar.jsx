import React from "react";
import "./index.css";
import windowsIcon from "./../../images/icons/windows-icon.png";
import windowsSearch from "./../../images/icons/search.png";
import notePad from "./../../images/icons/notepad.png";
import yandexMusic from "./../../images/icons/yandex-music.png";

const Taskbar = ({ time, formatTime, formatDate }) => {
  // Иконки приложений для панели задач
  const taskbarApps = [
    { id: 1, name: "YandexMusic", icon: yandexMusic, size: 35 },
    { id: 2, name: "NotePad", icon: notePad, size: 35 },
  ];

  return (
    <div className="taskbar">
      <div className="taskbar-left">
        {/* Кнопка Пуск */}
        <button className="start-button">
          <img
            src={windowsIcon}
            alt="windows-icon"
            className="windows-icon"
            style={{ width: "26px", height: "26px" }}
          />
        </button>

        {/* Поиск */}
        <div className="search-bar">
          <img
            src={windowsSearch}
            alt="search-icon"
            style={{ width: "17px", height: "17px" }}
          />
          <span className="search-text">Поиск</span>
        </div>

        {/* Приложения на панели задач */}
        <div className="taskbar-apps">
          {taskbarApps.map((app) => (
            <button key={app.id} className="taskbar-app" title={app.name}>
              <img
                src={app.icon}
                alt={app.name}
                style={{ width: `${app.size}px`, height: `${app.size}px` }}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="taskbar-right">
        <div className="system-tray">
          <div className="tray-icons">
            <div className="tray-icon">
              <i className="fas fa-chevron-up"></i>
            </div>
            <div className="tray-icon">
              <i className="fas fa-wifi"></i>
            </div>
            <div className="tray-icon">
              <i className="fas fa-volume-up"></i>
            </div>
            <div className="tray-icon">
              <i className="fas fa-battery-three-quarters"></i>
            </div>
          </div>

          <div className="time-display">
            <div className="time">{formatTime(time)}</div>
            <div className="date">{formatDate(time)}</div>
          </div>

          <div className="desktop-peek">
            <div className="peek-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
