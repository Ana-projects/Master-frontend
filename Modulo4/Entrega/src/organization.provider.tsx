import React, { createContext, useState, PropsWithChildren } from "react";

interface OrganizationContextModel {
  organization: string;
  setOrganization: (organization: string) => void;
}

export const OrganizationContext =
  createContext<OrganizationContextModel>(null);

export const OrganizationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [organization, setOrganization] = useState<string>("lemoncode");

  return (
    <OrganizationContext.Provider value={{ organization, setOrganization }}>
      {children}
    </OrganizationContext.Provider>
  );
};
