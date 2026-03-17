import { Vnode } from "mithril";
export declare function ChangeAccount(onFinish: (accountName: string, password: string) => Promise<boolean>, onError: (msg: string) => void, accountName?: string, btnLabel?: string): Vnode<any, any>;
