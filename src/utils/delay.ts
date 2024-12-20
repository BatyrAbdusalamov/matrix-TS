export type Delay<T> = (t:T) => Promise<T>

export const delay: Delay<number> = (t) => new Promise((res) => setTimeout(res, t));
