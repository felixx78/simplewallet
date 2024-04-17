function Spinner({ w = 8, h = 8 }: { w?: number; h?: number }) {
  return (
    <div
      className={`inline-block h-${h} w-${w} animate-spin rounded-full border-copy-light border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}
export default Spinner;
