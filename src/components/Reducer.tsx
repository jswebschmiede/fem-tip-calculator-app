export const initialState = {
  bill: 0,
  selectedTip: 0,
  customTip: 0,
  people: 1,
  amountOutput: 0,
  totalAmountPersonOutput: 0,
};

const inputReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case "SET_BILL_INPUT":
      return { ...state, bill: payload };
    case "SET_PEOPLE_INPUT":
      return { ...state, people: payload };
    case "SET_TIP_INPUT":
      return { ...state, selectedTip: payload };
    case "SET_CUSTOMTIP_INPUT":
      return { ...state, customTip: payload };
    case "SET_AMOUNT_OUTPUT":
      let totalAmount = 0;
      if (payload.people > 0) {
        if (payload.selectedTip > 0 || payload.customTip > 0) {
          totalAmount =
            payload.customTip > 0
              ? (payload.bill * (payload.customTip / 100)) / payload.people
              : (payload.bill * payload.selectedTip) / payload.people;
          if (payload.customTip > 0) payload.selectedTip = 0;
        }
      }

      return { ...state, amountOutput: totalAmount };
    case "SET_TOTAL_AMOUNT_PERSON_OUTPUT":
      let totalAmountPerson = 0;
      if (payload.people > 0) {
        if (payload.selectedTip > 0 || payload.customTip > 0) {
          totalAmountPerson =
            payload.customTip > 0
              ? payload.bill * (payload.customTip / 100) + payload.bill
              : payload.bill * payload.selectedTip + payload.bill;

          totalAmountPerson = totalAmountPerson / payload.people;
        }
      }

      return { ...state, totalAmountPersonOutput: totalAmountPerson };
    case "RESET_FORM":
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
export default inputReducer;
