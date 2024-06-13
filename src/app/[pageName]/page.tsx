import React from "react";
import { Screen } from "../components/screen";

interface ScreenPageProps {
  params: {
    pageName: string;
  };
}

const ScreenPage: React.FC<ScreenPageProps> = ({ params: { pageName } }) => {

  return <Screen name={pageName || "main"} />
}

export default ScreenPage;