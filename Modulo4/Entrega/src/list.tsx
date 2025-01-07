import React from "react";
import { Link } from "react-router-dom";
import { useFilterMembers } from "./useFilterMembers";
import { MemberRow } from "./member-row";
import { ListHeader } from "./list-header";

export const ListPage: React.FC = () => {
  const [org, setOrg] = React.useState<string>("lemoncode");
  const { members, setFilter } = useFilterMembers(org);

  return (
    <>
      <h2>Hello from List page</h2>
      <input
        type="text"
        value={org}
        onChange={(e) => setOrg(e.target.value)}
      ></input>
      <button onClick={() => setFilter(org)}>Buscar</button>
      <div className="list-user-list-container">
        <ListHeader />
        {members.map((member) => (
          <MemberRow key={member.id} member={member} />
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
