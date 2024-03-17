const Step = (props: { id: number; label: string; active?: boolean }) => (
  <li className="flex items-center gap-2 bg-white p-2">
    <span
      className={`size-6 rounded-full ${
        props.active ? "bg-blue-600 text-white" : "bg-gray-300"
      } text-center text-[10px]/6 font-bold`}
    >
      {props.id}
    </span>

    <span className="hidden sm:block"> {props.label} </span>
  </li>
);

export default Step;
