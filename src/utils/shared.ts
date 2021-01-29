/* eslint-disable @typescript-eslint/no-explicit-any */

export const isUndefined = (obj: any): obj is undefined =>
  typeof obj === 'undefined';

export const isObject = <T extends object = object>(obj: any): obj is T =>
  !isNil(obj) && typeof obj === 'object' && !Array.isArray(obj);

export const isPlainObject = (obj: object): obj is object =>
  Reflect.getPrototypeOf(obj) === Object.prototype;

export const validatePath = (path?: string): string =>
  path ? (path.charAt(0) !== '/' ? '/' + path : path) : '';

export const isFunction = (fn: any): fn is (...args: any[]) => any =>
  typeof fn === 'function';

export const isString = (str: any): str is string => typeof str === 'string';

export const isNonEmptyString = (str: string): str is string =>
  isString(str) && str.length > 0;

export const isConstructor = (fn: any): boolean => fn === 'constructor';

export const isNil = (obj: any): obj is null => obj === null;

export const isEmpty = (array: any): boolean => !(array && array.length > 0);

export const isSymbol = (symbol: any): symbol is symbol =>
  typeof symbol === 'symbol';

export const isNumber = (num: any): num is number =>
  typeof num === 'number' && !Number.isNaN(num);

export const isURL = (url: string) =>
  ['http', '//'].some((str) => url.startsWith(str));

export const wrapArray = <T = any>(val: T | T[]) =>
  Array.isArray(val) ? val : [val];

export const padString = (
  v: any,
  len: number,
  fill: string,
  pos: 'end' | 'start' = 'start'
): string => {
  if (!v) return '';
  return v.toString()[pos === 'start' ? 'padStart' : 'padEnd'](len, fill);
};

/**
 * 防抖函数 如果在N秒内多次执行只执行最后一次
 * @param func 目标函数
 * @param delay 延迟
 */
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number | 'system' = 500
) {
  let timeout: number | null = null;
  if (delay === 'system') {
    return (...args: Parameters<T>) => {
      if (timeout !== null) window.cancelAnimationFrame(timeout);
      timeout = window.requestAnimationFrame(() => {
        func(...args);
      });
    };
  }
  return (...args: Parameters<T>) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = window.setTimeout(() => {
      func(...args);
    }, delay);
  };
}
/**
 * 节流函数 如果N秒内多次执行只执行最后一次
 * @param func 目标函数
 * @param delay 延迟
 */
export function throttle<T extends (...args: any[]) => void>(
  func: T,
  delay = 500
) {
  let previous = -delay;
  let defineTimer: null | number = null;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    defineTimer && window.clearTimeout(defineTimer);
    if (now - previous > delay) {
      func(...args);
      previous = now;
    } else {
      defineTimer = window.setTimeout(() => {
        func(...args);
        previous = now;
      }, delay);
    }
  };
}

/**
 * 等待
 * @param ms
 */
export const wait = (ms = 0) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * 克隆对象或数组
 * @param target
 */
export function clone<T>(target: T): T {
  if (Array.isArray(target)) {
    return target.map((v) => {
      return clone(v);
    }) as any;
  }
  if (typeof target === 'object' && target !== null) {
    const val = {} as T;
    for (const [k, v] of Object.entries(target)) {
      if (k === '__typename') continue;
      val[k] = clone(v);
    }
    return val;
  }
  return target;
}

/**
 * 按路径获取对象或数组上的属性
 * @param val
 * @param path
 * @param struct 严格模式，启用后如果路径中断将报错
 */
export const get = <T = any>(
  val: any,
  path: string | string[],
  struct = true
): T => {
  const keys = Array.isArray(path) ? [...path] : path.split('.');
  let count = 0;
  const loops = (obj: any, key: string | null): T => {
    if (!val) {
      if (count !== keys.length - 1 && struct)
        throw new Error(
          `An unreachable error occurred while fetching data, path: ${keys
            .slice(0, count + 1)
            .join('.')}`
        );
      return val;
    }
    count += 1;
    if (!key) return val;
    return loops(val[key], keys[count]);
  };
  return loops(val, keys[count]);
};
/**
 * 从对象中排除某些属性
 * @param obj
 * @param keys
 */
export const omit = <
  T extends Record<string, any>,
  K extends keyof T = keyof T
>(
  obj: T,
  keys: K[]
): Omit<T, K> => {
  return (Object.keys(obj) as K[])
    .filter((v) => !keys.includes(v))
    .reduce((a, b) => {
      a[b] = obj[b];
      return a;
    }, {} as T);
};
/**
 * 从对象中选择某些属性
 * @param obj
 * @param keys
 */
export const pick = <
  T extends Record<string, any>,
  K extends keyof T = keyof T
>(
  obj: T,
  keys: K[]
): Pick<T, K> => {
  return keys.reduce((a, b) => {
    a[b] = obj[b];
    return a;
  }, {} as T);
};
/**
 * 按className查找节点
 * @param node 入口节点
 * @param className
 * @param topmostElement 最顶层节点
 */
export const findHTMLNode = <T extends HTMLElement = HTMLElement>(
  node: HTMLElement | null,
  className: string,
  topmostElement = document.documentElement
): T | null => {
  if (!node) return null;
  if (node.classList.contains(className)) return node as T;
  let parent = node.parentElement;
  while (true) {
    if (!parent || parent === topmostElement) return null;
    if (parent.classList.contains(className)) return parent as T;
    parent = parent.parentElement;
  }
};
