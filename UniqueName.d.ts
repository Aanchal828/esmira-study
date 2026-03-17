import { StatisticsCollection } from "../data/statistics/StatisticsCollection";
import { ChartData } from "../data/study/ChartData";
export declare const CHART_COLORS: string[];
export declare function getChartColor(i: number): string;
export declare class ChartJsBox {
    private chartJs?;
    private readonly chart;
    private readonly optionFill;
    private readonly forScatterPlot;
    constructor(parentView: HTMLElement, personalStatistics: StatisticsCollection, publicStatistics: StatisticsCollection, chart: ChartData, noSort?: boolean);
    private getOptionFill;
    private getForScatterPlot;
    private getChartJsType;
    private getDataSetCreator;
    private getChartPlugins;
    private getChartOptions;
}
