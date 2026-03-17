import { PrimitiveType } from "../observable/types/PrimitiveType";
import { BaseObservable } from "../observable/BaseObservable";
export interface Transformer {
    toAttribute(value: PrimitiveType): PrimitiveType;
    toValue(value: string): PrimitiveType;
}
export declare class ConstrainedNumberTransformer implements Transformer {
    private readonly min?;
    private readonly max?;
    private readonly allowEmpty;
    constructor(min?: number, max?: number, allowEmpty?: boolean);
    toAttribute(value: PrimitiveType): PrimitiveType;
    toValue(value: string): PrimitiveType;
}
export declare class OnBeforeChangeTransformer<T extends PrimitiveType> implements Transformer {
    private readonly onBeforeChange;
    private readonly obs;
    constructor(obs: BaseObservable<T>, onBeforeChange: (before: T, after: T) => T);
    toAttribute(value: T): T;
    toValue(value: string): T;
}
export declare const BooleanTransformer: Transformer;
export declare const DateTransformer: Transformer;
export declare const TimeTransformer: Transformer;
/**
 * Binds the value of a form element (e.g. input, select, ...) to an observable and automatically updates the observable when the value changes.
 *  * Usage example:
 * ```
 * const value = new ObservablePrimitive("value", null, "test");
 * <input type="text" {...BindObservable(value)}/>
 * ```
 * @see {@link BindValue}
 *
 * @param obs - The observable to bind to
 * @param transformer - An optional transformer to assure that the value adheres to a certain format (e.g. number, date, ...)
 * @param attr - The attribute of the form element to bind to (e.g. value, checked, ...). Usually the correct attribute can be inferred from the data type of the observable.
 * @param event - Which event to listen to. Uses `onchange` by default.
 * @returns A Record with the attribute and event handler which is meant to be passed via spread operator (`...`) to the element attributes.
 */
export declare function BindObservable(obs: BaseObservable<PrimitiveType>, transformer?: Transformer, attr?: keyof HTMLInputElement, event?: keyof HTMLInputElement): Record<string, any>;
/**
 * Binds a value to an input element and calls a provided setter when data changes.
 * Usage example:
 * ```
 * const value = "changeMe";
 * <input type="text" {...BindValue(value, (newValue) => value = newValue)}/>
 * ```
 *
 * @param attrValue - The initial value to bind to the input element.
 * @param set - A callback function that is expected to update the state with the new value.
 * @param transformer - An optional transformer to assure that the value adheres to a certain format (e.g. number, date, ...)
 * @param attr - The attribute of the form element to bind to (e.g. value, checked, ...). Usually the correct attribute can be inferred from the data type of the observable.
 * @param event - Which event to listen to. Uses `onchange` by default.
 * @returns A Record with the attribute and event handler which is meant to be passed via spread operator (`...`) to the element attributes.
 */
export declare function BindValue<T extends PrimitiveType>(attrValue: T, set: (value: T) => void, transformer?: Transformer, attr?: keyof HTMLInputElement, event?: keyof HTMLInputElement): {
    [x: string]: PrimitiveType | ((e: InputEvent) => void);
};
