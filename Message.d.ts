import { DataStructure } from "../DataStructure";
export declare class MessageParticipantInfo extends DataStructure {
    name: import("../../observable/BaseObservable").BaseObservable<string, string>;
    lastMsg: import("../../observable/BaseObservable").BaseObservable<number, number>;
    archived: import("../../observable/BaseObservable").BaseObservable<boolean, boolean>;
    pending: import("../../observable/BaseObservable").BaseObservable<boolean, boolean>;
    unread: import("../../observable/BaseObservable").BaseObservable<boolean, boolean>;
}
