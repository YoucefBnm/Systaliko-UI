import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { attachFile } from './attach-file';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFile,
  },
});
