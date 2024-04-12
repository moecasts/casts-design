import vitestConfig from '@casts/standard/dist/cjs/vite/vite.config';
import { mergeConfig } from 'vite';

export default mergeConfig({}, vitestConfig);
