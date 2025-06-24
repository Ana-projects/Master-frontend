import React from "react";
import { MemberEntity } from "./model";
import { MemberRow } from "./member-row.component";

interface Props {
  organization: string;
}

export const MemberList: React.FC<Props> = (props) => {
  const { organization } = props;
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [error, setError] = React.useState<string>("");

  React.useEffect(() => {
    if (!organization) return;

    setError("");

    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((json) => {
        setMembers(json);
      })
      .catch((err) => {
        setMembers([]);
        setError(`No members found: ${err.message}`);
      });
  }, [organization]);

  return (
    <>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>

        {error && <div className="error-message">{error}</div>}

        {!error &&
          members.map((member) => (
            <MemberRow member={member} key={member.id} />
          ))}
      </div>
    </>
  );
};
