import { Vnode } from "mithril";
import { PossibleDevices } from "./NotCompatibleIcon";
type DashTemplateOptions = {
    title: string;
    icon?: Vnode<any, any>;
    noCompatibilityIcon?: PossibleDevices[];
    msg?: string | Vnode<any, any>;
    innerLinkTitle?: string;
    innerLinkHref?: string;
};
type DashContainerOptions = "stretched" | "cramped" | "vertical" | "horizontal" | null;
export type DashViewOptions = {
    disabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    href?: string;
    downloadHref?: string;
    showAsClickable?: boolean;
    floating?: boolean;
    floatingRight?: boolean;
    highlight?: boolean;
    small?: boolean;
    template?: DashTemplateOptions;
    content?: Vnode<any, any>;
};
export declare function DashElement(size: DashContainerOptions, ...options: (DashViewOptions | false)[]): Vnode<any, any>;
export {};
