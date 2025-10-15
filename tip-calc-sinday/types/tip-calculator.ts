export interface InputProps {
  header: string;
  placeholder?: string;
  icon: string;
  value: string;
  allowFloatingNum: boolean;
  allowZero: boolean;
  onChange: (value: string) => void;
  className?: string;
  error?: string;
  min?: number;
  max?: number;
  step?: number;
}

export interface TipButtonProps {
  percentage: number;
  isSelected: boolean;
  onTipSelect: (percentage: number) => void;
  className?: string;
}

export interface TipInputProps {
  customTip: string;
  onCustomTipChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  isSelected?: boolean;
}

export interface TipSelectionProps {
  selectedTip: number | null;
  onTipSelect: (tip: number | null) => void;
  customTip: string;
  onCustomTipChange: (value: string) => void;
  className?: string;
}

export interface ResultDisplayProps {
  tipAmount: string;
  totalAmount: string;
  onReset: () => void;
  isResetDisabled: boolean;
  className?: string;
}

export interface CalculatorState {
  billAmount: string;
  tipPercentage: number | null;
  customTip: string;
  numberOfPeople: string;
}

export interface CalculationResult {
  tipPerPerson: number;
  totalPerPerson: number;
  isValid: boolean;
}

export interface ValidationRules {
  min?: number;
  max?: number;
  allowZero: boolean;
  allowNegative: boolean;
  allowDecimal: boolean;
}

export const tipOptions = [5, 10, 15, 25, 50] as const;
export type TipOption = typeof tipOptions[number];

export interface FormErrors {
  billAmount?: string;
  numberOfPeople?: string;
  customTip?: string;
}

export interface CalculatorProps {
  initialState?: Partial<CalculatorState>;
  onCalculationChange?: (result: CalculationResult) => void;
  className?: string;
}