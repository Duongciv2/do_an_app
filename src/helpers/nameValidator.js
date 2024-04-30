export function nameValidator(name) {
  if (!name || name.length === 0) return 'Name không được để trống';
  if (name.length < 2) return 'Name phải có ít nhất 2 ký tự';
  return '';
}