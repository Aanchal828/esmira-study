import { AdminToolsInterface } from "./AdminToolsInterface";
import { Site } from "../site/Site";
/**
 * Loaded by {@link Site}
 * {@link isEnabled} will be true if the hash starts with "admin"
 * (or will be constructed as enabled if the startHash starts with "admin" - when using "?admin", see in index.php).
 * Each {@link Section.load()} first calls {@link Admin.init()} before loading, which will - if {@link isEnabled} is true - make sure the user is logged in and {@link AdminTools} is loaded
 */
export declare class Admin {
    private isEnabled;
    private isLoggedInState;
    private tools?;
    private readonly site;
    constructor(isEnabled: boolean, site: Site);
    enableAdmin(): void;
    disableAdmin(): void;
    /**
     *
     * @returns false if a login is needed
     */
    init(): Promise<boolean>;
    /**
     *
     * @returns false if a login is needed
     */
    private processLoginData;
    isLoggedIn(): boolean;
    /**
     *
     * @returns false if a login is needed
     */
    login(accountName: string, password: string, rememberMe: boolean): Promise<boolean>;
    /**
     * returns the AdminTools object.
     * {@link tools} should always exist, when the first section is "admin". It will be loaded by {@link Section.load()} which calls {@link init()}
     */
    getTools(): AdminToolsInterface;
    logout(): Promise<void>;
}
