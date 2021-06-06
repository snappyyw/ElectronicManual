import React from "react";
import ReactPlayer from "react-player";

function Lockdown() {
  return (
    <div className={"body"}>
      <h1 className="title">Приложение наблюдения с блокированием экрана</h1>
      <ReactPlayer
        height="500px"
        width="100%"
        controls="true"
        url="https://www.youtube.com/watch?v=nA7ju_H5aac"
      />
      <h3 className={"subtitle"}>Материал к видео:</h3>
    </div>
  );
}

export default Lockdown;
