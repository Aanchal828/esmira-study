import m from "mithril";
import { LoadedStatistics } from "../loader/csv/CsvLoaderCollectionFromCharts";
import { ChartData } from "../data/study/ChartData";
import { ObservablePromise } from "../observable/ObservablePromise";
interface ChartComponentOptions {
    promise: ObservablePromise<LoadedStatistics>;
    chart: ChartData;
    className?: string;
    noSort: boolean;
}
export declare function ChartView(chart: ChartData, promise: ObservablePromise<LoadedStatistics>, noSort?: boolean): m.Vnode<ChartComponentOptions, unknown>;
export {};
