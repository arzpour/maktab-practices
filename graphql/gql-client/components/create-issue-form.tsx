"use client";

import React from "react";

import { Button } from "@/components/btn";
import { Input } from "@/components/input";
import { classNames } from "@/utils/classname";
import { useMutation, useQuery } from "@apollo/client";
import { setToken } from "@/utils/token";
import { useRouter } from "next/navigation";
import { createIssueMutation } from "@/gql/mutations/issue";
import { fetchIssuesQuery } from "@/gql/queries/issues";

export const CreateIssueForm: React.FC = () => {
  const [values, setValues] = React.useState<ICreateIssue>({
    name: "",
    content: "",
    status: "",
  });
  const { push } = useRouter();
  const [createIssue, { loading }] = useMutation<Issue>(createIssueMutation);
  const { refetch } = useQuery(fetchIssuesQuery);

  const onChange: (
    _: keyof ICreateIssue
  ) => React.ChangeEventHandler<HTMLInputElement> = (field) => {
    return (event) => {
      const value = event.target.value;
      const newValues: ICreateIssue = { ...values };
      newValues[field] = value;
      setValues(newValues);
    };
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const response = await createIssue({
        variables: { createIssueInput2: values },
      });
      await refetch();

      if (!response.data?.user?.token) return;
      setToken(response.data.user?.token);
      push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={classNames(
        "bg-white border border-slate-300 rounded-xl px-4 py-5 shadow-lg",
        "max-w-[500px] w-full space-y-4 mt-20"
      )}
    >
      <p className="text-lg font-semibold">Create</p>
      <Input label="text" onChange={onChange("name")} />
      <Input type="text" label="content" onChange={onChange("content")} />
      <Input type="text" label="status" onChange={onChange("status")} />
      <Button disabled={loading} type="submit">
        Create
      </Button>
    </form>
  );
};
