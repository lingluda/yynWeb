/**
 * 图表label文字换行处理
 *
 * @param {*} value 类目
 * @param {*} index 索引
 * @param {number} [maxLen=7] 最大长度(默认7)
 *
 * Usage:
 * 1. 使用默认最大长度
 * formatter: echartsHelper.labelFormatter
 *
 * 2. 使用自定义最大长度
 * formatter: (value, index) => echartsHelper.labelFormatter(value, index, 3)
 */
export const labelFormatter = (value, index, maxLen = 7) => {
  let newStr = ''
  const strLen = value.length
  const rowNum = Math.ceil(strLen / maxLen)

  if (strLen > maxLen) {
    for (var p = 0; p < rowNum; p++) {
      let tempStr = ''
      const start = p * maxLen
      const end = start + maxLen
      // 此处特殊处理最后一行的索引值
      if (p == rowNum - 1) {
        // 最后一次不换行
        tempStr = value.substring(start, strLen)
      } else {
        // 每一次拼接字符串并换行
        tempStr = value.substring(start, end) + '\n'
      }
      newStr += tempStr
    }
  } else {
    newStr = value
  }

  return newStr
}
