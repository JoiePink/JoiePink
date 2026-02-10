import dayjs from 'dayjs'

/**
 * 日期格式化成可读的短字符串
 * @param d 
 * @param onlyDate 
 * @returns 
 */
export function formatDate(d: string | Date, onlyDate = true) {
  const date = dayjs(d)
  if (onlyDate || date.year() === dayjs().year())
    return date.format('MMM D')
  return date.format('MMM D, YYYY')
}
