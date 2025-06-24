import React, { ChangeEvent } from "react";
import { useOrganization } from "./organization.context";

interface Props {
  title: string;
  organization: string;
  onOrganizationChange: (organization: string) => void;
}

export const ListHeader: React.FC<Props> = (props) => {
  const { title, onOrganizationChange } = props;
  const { organization, setOrganization } = useOrganization();
  const [inputValue, setInputValue] = React.useState<string>(organization);

  React.useEffect(() => {
    setInputValue(organization);
  }, [organization]);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.target.value);
  }

  function handleClick(): void {
    setOrganization(inputValue);
    onOrganizationChange(inputValue);
  }

  return (
    <>
      <h1>{title}</h1>
      <input
        className="default-margin"
        value={inputValue}
        onChange={handleChange}
      />
      <button className="default-margin" onClick={handleClick}>
        Search
      </button>
    </>
  );
};
