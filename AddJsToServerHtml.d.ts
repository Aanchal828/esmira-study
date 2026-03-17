export declare class RepairStudy {
    private readonly serverVersion;
    private readonly packageVersion;
    constructor(serverVersion: number, packageVersion: string);
    private repairNotice;
    repairStudy(study: Record<string, any>): boolean;
}
