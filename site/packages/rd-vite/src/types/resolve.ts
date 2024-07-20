import { PluginContext } from 'rollup';

export type ResolveFunction = PluginContext['resolve'];

export type ResolverRef = { current?: ResolveFunction };
