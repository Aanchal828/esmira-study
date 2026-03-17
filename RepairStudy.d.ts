import { SignalTime } from "../data/study/SignalTime";
import { ActionTrigger } from "../data/study/ActionTrigger";
import { Schedule } from "../data/study/Schedule";
import { Questionnaire } from "../data/study/Questionnaire";
import "../number.extensions";
declare class Alarm {
    readonly questionnaire: Questionnaire;
    readonly schedule: Schedule;
    readonly signalTime: SignalTime;
    readonly actionTrigger: ActionTrigger;
    readonly indexNum: number;
    readonly timestamp: number;
    constructor(questionnaire: Questionnaire, schedule: Schedule, signalTime: SignalTime, actionTrigger: ActionTrigger, timestamp: number, indexNum: number);
    canBeRescheduled(): boolean;
}
/**
 * This class is a copy of the Kotlin code in sharedCode.Scheduler
 * (only the needed methods are included)
 */
export declare class Scheduler {
    readonly alarms: Alarm[];
    private readonly lastAlarmsPerSignalTime;
    scheduleAheadJavascript(joined: number): void;
    private createAlarm;
    private getRandom;
    private rescheduleFromAlarm;
    private rescheduleFromSignalTime;
    private calculateRandomPeriod;
    scheduleSignalTime(joined: number, questionnaire: Questionnaire, schedule: Schedule, signalTime: SignalTime, actionTrigger: ActionTrigger, anchorTimestamp: number, manualDelayDays?: number): void;
    private considerHourOptions;
    private considerDayOptions;
    private considerDayOptionsLogic;
}
export {};
