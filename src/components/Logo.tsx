function Logo({
  center,
  size = "lg",
}: {
  center?: boolean;
  size?: "sm" | "lg";
}) {
  return (
    <div
      className={`flex gap-4 items-center ${center ? "justify-center" : ""}`}
    >
      <img
        width={size === "lg" ? 50 : 30}
        height={size === "lg" ? 30 : 10}
        src="/icon.svg"
        alt=""
      />
      <p className={`${size === "lg" ? "text-xl" : ""} font-medium`}>
        simplewallet
      </p>
    </div>
  );
}
export default Logo;
