"use client";

import { useQuery } from "@apollo/client";
import { fetchIssuesQuery } from "@/gql/queries/issues";
import { CreateIssueForm } from "@/components/create-issue-form";
import IssueCard from "@/components/issue-card";

export const IssuesListContainer: React.FC = () => {
  const { loading, error, data } = useQuery<{ issues: Array<Issue> }>(
    fetchIssuesQuery
  );

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const done = (data?.issues || []).filter((todo) => todo.status === "DONE");
  const inprogress = (data?.issues || []).filter(
    (todo) => todo.status === "INPROGRESS"
  );
  const backlog = (data?.issues || []).filter(
    (todo) => todo.status === "BACKLOG"
  );
  const todo = (data?.issues || []).filter((todo) => todo.status === "TODO");

  console.log(data?.issues);
  return (
    <main className="min-h-screen bg-slate-100 flex flex-col justify-center items-center px-2 pb-20">
      <CreateIssueForm />
      {todo.length >= 1 && (
        <>
          <div className="mt-10 w-full sm:w-11/12">
            <h3 className="text-slate-800 font-bold">TODO</h3>
            <div className="flex gap-6 flex-wrap">
              {todo.map((el, index) => (
                <IssueCard key={index} {...el} />
              ))}
            </div>
          </div>
        </>
      )}

      {backlog.length >= 1 && (
        <div className="mt-10 w-full sm:w-11/12">
          <h3 className="text-slate-800 font-bold">BACKLOG</h3>
          <div className="flex gap-6 flex-wrap">
            {backlog.map((el, index) => (
              <IssueCard key={index} {...el} />
            ))}
          </div>
        </div>
      )}
      {inprogress.length >= 1 && (
        <div className="mt-10 w-full sm:w-11/12">
          <h3 className="text-slate-800 font-bold">INPROGRESS</h3>
          <div className="flex gap-6 flex-wrap">
            {inprogress.map((el, index) => (
              <IssueCard key={index} {...el} />
            ))}
          </div>
        </div>
      )}
      {done.length >= 1 && (
        <div className="mt-10 w-full sm:w-11/12">
          <h3 className="text-slate-800 font-bold">DONE</h3>
          <div className="flex gap-6 flex-wrap">
            {done.map((el, index) => (
              <IssueCard key={index} {...el} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};
