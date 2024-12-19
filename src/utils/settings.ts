import { AppSettings,Theme as ThemeValue } from "../Global";

type LoadSettings = () => void;

type Settings<T> = T extends 'theme'? ThemeValue : number
type SaveSettings = <T extends keyof AppSettings>(key:T, settings:Settings<T>) => void;

export const loadSettings:LoadSettings = () => {
  try {
    const rawSettings: string | null = localStorage.getItem('app-settings');
    if (rawSettings == null) throw new Error();

    window.appSettings = JSON.parse(rawSettings);
  } catch {
    window.appSettings = {
      theme: 'light',
      requestDelay: 1000,
      requestChanceToSuccess: 0.4,
    };
  }
};

export const saveSettings:SaveSettings= (key, settings) => {
  window.appSettings[key] = settings as AppSettings[typeof key];
  localStorage.setItem('app-settings', JSON.stringify(window.appSettings));
};
