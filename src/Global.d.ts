export type Light = "light"
export type Dark = "dark"
export type Theme = Light | Dark

export interface AppSettings {
    theme: Theme,
    requestDelay: number,
    requestChanceToSuccess: number,
  }

export declare global {
    interface Window { appSettings: AppSettings; }
}