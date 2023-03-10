Date.prototype.getWeek = function () {
  const date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(
    date.getDate() +
      3 -
      ((date.getDay() + 6) % 7)
  );
  const yearStart = new Date(
    date.getFullYear(),
    0,
    1
  );
  const timeDiff =
    date.getTime() - yearStart.getTime();
  const diffDays =
    timeDiff / (1000 * 3600 * 24);
  return Math.ceil((diffDays + 1) / 7);
};

export {};
