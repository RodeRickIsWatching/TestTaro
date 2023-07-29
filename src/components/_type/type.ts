// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
export const tuple = <T extends string[]>(...args: T) => args;

export const tupleNum = <T extends number[]>(...args: T) => args;

/**
 * Extract the type of an element of an array/tuple without performing indexing
 * https://stackoverflow.com/a/59187769
 */
export type ElementOf<T> = T extends Array<infer E> ? E : T extends ReadonlyArray<infer F> ? F : never;

// https://github.com/Microsoft/TypeScript/issues/29729
export type LiteralUnion<T extends U, U = string> = T | (U & Record<never, never>);

// Interface attribute optional to mandatory
export type ResetFactor<T, K extends keyof T> = T & {
  [P in K]-?: T[P];
};

// Delete some key values in the object
export type RemoveKey<T, Keys extends keyof T> = {
  [P in keyof T as P extends Keys ? never : P]: T[P];
};

// https://stackoverflow.com/a/72075415
export type RequiredField<T, K extends keyof T> = T & Required<Pick<T, K>>;
