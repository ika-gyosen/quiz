import { Config } from '~/config/config.types';

export const stagingConfig: Config = {
  hasuraUrl: process.env.HASURA_URL as string,
  blarUrl: 'https://api.jp',
};
