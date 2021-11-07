import { useContext } from 'react';
import {
  ImmerContext,
  __internal__immer__context,
} from '~/components/ImmerProvider';
/**
 * useImmer hook
 */
export const useImmer = (): [
  ImmerContext['state'],
  ImmerContext['mutation']
] => {
  const context = useContext(__internal__immer__context);
  if (context === undefined) {
    throw new Error('This hook can only be invoked under <ImmerProvider/>');
  }
  return [context.state, context.mutation];
};
