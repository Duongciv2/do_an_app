export function passwordValidator(password) {
  if (!password) return "Password không được để trống."
  if (password.length < 5) return 'Password dưới 5 kí tự.'
  return ''
}
