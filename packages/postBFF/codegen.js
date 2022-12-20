module.exports = {
  schema: [
    {
      'http://localhost:8080/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
        },
      },
    },
    './src/{schema,modules,twitter}/**/typedefs.ts',
  ],
  documents: './src/**/*.graphql',
  overwrite: true,
  config: {
    scalars: {
      timestamptz: 'string',
      uuid: 'string',
      bigint: 'string',
      timestamp: 'string',
    },
  },
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
  generates: {
    './src/types/graphql.d.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        useIndexSignature: true,
        maybeValue: 'T | undefined | null',
        namingConvention: {
          transformUnderscore: true,
        },
        enumsAsTypes: true,
      },
    },
    './src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'types/graphql.d.ts',
      },
      plugins: ['typescript-operations', 'typescript-graphql-request'],
      config: {
        namingConvention: {
          transformUnderscore: true,
        },
      },
    },
  },
};
