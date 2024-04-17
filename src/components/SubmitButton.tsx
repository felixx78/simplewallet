import Spinner from "./Spinner";

function SubmitButton({
  children,
  isLoading,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { isLoading?: boolean }) {
  return (
    <button
      type="submit"
      className="flex justify-center items-center gap-4 w-full bg-border rounded-md py-2 disabled:bg-foreground"
      {...props}
    >
      {children}
      {isLoading && <Spinner w={8} h={8} />}
    </button>
  );
}
export default SubmitButton;
