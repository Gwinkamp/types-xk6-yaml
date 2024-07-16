declare module "k6/x/yaml" {
  export function parse<T>(text: string): T;
}