export type MonthlyData = {
  [year: string]: {
    [quarter: string]: {
      productA: number[]; // Array of data for Product A for each month in the quarter
      productB: number[]; // Array of data for Product B for each month in the quarter
      productC: number[]; // Array of data for Product C for each month in the quarter
    };
  };
};

export interface QuarterlyData {
  quarter: string;
  productA: number;
  productB: number;
  productC: number;
}
