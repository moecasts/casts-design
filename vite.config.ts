import { mergeConfig } from 'vite';
import vitestConfig from '@casts/standard/dist/cjs/vite/vite.config';

export default mergeConfig({}, vitestConfig);
