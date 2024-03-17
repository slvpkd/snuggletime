export const Heading = (props: {value: string}) => {
  return (
    <h2 className="mb-4 text-2xl font-bold text-gray-800 md:mb-8 lg:text-6xl xl:mb-12">
      {props.value}
    </h2>
  );
};

export default Heading;
