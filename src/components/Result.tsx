export interface ResultProps {
  amountOutput: number;
  totalAmountPersonOutput: number;
  onResetClick: VoidFunction;
}

const Result = ({
  amountOutput,
  totalAmountPersonOutput,
  onResetClick,
}: ResultProps) => {
  const handlerReset = (): void => onResetClick();

  return (
    <div className="relative flex h-full flex-col rounded-xl bg-primary-dark py-10 px-8">
      <div className="mb-12 flex items-center justify-between gap-2">
        <div className="font-bold leading-5 text-white">
          Tip Amount <br />
          <small className="text-xs text-primary-grayish">/ person</small>
        </div>
        <div className="text-right">
          <span className="text-4xl font-bold text-primary">
            ${amountOutput.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="mb-12 flex items-center justify-between gap-4">
        <div className="font-bold leading-5 text-white">
          Total <br />
          <small className="text-xs text-primary-grayish">/ person</small>
        </div>
        <div className="text-right">
          <span className="text-4xl font-bold text-primary">
            ${totalAmountPersonOutput.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="flex h-full flex-col">
        <button
          className="mt-auto w-full rounded bg-primary py-2 px-4 font-bold uppercase text-primary-dark transition hover:bg-primary-light"
          type="reset"
          onClick={handlerReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Result;
