import React, { ChangeEvent } from "react";
import { MemberEntity } from "./model";
import { MemberRow } from "./member-row.component";
import { MemberListHeader } from "./member-list-header.component";

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organization, setOrganization] = React.useState<string>("lemoncode");
  const [inputValue, setInputValue] = React.useState<string>("lemoncode");

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [organization]);

  function handleClick(): void {
    setOrganization(inputValue);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.target.value);
  }

  return (
    <>
      <MemberListHeader title="Hello from List page" />
      <input
        className="default-margin"
        value={inputValue}
        onChange={handleChange}
      />
      <button className="default-margin" onClick={handleClick}>
        Search
      </button>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <MemberRow member={member} key={member.id} />
        ))}
      </div>
    </>
  );
};
