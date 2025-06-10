const useLoanCalculation = (principal, rate, tenure) => {
  const monthlyRate = rate / 12 / 100;
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
              (Math.pow(1 + monthlyRate, tenure) - 1);
  return {
    emi: parseFloat(emi.toFixed(2)),
    totalPayment: parseFloat((emi * tenure).toFixed(2)),
    totalInterest: parseFloat(((emi * tenure) - principal).toFixed(2))
  };
};

export default useLoanCalculation;