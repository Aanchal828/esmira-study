import { Vnode } from "mithril";
import { TranslatableRootInterface } from "../observable/interfaces/TranslatableRootInterface";
export declare class ChangeLanguageList {
    readonly promise: Promise<void>;
    private readonly langCodeNames;
    private readonly getTranslationRoot;
    constructor(getTranslationRoot: () => TranslatableRootInterface);
    private addLang;
    private removeLang;
    getView(): Vnode<any, any>;
}
