import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const h1Style = {
    color: "yellow",
  };
  const listStyle = {
    listStyleType: "none",
  };
  const messageStyle = {
    color: "green",
  };

  const header = `Joshua Levine Portfolio Example`;
  const mySkills = [
    { name: "Javascript", comfort: 7, frontEnd: true, backEnd: true },
    { name: "CSS", comfort: 3, frontEnd: true, backEnd: false },
    { name: "HTML", comfort: 5, frontEnd: true, backEnd: false },
  ];
  const usageMessage = (skill) => {
    if (skill.frontEnd === true && skill.backEnd === true) {
      return <p>I can use this for both front and back end development.</p>;
    }
    if (skill.frontEnd === true && skill.backEnd === false) {
      return (
        <p>I can only use this language for front end development only.</p>
      );
    }
  };

  const skillsList = mySkills.map((skill, index) => (
    <li key={index} style={messageStyle}>
      I have learned {skill.name}. On a scale of 1-10 I would say my comfort
      level is a {skill.comfort}. {usageMessage(skill)}{" "}
    </li>
  ));

  return (
    <>
      <h1 style={h1Style}>{header}</h1>
      <ul style={listStyle}>{skillsList}</ul>
    </>
  );
}

export default App;
