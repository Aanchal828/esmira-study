import { Vnode } from "mithril";
interface DropdownOptions {
    dontCenter?: boolean;
    fullScreen?: boolean;
    connectedDropdowns?: string[];
}
export declare function openDropdown(id: string, openerView: Element, menuContent: (close: () => void) => Vnode<any, any>, options?: DropdownOptions): void;
export declare function DropdownMenu(id: string, clickElement: Vnode<any, any>, menuContent: (close: () => void) => Vnode<any, any>, options?: DropdownOptions): Vnode<any, any>;
interface NativeDropdownOptions extends DropdownOptions {
    eventName?: string;
}
export declare function createNativeDropdown(id: string, clickElement: HTMLElement, menuContent: (close: () => void) => HTMLElement, options?: NativeDropdownOptions): void;
export declare function closeDropdown(id: string): void;
export {};
