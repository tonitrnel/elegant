import React, {
  createContext,
  FC,
  useState,
  useCallback,
  useEffect,
  PropsWithChildren,
} from 'react';
import { Draft, produce } from 'immer';
import { initial_state, RootState } from '~/states/root';

export type MutationCallback<T> = (draft: Draft<ImmerContext['state']>) => T;

export type Mutation = <T>(dispatch: MutationCallback<T>) => T | undefined;

export interface ImmerContext {
  readonly state: RootState;
  readonly mutation: Mutation;
}

export const __internal__immer__context = createContext<ImmerContext | void>(
  void 0
);

const DEFAULT_STATE: ImmerContext['state'] = initial_state;

export const ImmerProvider: FC<
  PropsWithChildren<{
    onUpdate?: (
      prevState: void | ImmerContext['state'],
      nextState: ImmerContext['state']
    ) => void;
  }>
> = ({ children, onUpdate }) => {
  const [state, setState] = useState<ImmerContext['state']>(DEFAULT_STATE);
  useEffect(() => {
    onUpdate && onUpdate(DEFAULT_STATE, DEFAULT_STATE);
  }, [onUpdate]);
  const mutation = useCallback<Mutation>(
    (dispatch) => {
      let result = undefined;
      const newImmerState = produce(state, (draft) => {
        result = dispatch(draft);
      });
      if (newImmerState !== state) {
        setState(newImmerState);
        onUpdate && onUpdate(state, newImmerState);
      }
      return result;
    },
    [state, onUpdate]
  );
  return (
    <__internal__immer__context.Provider value={{ state, mutation }}>
      {children}
    </__internal__immer__context.Provider>
  );
};
