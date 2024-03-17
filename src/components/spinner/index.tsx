export const Spinner = (props: { label?: string }) => (
  <>
    <div className="flex items-center justify-center ">
      <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
    </div>
    <div className="text-center my-4">{props.label ?? "Generating Story"}</div>
  </>
);
