import React from "react";

interface ScreenProps {
  name: string;
}

export const Screen: React.FC<ScreenProps> = ({ name }) => {
  return <div>
    <h1>SSR Screen: {name}</h1>
  </div>
}