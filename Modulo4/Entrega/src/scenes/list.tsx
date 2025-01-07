import React from "react";
import { Link } from "react-router-dom";
import { useFilterMembers } from "../useFilterMembers";
import { MemberRow } from "../member-row";
import { ListHeader } from "../list-header";
import { useOrganization } from "../organization-context";

export const ListPage: React.FC = () => {
  const { organization, setOrganization } = useOrganization();
  const { members, setFilter } = useFilterMembers(organization);

  return (
    <>
      <h2>Hello from List page</h2>
      <input
        type="text"
        value={organization}
        onChange={(e) => setOrganization(e.target.value)}
      ></input>
      <button onClick={() => setFilter(organization)}>Buscar</button>
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
