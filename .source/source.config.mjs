// source.config.ts
import {
  defineDocs,
  defineConfig,
  frontmatterSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
var docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      new: z.boolean().optional(),
      updated: z.boolean().optional(),
      deprecated: z.boolean().optional(),
      soon: z.boolean().optional(),
      custom: z.boolean().optional(),
      url: z.string().optional(),
      author: z.object({
        name: z.string(),
        url: z.string().optional()
      }).optional()
    })
  }
});
var source_config_default = defineConfig({
  mdxOptions: {}
});
export {
  source_config_default as default,
  docs
};
