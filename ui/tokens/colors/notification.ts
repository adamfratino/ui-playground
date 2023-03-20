import colors from "./colors";

const notification = {
  alert: colors.reds.dark,
  warning: colors.yellows.base,
  success: colors.greens.light,
} as const;

export default notification;
