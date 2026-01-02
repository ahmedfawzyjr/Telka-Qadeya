// Utility to convert Western numerals to Arabic numerals
export function toArabicNumerals(value: string | number): string {
  const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return String(value).replace(/[0-9]/g, (digit) => arabicNumerals[parseInt(digit)]);
}

// Format number with Arabic numerals
export function formatArabicNumber(value: string): string {
  // Handle numbers with + suffix
  const hasPlus = value.includes('+');
  const hasM = value.includes('M');
  
  let result = value
    .replace(/[0-9]/g, (digit) => ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'][parseInt(digit)])
    .replace(/,/g, '،'); // Arabic comma
  
  if (hasM) {
    result = result.replace('M', ' مليون');
  }
  
  return result;
}
