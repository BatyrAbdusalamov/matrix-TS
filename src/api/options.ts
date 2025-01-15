import { request } from './request';


export interface Payload {
    id: number | null;
}

export const getFirstOptions = async () => request('/first');
export const getSecondOptions = async (payload: Payload) => request('/second', payload);
