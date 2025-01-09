import React from "react";
import DeleteBtn from "./delete-btn";

const IssueCard: React.FC<Issue> = ({ content, name, id }) => {
  return (
    <div className="bg-slate-200 shadow w-full sm:w-1/4 p-5 mt-5 rounded truncate">
      <h3 className="text-slate-900 text-lg font-medium">{name}</h3>
      <p className="text-slate-600 mt-2 text-sm font-semibold">{content}</p>
      <DeleteBtn id={id} />
    </div>
  );
};

export default IssueCard;
