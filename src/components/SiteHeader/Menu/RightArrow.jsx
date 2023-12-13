function RightArrow({ theme }) {
  return (
    <svg
      width="26"
      height="18"
      viewBox="0 0 31 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="11.0332"
        x2="28.3696"
        y2="11.0332"
        stroke={theme === "dark" ? "#fff" : "#000"}
        strokeWidth="2"
      />
      <path
        d="M19.228 1L28.9998 10.7717L19.228 20.5435"
        stroke={theme === "dark" ? "#fff" : "#000"}
        strokeWidth="2"
      />
    </svg>
  );
}

export default RightArrow;
