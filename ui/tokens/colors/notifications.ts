import reds from "./reds";
import yellows from "./yellows";
import greens from "./greens";

const notifications = {
  alert: reds.dark,
  warning: yellows.base,
  success: greens.light,
} as const;

export default notifications;
