import React from "react";
import { MemberList } from "./member-list.component";
import { ListHeader } from "./list-header.component";
import { useOrganization } from "./organization.context";

export const ListPage: React.FC = () => {
  const { organization, setOrganization } = useOrganization();

  return (
    <>
      <ListHeader
        title="Hello from List page"
        organization={organization}
        onOrganizationChange={setOrganization}
      />
      <MemberList organization={organization} />
    </>
  );
};
