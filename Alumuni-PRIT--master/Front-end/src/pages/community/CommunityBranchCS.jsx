import React from "react";
import { useParams } from "react-router-dom";

const CommunityBranch = () => {
  let { branch } = useParams();

  return <div>CommunityBranch {branch}</div>;
};

export default CommunityBranch;
