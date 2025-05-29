import path from "path";

export enum Styles {
  Default = "default",
  ShadcnDefault = "shadcn-default",
  ShadcnNewYork = "shadcn-new-york",
}
export const REGISTRY_DIR_NAME = "registry";
export const AUTO_REGISTRY_DIR_NAME = "__registry__";
export const REGISTRY_JSON_NAME = "registry.json";
export const REGISTRY_JSON_DIR = path.join(process.cwd(), "public", "r");
export const REGISTRY_DIR = path.join(process.cwd(), REGISTRY_DIR_NAME);
export const AUTO_REGISTRY_DIR = path.join(
  process.cwd(),
  AUTO_REGISTRY_DIR_NAME
);
