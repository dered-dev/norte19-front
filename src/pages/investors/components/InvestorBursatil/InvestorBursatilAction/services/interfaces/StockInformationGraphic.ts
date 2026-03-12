export interface YearlyData {
    period: string;
    startOfPeriod: string;
    values: string[];
}

export interface DataByYear {
    [year: string]: YearlyData; 
}
