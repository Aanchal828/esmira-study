import { Vnode } from "mithril";
export interface SearchBoxEntry {
    key: string;
    view: Vnode<any, any>;
}
export declare function SearchBox(title: string, viewList: SearchBoxEntry[]): Vnode<any, any>;
