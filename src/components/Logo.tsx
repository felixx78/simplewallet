function Logo({ center }: { center?: boolean }) {
  return (
    <div
      className={`flex gap-4 items-center ${center ? "justify-center" : ""}`}
    >
      <img width={50} height={30} src="/icon.svg" alt="" />
      <p className="text-xl font-medium">simplewallet</p>
    </div>
  );
}
export default Logo;
