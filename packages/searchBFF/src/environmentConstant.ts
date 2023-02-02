import * as console from 'console';
import * as process from 'process';

type Environment = Readonly<{
  env: 'local' | 'test' | 'staging' | 'production';
  hasuraGraphQLAdminSecret: string;
}>;

const getEnvironment = (): Environment => {
  const env = process.env.NODE_ENV;
  const hasuraGraphQLAdminSecret = process.env.HASURA_GRAPHQL_ADMIN_SECRET;

  console.log(process.env);

  if (
    env !== 'local' &&
    env !== 'test' &&
    env !== 'staging' &&
    env !== 'production'
  ) {
    throw new Error('envの値が不適切です');
  }

  if (!hasuraGraphQLAdminSecret) {
    throw new Error('hasuraGraphQLAdminSecretの値が不適切です');
  }

  return {
    env,
    hasuraGraphQLAdminSecret,
  };
};

export const environment = getEnvironment();
