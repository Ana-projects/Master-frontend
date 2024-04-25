import { FC } from "react";
import config from "./config";

export const HelloComponent: FC = () => {
  return (
    <div>
      <h2>Hello from React</h2>
      <p>API_BASE: {config.API_BASE}</p>
      <p>ENABLE_FEATURE_A: {config.ENABLE_FEATURE_A.toString()}</p>
    </div>
  );
};
