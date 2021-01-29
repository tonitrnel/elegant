import React, { FC } from 'react';
import Layout from 'components/Layout';

import './styles/NotFound.less';
import dayjs from 'dayjs';

const MomentsName = [
  '子',
  '丑',
  '寅',
  '卯',
  '辰',
  '巳',
  '午',
  '未',
  '申',
  '酉',
  '戌',
  '亥',
];
const MomentsDesc = [
  '夜半',
  '荒鸡',
  '平旦',
  '破晓',
  '早食',
  '隅中',
  '日正',
  '日昳',
  '夕食',
  '日沉',
  '黄昏',
  '定昏',
];

export const toCC = (hour: number) => {
  const index = Math.floor((Number(hour) + 1) / 2);
  return {
    name: MomentsName[index >= MomentsName.length ? 0 : index],
    desc: MomentsDesc[index >= MomentsDesc.length ? 0 : index],
  };
};

const NotFound: FC<{}> = () => {
  const now = new Date();
  const cc = toCC(now.getHours());
  return (
    <Layout title="找不到页面">
      <h1>404 Not Found.</h1>
      <p>页面已被遗忘.</p>
      <p style={{ fontSize: '12px' }}>
        {cc.name} · {cc.desc}
      </p>
      <p style={{ fontSize: '12px' }}>
        {dayjs(now).format('YYYY.MM.DD HH.mm')}{' '}
      </p>
    </Layout>
  );
};
export default NotFound;
