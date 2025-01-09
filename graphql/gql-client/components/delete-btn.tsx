"use client";

import { deleteIssueMutation } from "@/gql/mutations/issue";
import { fetchIssuesQuery } from "@/gql/queries/issues";
import { useMutation, useQuery } from "@apollo/client";
import React from "react";

interface IDeleteIssue {
  id: string;
}

const DeleteBtn: React.FC<IDeleteIssue> = ({ id }) => {
  const { refetch } = useQuery(fetchIssuesQuery);

  const [deleteIssue, { loading }] = useMutation(deleteIssueMutation);

  const deleteIssueHandler = async () => {
    try {
      const response = await deleteIssue({
        variables: { deleteIssueId: id },
      });
      await refetch();

      if (!response.data) return;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={deleteIssueHandler}
        disabled={loading}
        className="bg-red-600 text-white px-4 py-1 text-sm md:px-5 md:py-1.5 xl:text-base rounded"
      >
        {loading ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
};

export default DeleteBtn;
