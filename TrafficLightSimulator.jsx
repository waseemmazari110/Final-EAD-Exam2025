import React, { useEffect, useState } from "react";
// import "./Light.css";

const TrafficLightSimulator1 = () => {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    const cycle = ["red", "yellow", "green"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % cycle.length;
      setActiveLight(cycle[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h2>Traffic Light Simulator</h2>
      <div className="traffic-light">
        <div className={`light red ${activeLight === "red" ? "active" : ""}`} />
        <div
          className={`light yellow ${activeLight === "yellow" ? "active" : ""}`}
        />
        <div
          className={`light green ${activeLight === "green" ? "active" : ""}`}
        />

         </div>
    </div>
  );
};

export default TrafficLightSimulator1;
