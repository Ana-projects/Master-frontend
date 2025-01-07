import React from "react";

export const CenteredLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div className="layout-center">{children}</div>;
};
