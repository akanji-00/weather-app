export function formatHour(time) {
  return new Date(time).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

export function formatDay(date) {
  return new Date(date).toLocaleDateString([], {
    weekday: "short",
  });
}
