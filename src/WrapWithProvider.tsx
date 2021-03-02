import React from 'react';
import { ImmerProvider } from 'components/ImmerProvider';
import { reportWebVitals } from 'utils/reportWebVitals';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

export default (props: Record<'element', any>) => {
  return <ImmerProvider>{props.element}</ImmerProvider>;
};
// reportWebVitals(console.log).catch(() => {});
