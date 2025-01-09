import { gql } from "@apollo/client";

export const createIssueMutation = gql`
  mutation CreateIssue($createIssueInput2: CreateIssueInput!) {
    createIssue(input: $createIssueInput2) {
      userId
      status
      name
      id
      createdAt
      content
    }
  }
`;

export const deleteIssueMutation = gql`
  mutation DeleteIssue($deleteIssueId: ID!) {
    deleteIssue(id: $deleteIssueId)
  }
`;
