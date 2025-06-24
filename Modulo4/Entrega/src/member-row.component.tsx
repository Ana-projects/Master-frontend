import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "./model";

interface Props {
  member: MemberEntity;
}

export const MemberRow = (props: Props) => (
  <React.Fragment key={props.member.id}>
    <img src={props.member.avatar_url} />
    <span>{props.member.id}</span>
    <Link to={`/detail/${props.member.login}`}>{props.member.login}</Link>
  </React.Fragment>
);
