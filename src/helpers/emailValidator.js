export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Chưa nhập email"
  if (!re.test(email)) return 'Vui lòng nhập email hợp lệ.'
  return ''
}
