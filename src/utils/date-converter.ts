// yyyy-mm-dd => yyyy
export function convertStrapiDate(date: string): string {
  return date.split('-')[0];
}

export function convertMariaDBDate(date: string): number {
  const d = new Date(date);
  const year = d.getFullYear();
  return year;
}
