import BillForm from "./BillForm";
import TippOutput from "./TippOutput";

const Calculator = () => {
  return (
    <form className="grid gap-11 md:auto-cols-fr md:grid-flow-col">
      <BillForm />
      <TippOutput />
    </form>
  );
};

export default Calculator;
