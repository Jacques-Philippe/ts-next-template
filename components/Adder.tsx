import { add } from "../utils/add";

export const Adder = ({ arg1, arg2 }: { arg1: number; arg2: number }) => {
  const result = add(arg1, arg2);
  return <div>{`The result is ${result}`}</div>;
};
