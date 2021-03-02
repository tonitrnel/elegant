import { produce, Draft } from 'immer';
import { Dispatch, SetStateAction, useCallback } from 'react';
export const createProduceWrapper = <
  S extends any,
  H extends Dispatch<SetStateAction<S>>,
  P extends (draft: Draft<S>) => void = (draft: Draft<S>) => void
>([state, setStateAction]: [S, H]): [S, (recipe: P) => void] => {
  return [
    state,
    useCallback(
      (recipe: P) => setStateAction((prevState) => produce(prevState, recipe)),
      []
    ),
  ];
};
