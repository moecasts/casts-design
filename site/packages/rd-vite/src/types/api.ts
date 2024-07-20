export type ApiDeclaration = {
  identifier: string;
  description: string;
  default?: any;
  type: any;
  required: boolean;
};

export type ApiDeclarations = ApiDeclaration[];

export type ApisDeclarations = Record<string, ApiDeclarations>;
