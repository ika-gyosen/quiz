import { environment } from '~/environmentConstant';
import { stagingConfig } from '~/config/config.staging';
import { localConfig } from '~/config/config.local';
import { productionConfig } from '~/config/config.production';
import { Config } from '~/config/config.types';

const getConfig = (): Config => {
  return {
    test: localConfig,
    local: localConfig,
    staging: stagingConfig,
    production: productionConfig,
  }[environment.env];
};

export const config = getConfig();
