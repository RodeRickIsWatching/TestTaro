import { gql, GraphQLClient } from 'graphql-request';

const depositLogs = gql`
  query depositLogs($address: String) {
    depositLogs(where: { user: $address }, orderDirection: asc, orderBy: depositId) {
      amount
      depositId
      createdAt
      id
      paid
      user
      stageId
    }
    claimLogs(where: { user: $address }, orderDirection: asc, orderBy: depositId) {
      amount
      createdAt
      id
      depositId
      user
    }
  }
`;

const perpetualClient = new GraphQLClient('https://api.thegraph.com/subgraphs/name/dragonprot/tarotpi-dev', {
  headers: {},
});

const fetchDepositLogs = async (address: string) => {
  if (!address) return null;
  const _address = address.toString().toLowerCase();
  return perpetualClient.request(depositLogs, { address: _address });
};

export default fetchDepositLogs;
