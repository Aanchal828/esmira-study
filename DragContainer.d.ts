import { Vnode } from "mithril";
import { Study } from "../data/study/Study";
import { BaseObservable } from "../observable/BaseObservable";
export declare function RegexTextInput(label: string, observable: BaseObservable<string>, regex: RegExp, warningMessage: string, labelCssClasses?: string, inputCssClasses?: string, description?: string, useLanguageChooser?: boolean, study?: Study | null, disabled?: boolean): Vnode<any, any>;
