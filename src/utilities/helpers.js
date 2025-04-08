export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Добавляем для 24-часового формата
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

export function datePlusWaitTime(estimateDate, timeWait) {
  if (!timeWait) {
    timeWait = 10;
  }

  const date = new Date(estimateDate);

  date.setTime(date.getTime() + timeWait * 60 * 1000);
  const orderReady = formatDate(date.toISOString());
  return orderReady;
}
