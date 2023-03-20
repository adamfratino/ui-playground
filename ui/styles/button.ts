const button = {
  appearance: "none",
  borderRadius: 0,
  cursor: "pointer",
  ":disabled": {
    cursor: "not-allowed",
  },
} as const;

export default button;
