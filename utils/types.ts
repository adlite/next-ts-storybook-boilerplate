/**
 * Removes 'optional' attributes from a type's properties
 */
export type MakeFieldsRequired<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

/**
 * Add 'optional' attributes from a type's properties
 */
export type MakeFieldsOptional<Type> = {
  [Property in keyof Type]+?: Type[Property];
};
