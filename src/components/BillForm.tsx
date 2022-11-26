import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import IconDollar from "../assets/icon-dollar.svg";
import IconPerson from "../assets/icon-person.svg";

interface Tip {
  title: string;
  value: number;
}

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

const BillForm = () => {
  const [selectedTip, setSelectedTip] = useState<Tip>({
    title: "",
    value: 0,
  });
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
          min={1}
          placeholder={"0"}
        />
      </div>

      <RadioGroup
        value={selectedTip}
        onChange={setSelectedTip}
        className="mt-8"
      >
        <RadioGroup.Label className="mb-3 block">Select Tip %</RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3">
          {tipOptions.map((option) => (
            <RadioGroup.Option
              key={option.title}
              value={option.value}
              className={({ active }) =>
                classNames(
                  active
                    ? "bg-primary text-primary-dark"
                    : "bg-primary-dark text-white",
                  "group relative flex cursor-pointer items-center justify-center rounded py-2 px-4 text-xl font-bold  hover:bg-primary focus:outline-none sm:flex-1"
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
                min={1}
                placeholder={"0"}
              />
            </label>
          </div>
        </div>
      </RadioGroup>

      <label className="mt-8 block" htmlFor="people-number">
        <span>Number of People</span>
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
          className="form-input"
          name="peopleNumber"
          id="people-number"
          min={1}
          placeholder={"0"}
        />
      </div>
    </div>
  );
};

export default BillForm;
