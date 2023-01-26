import { darken, lighten } from "polished";

const base = `#00AF91`;

const greens = {
  20: darken(0.25, base),
  30: darken(0.2, base),
  40: darken(0.1, base),
  50: base,
  60: lighten(0.1, base),
  70: lighten(0.2, base),
  80: lighten(0.25, base),
};

export default greens;
