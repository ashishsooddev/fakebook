export function getToday() {
  const now = new Date();
  return now.toLocaleDateString();
}