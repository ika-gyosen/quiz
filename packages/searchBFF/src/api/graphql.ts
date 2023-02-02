import { GraphQLClient } from 'graphql-request';
import { environment } from '~/environmentConstant';
import { config } from '~/config';

export const hasuraClient = new GraphQLClient(config.hasuraUrl, {
  headers: { 'x-hasura-admin-secret': environment.hasuraGraphQLAdminSecret },
});
