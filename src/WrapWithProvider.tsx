import React from 'react';
import { ImmerProvider } from 'components/ImmerProvider';
import { reportWebVitals } from 'utils/reportWebVitals';

export default (props: Record<'element', any>) => {
  return <ImmerProvider>{props.element}</ImmerProvider>;
};
reportWebVitals(console.log).catch(() => {});
