import React from 'react'
import moment from 'moment'
import Container from '@/component/container'

import classes from './index.styl'

const all_name = [
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
  '亥'
]
const all_desc = [
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
  '定昏'
]

export function toOldName(hour: number | string) {
  const index = Math.floor((Number(hour) + 1) / 2)
  return {
    name: all_name[index >= all_name.length ? 0 : index],
    desc: all_desc[index >= all_desc.length ? 0 : index]
  }
}

const now = moment()

export default () => (
  <Container className={classes.error404} title={'找不到页面'}>
    <h1>404 Not Found.</h1>
    <p>页面已被少女遗忘.</p>
    <p>
      Date: {now.format('DD[日] HH:mm:ss')}{' '}
      {toOldName(now.format('HH')).desc}.
    </p>
  </Container>
)
