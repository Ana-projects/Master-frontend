import React, { useContext } from "react";
import { MemberList } from "./member-list.component";
import { ListHeader } from "./list-header.component";
import { OrganizationContext } from "./organization.provider";

export const ListPage: React.FC = () => {
  const { organization, setOrganization } = useContext(OrganizationContext);

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
