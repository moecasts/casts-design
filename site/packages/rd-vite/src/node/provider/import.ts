import { Source } from '../../types';
import { ensureSlashStartPath } from '../../utils';

export const getRuntimeImports = (sources: Source[]) => {
  return `
    {
      ${sources
        .map((source: Source) => {
          const id = ensureSlashStartPath(source.path);
          return `
          '${id}': {
            import: import.meta.glob('${id}')['${id}'],
            // raw: import.meta.glob('${id}', { as: 'raw' })['${id}'],
          }
        `;
        })
        .join(',')}
    }
  `;
};
