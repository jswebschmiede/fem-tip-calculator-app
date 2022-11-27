import { RadioGroup } from "@headlessui/react";
import { BillProps, Tip } from "../typings";
import IconDollar from "../assets/icon-dollar.svg";
import IconPerson from "../assets/icon-person.svg";

const tipOptions: Tip[] = [
  {
    title: "5%",
    value: 0.05,
  },
  {
    title: "10%",
    value: 0.1,
  },
  {
    title: "15%",
    value: 0.15,
  },
  {
    title: "25%",
    value: 0.25,
  },
  {
    title: "50%",
    value: 0.5,
  },
];

const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};

const BillForm = ({
  onBillChange,
  onPeopleChange,
  onTipChange,
  onCustomTipChange,
  bill,
  people,
  selectedTip,
  customTip,
}: BillProps) => {
  const handleBillInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    onBillChange(parseFloat(event.target.value) || 0);

  const handlePeopleInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    onPeopleChange(parseInt(event.target.value) || 0);

  const handleCustomTipInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    onCustomTipChange(parseInt(event.target.value) || 0);

  return (
    <div className="px-1 font-bold">
      <label className="block" htmlFor="bill">
        <span>Bill</span>
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <img
            width={11}
            height={17}
            src={IconDollar}
            alt=""
            aria-hidden="true"
          />
        </div>
        <input
          type="number"
          className="form-input"
          name="bill"
          id="bill"
          autoComplete="off"
          placeholder="0"
          min={1}
          value={bill}
          onChange={handleBillInput}
        />
      </div>

      <RadioGroup
        value={selectedTip}
        onChange={onTipChange}
        className="mt-8"
        name="tip"
      >
        <RadioGroup.Label className="mb-3 block">Select Tip %</RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3">
          {tipOptions.map((option) => (
            <RadioGroup.Option
              key={option.title}
              value={option.value}
              disabled={customTip > 0 ? true : false}
              className={({ active, checked, disabled }) =>
                classNames(
                  (active && checked) || (!active && checked)
                    ? "bg-primary text-primary-dark"
                    : "bg-primary-dark text-white",
                  disabled
                    ? "cursor-not-allowed bg-opacity-50"
                    : "cursor-pointer hover:bg-primary-light hover:text-primary-dark",
                  "group relative flex items-center justify-center rounded py-2 px-4 text-xl font-bold transition  focus:outline-none sm:flex-1"
                )
              }
            >
              {option.title}
            </RadioGroup.Option>
          ))}

          <div>
            <label htmlFor="custom-tip">
              <span className="sr-only">Custom Tip</span>
              <input
                type="number"
                className="form-input mt-0 border-0 px-4"
                name="customTip"
                id="custom-tip"
                placeholder={"Custom"}
                autoComplete="off"
                value={customTip}
                onChange={handleCustomTipInput}
              />
            </label>
          </div>
        </div>
      </RadioGroup>

      <label className="mt-8 flex justify-between" htmlFor="people-number">
        <span>Number of People</span>
        {people === 0 && <span className="text-orange-600">Cant be Zero</span>}
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <img
            width={11}
            height={17}
            src={IconPerson}
            alt=""
            aria-hidden="true"
          />
        </div>
        <input
          type="number"
          className={`form-input ${
            people === 0 ? "ring-2 ring-orange-600" : ""
          }`}
          name="peopleNumber"
          id="people-number"
          autoComplete="off"
          value={people}
          onChange={handlePeopleInput}
        />
      </div>
    </div>
  );
};

export default BillForm;
