type DynamicClassName = {
  [className: string]: boolean
}

type ClassName = (DynamicClassName | string | undefined)[]

export default function classname(...arg: ClassName): string {
  const list: string[] = []
  for (let item of arg) {
    if (typeof item === 'string') {
      !list.includes(item) && list.push(item)
    }
    if (typeof item === 'object') {
      for (let [field, value] of Object.entries(item)) {
        value && !list.includes(field) && list.push(field)
      }
    }
  }
  return list.join(' ')
}
