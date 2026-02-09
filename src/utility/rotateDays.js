import React from "react";

export function rotateFromToday(daily) {
  if (!daily || !daily.time) return daily;

  const todayISO = new Date().toISOString().split("T")[0];

  const todayIndex = daily.time.findIndex((date) => date === todayISO);

  // If today isn't found, return original (safety)
  if (todayIndex === -1) return daily;

  return {
    time: [...daily.time.slice(todayIndex), ...daily.time.slice(0, todayIndex)],
    max: [...daily.max.slice(todayIndex), ...daily.max.slice(0, todayIndex)],
    min: [...daily.min.slice(todayIndex), ...daily.min.slice(0, todayIndex)],
  };
}
