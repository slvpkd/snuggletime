import { PropsWithChildren, ReactPropTypes } from "react";
import Step from "../step";

const Steps = (props: PropsWithChildren) => (
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="mb-8">
      <h2 className="sr-only">Steps</h2>

      <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
        <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
          {props.children}
        </ol>
      </div>
    </div>
  </div>
);

export default Steps;
