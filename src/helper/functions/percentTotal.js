/**
 * @param {number} num
 * @param {number} total
 */
export default function percentTotal(num, total, sign = false) {
  // to prevent division by 1
  total = total || 1
  let formula = ((num * 100) / total).toFixed(2)
  let res = sign ? `${formula}%` : formula
  return res
}
