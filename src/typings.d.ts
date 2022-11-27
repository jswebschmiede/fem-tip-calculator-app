export interface LayoutProps {
  children: React.ReactNode;
}

export interface BillProps {
  onBillChange: Function;
  onPeopleChange: Function;
  onTipChange:
    | ((value: number) => void)
    | (React.FormEventHandler<HTMLDivElement> & ((value: number) => void))
    | undefined;
  onCustomTipChange: Function;
  bill: number;
  people: number;
  selectedTip: number;
  customTip: number;
}

export interface Tip {
  title: string;
  value: number;
}
