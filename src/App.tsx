import { useEffect, useReducer } from "react";
import BillForm from "./components/BillForm";
import inputReducer, { initialState } from "./components/Reducer";
import Result from "./components/Result";
import Layout from "./components/Ui/Layout";

const reducer = inputReducer;

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleBillChange = (data: number) => {
    dispatch({ type: "SET_BILL_INPUT", payload: data });
  };
  const handlePeopleChange = (data: number) => {
    dispatch({ type: "SET_PEOPLE_INPUT", payload: data });
  };
  const handleTipChange = (data: number) => {
    dispatch({ type: "SET_TIP_INPUT", payload: data });
  };
  const handleCustomTipChange = (data: number) => {
    dispatch({ type: "SET_CUSTOMTIP_INPUT", payload: data });
  };
  const handleReset = () => {
    dispatch({ type: "RESET_FORM", payload: 0 });
  };

  useEffect(() => {
    dispatch({
      type: "SET_AMOUNT_OUTPUT",
      payload: state,
    });
    dispatch({
      type: "SET_TOTAL_AMOUNT_PERSON_OUTPUT",
      payload: state,
    });
  }, [state.bill, state.selectedTip, state.customTip, state.people]);

  return (
    <Layout>
      <form className="grid gap-11 md:auto-cols-fr md:grid-flow-col">
        <BillForm
          onBillChange={handleBillChange}
          onPeopleChange={handlePeopleChange}
          onTipChange={handleTipChange}
          onCustomTipChange={handleCustomTipChange}
          bill={state.bill}
          people={state.people}
          selectedTip={state.selectedTip}
          customTip={state.customTip}
        />
        <Result
          onResetClick={handleReset}
          amountOutput={state.amountOutput}
          totalAmountPersonOutput={state.totalAmountPersonOutput}
        />
      </form>
    </Layout>
  );
};

export default App;
