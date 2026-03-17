import { Vnode } from "mithril";
export type PossibleDevices = "Android" | "iOS" | "Web";
export declare function NotCompatibleIcon(...devices: PossibleDevices[]): Vnode<any, any>;
