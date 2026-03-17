import { Vnode } from "mithril";
import { ObservablePrimitive } from "../observable/ObservablePrimitive";
import { BaseObservable } from "../observable/BaseObservable";
import { ArrayInterface } from "../observable/interfaces/ArrayInterface";
export interface TabContent {
    title: string | Vnode<any, any>;
    draggableList?: ArrayInterface<any, BaseObservable<any>>;
    highlight?: boolean;
    view: () => Vnode<any, any>;
}
export declare function TabBar(selectedIndex: ObservablePrimitive<number>, tabs: (TabContent | undefined | false)[], smallBar?: boolean, addBtnCallback?: (e: MouseEvent) => void): Vnode<any, any>;
