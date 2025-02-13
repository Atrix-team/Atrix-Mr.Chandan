import React from "react";
// import './type.css'; // Assuming you are using an external CSS file for styles
import TypeWriterEffect from 'react-typewriter-effect'

const TypeWriterComponent = () => {
  return (
    <TypeWriterEffect
      textStyle={{
        fontSize: "60px",
        fontWeight: "400",
        marginLeft: "4%",
        marginTop: "2.5%",
      }}
      startDelay={500}
      cursorColor="white"
      multiText={[
        "restart,restart,restart ",
        "reset,reset,reset",
        "refocus,refocus,refocus",

      ]}
      multiTextDelay={1000}
      typeSpeed={50}
      eraseSpeed={50}
      eraseDelay={2000}
      multiTextLoop={true}
    />
  );
};

export default TypeWriterComponent;
