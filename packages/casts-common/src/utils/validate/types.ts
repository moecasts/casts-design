// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Value = any;

export type CustomValidator = (value: Value, extraValues?: Value[]) => boolean;
