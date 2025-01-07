import { useEffect, useState } from "react";
import { MemberEntity } from "./model";

export const useFilterMembers = (org: string) => {
  const [members, setMembers] = useState<MemberEntity[]>([]);
  const [filter, setFilter] = useState<string>(org);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/${filter}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [filter]);

  return { members, filter, setFilter };
};
