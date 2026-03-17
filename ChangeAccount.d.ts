import { Vnode } from "mithril";
import { BaseObservable } from "../observable/BaseObservable";
import { ArrayInterface } from "../observable/interfaces/ArrayInterface";
export interface DragTools {
    getDragTarget(index: number, targetList: ArrayType, content?: Vnode<any, any>): Vnode<any, any>;
    getDragStarter(index: number, dragTarget: ArrayType): Vnode<any, any>;
}
type ArrayType = ArrayInterface<any, BaseObservable<any>>;
export declare function DragContainer(content: (container: DragTools) => Vnode<any, any>): Vnode<any, any>;
export {};
