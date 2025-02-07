import { defaultConfig } from './context';
import { Config } from './types';

/**
 * Components such as Dialog that are rendered using another render
 * do not get their configuration from the `react context`,
 * so the values in the context are synced to the `vanilla store` here.
 *
 * This is a hacked approach, and after some research, this is the lighter approach.
 *
 * Maybe using `zustand` would be a better approach,
 * but this is enough for now and we'll refactor later if needed.
 *
 * NOTE: component would not watch the changes for the vanilla store.
 */
let globalConfig: Config = defaultConfig;

export const setGlobalConfig = (config: Partial<Config> = {}) => {
  globalConfig = { ...globalConfig, ...config };
};

export const getGlobalConfig = () => globalConfig;
