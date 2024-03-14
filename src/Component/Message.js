import React from "react";

function Message(temperature) {
  if (temperature >= 100) {
    return;
  }
  return <div></div>;
}

export default Message;
