import { useMemo } from "react";

export const useEMICalculation = ({ principal, annualRate, years }) => {
  return useMemo(() => {
    const P = principal;
    const r = annualRate / 100 / 12;
    const N = years * 12;
    if (!P || !r || !N) return { emi: 0, total: 0, interest: 0 };
    const emi = (P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1);
    const total = emi * N;
    const interest = total - P;
    return { emi, total, interest };
  }, [principal, annualRate, years]);
};
