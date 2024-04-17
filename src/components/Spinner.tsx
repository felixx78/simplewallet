function Spinner({ size = "sm" }: { size?: "sm" | "lg" }) {
  return (
    <div
      className={`${size === "sm" ? "h-8 w-8" : "h-16 w-16"} inline-block animate-spin rounded-full border-copy-light border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}
export default Spinner;
