import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";

interface OrganizationContextType {
  organization: string;
  setOrganization: (organization: string) => void;
}

const OrganizationContext = createContext<OrganizationContextType | undefined>(
  undefined
);

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

export const useOrganization = () => {
  const context = useContext(OrganizationContext);
  if (context === undefined) {
    throw new Error(
      "useOrganization must be used within an OrganizationProvider"
    );
  }
  return context;
};
