import React from "react";

const TippOutput = () => {
  return (
    <div className="relative flex h-full flex-col rounded-xl bg-primary-dark py-10 px-8">
      <div className="mb-12 flex items-center justify-between gap-2">
        <div className="font-bold leading-5 text-white">
          Tip Amount <br />
          <small className="text-xs text-primary-grayish">/ person</small>
        </div>
        <div className="text-right">
          <span className="text-4xl font-bold text-primary">${4.27}</span>
        </div>
      </div>

      <div className="mb-12 flex items-center justify-between gap-4">
        <div className="font-bold leading-5 text-white">
          Total <br />
          <small className="text-xs text-primary-grayish">/ person</small>
        </div>
        <div className="text-right">
          <span className="text-4xl font-bold text-primary">${4.27}</span>
        </div>
      </div>

      <div className="flex h-full flex-col">
        <button
          className="mt-auto w-full rounded bg-primary py-2 px-4 font-bold uppercase text-primary-dark"
          type="reset"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TippOutput;
