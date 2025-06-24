import React from "react";

interface Props {
  title: string;
  organization?: string;
  inputValue?: string;
}

export const MemberListHeader: React.FC<Props> = (props) => {
  const { title } = props;
  return <h1>{title}</h1>;
};
