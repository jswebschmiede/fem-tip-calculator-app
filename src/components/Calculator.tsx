import BillForm from "./BillForm";
import TippOutput from "./TippOutput";

const Calculator = () => {
  return (
    <div className="grid gap-11 md:auto-cols-fr md:grid-flow-col">
      <div className="px-1">
        <BillForm />
      </div>
      <div className="rounded-xl bg-primary-dark p-8">
        <TippOutput />
      </div>
    </div>
  );
};

export default Calculator;
