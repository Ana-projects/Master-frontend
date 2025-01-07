import React from "react";
import { useFilterMembers } from "../useFilterMembers";
import { MemberRow } from "../member-row";
import { ListHeader } from "../list-header";
import { AppLayout } from "@/layout";
import { useOrganization } from "../organization-context";

export const ListScene: React.FC = () => {
  const { organization, setOrganization } = useOrganization();
  const { members, setFilter } = useFilterMembers(organization);

  return (
    <AppLayout>
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
    </AppLayout>
  );
};
