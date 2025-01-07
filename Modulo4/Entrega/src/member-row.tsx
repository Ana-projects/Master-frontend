import React from "react";
import { MemberEntity } from "./model";
import { Link } from "react-router-dom";
import { routes } from "@/router";

interface Props {
  member: MemberEntity;
}

export const MemberRow: React.FC<Props> = (props) => {
  const { member } = props;
  return (
    <>
      <img src={member.avatar_url} />
      <span>{member.id}</span>
      <Link to={routes.detail(member.login)}>{member.login}</Link>
    </>
  );
};
