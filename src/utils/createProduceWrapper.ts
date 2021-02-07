import { produce } from 'immer';
import { Dispatch, SetStateAction } from 'react';
export const createProduceWrapper = <
  S extends any,
  H extends Dispatch<SetStateAction<S>>,
  P extends (draft: any) => void = (draft: S) => void
>([state, setStateAction]: [S, H]): [S, (recipe: P) => void] => {
  return [
    state,
    (recipe: P) => setStateAction((prevState) => produce(prevState, recipe)),
  ];
};
