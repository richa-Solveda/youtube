

const paths = {
    plus: "M12 5v14M5 12h14",
    upload: "M12 16V3m-5 5 5-5 5 5M4 14v6h16v-6",
    youtube: "M23.498 6.186a2.963 2.963 0 0 0-2.084-2.097C19.577 3.6 12 3.6 12 3.6s-7.577 0-9.414.489A2.963 2.963 0 0 0 .502 6.186 30.4 30.4 0 0 0 0 12a30.4 30.4 0 0 0 .502 5.814 2.963 2.963 0 0 0 2.084 2.097C4.423 20.4 12 20.4 12 20.4s7.577 0 9.414-.489a2.963 2.963 0 0 0 2.084-2.097A30.4 30.4 0 0 0 24 12a30.4 30.4 0 0 0-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z",

}



export function Icon({
  name,
  size = 24,
  ...props
}) {
  if (!paths[name]) return null;

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}