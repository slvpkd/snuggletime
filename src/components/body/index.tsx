export const Body = (props: { value: string }) => {
  return (
    <div className="flex items-start justify-between gap-2 sm:items-center mb-8">
      <p className="max-w-screen-lg text-sm text-gray-500 lg:text-base ">
        {props.value}
      </p>
    </div>
  );
};

export default Body;
