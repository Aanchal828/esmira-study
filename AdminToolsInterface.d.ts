import { AdminToolsInterface } from "./AdminToolsInterface";
import { LoginDataInterface } from "./LoginDataInterface";
import { AccountPermissions } from "./AccountPermissions";
import "../../css/styleAdmin.css";
import { ServerSettingsLoader } from "../loader/ServerSettingsLoader";
import { AccountsLoader } from "../loader/AccountsLoader";
import { MessagesLoader } from "../loader/MessagesLoader";
import { MerlinLogsLoader } from "../loader/MerlinLogsLoader";
import { BookmarkLoader } from "../loader/BookmarkLoader";
/**
 * See description of {@link Admin}
 */
export declare class AdminTools implements AdminToolsInterface {
    readonly settingsLoader: ServerSettingsLoader;
    readonly accountsLoader: AccountsLoader;
    readonly messagesLoader: MessagesLoader;
    readonly merlinLogsLoader: MerlinLogsLoader;
    readonly bookmarksLoader: BookmarkLoader;
    hasErrors: boolean;
    readonly isAdmin: boolean;
    readonly canCreate: boolean;
    readonly canIssueFallbackTokens: boolean;
    readonly permissions: AccountPermissions;
    accountName: string;
    readonly freeDiskSpace: number;
    readonly totalDiskSpace: number;
    constructor(data: LoginDataInterface);
    hasPermission(name: keyof AccountPermissions, studyId: number): boolean;
}
