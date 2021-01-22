import React from 'react';
import { ImmerProvider } from './components/ImmerProvider';

export default (props: Record<'element', any>) => {
  return <ImmerProvider>{props.element}</ImmerProvider>;
};
