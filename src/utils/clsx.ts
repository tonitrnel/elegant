import { isNumber, isObject, isString } from 'utils/shared';

type Unit = string | number | boolean | undefined | null;
type Acceptable = Unit | Record<string, Unit> | Unit[];

const toString = (mix: Acceptable): string => {
  let str = '';
  if (isString(mix) || isNumber(mix)) {
    str += mix.toString();
    return str;
  }
  if (Array.isArray(mix)) {
    for (const v of mix.map(toString)) {
      if (!v) continue;
      str && (str += ' ');
      str += v;
    }
    return str;
  }
  if (isObject(mix)) {
    for (const [k, v] of Object.entries(mix)) {
      if (!v) continue;
      str && (str += ' ');
      str += k;
    }
  }
  return str;
};

export default function clsx(...args: Acceptable[]): string {
  return args.reduce<string>((prev, it) => prev + toString(it), '');
}
