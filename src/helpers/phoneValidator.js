export function phoneNumberValidator(phoneNumber) {
    const phoneRegex = /^[0-9]{10}$/; // Regex để kiểm tra xem chuỗi có chứa đúng 10 ký tự số không
  
    if (!phoneNumber || phoneNumber.length === 0) return 'Phone Number không được để trống';
    if (!phoneRegex.test(phoneNumber)) return 'Phone Number phải chứa đúng 10 chữ số';
    return '';
  }