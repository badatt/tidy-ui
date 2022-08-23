/**
 * Action map
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        /**
         * Type of the action
         */
        type: Key;
      }
    : {
        /**
         * Payload to the action
         */
        payload: M[Key];
        /**
         * Type of the action
         */
        type: Key;
      };
};
