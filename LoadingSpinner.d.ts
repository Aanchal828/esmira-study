import { Vnode } from "mithril";
export interface SearchTools {
    searchView(key: string, content: Vnode<any, any>): Vnode<any, any> | null;
    updateSearchFromEvent(e: InputEvent): void;
    updateSearch(s: string): void;
}
export declare function SearchWidget(content: (tools: SearchTools) => Vnode<any, any>): Vnode<any, any>;
