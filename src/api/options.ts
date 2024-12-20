import { MockSecondOption } from './mock/secondOptions'; // TODO
import { request } from './request';
export const getFirstOptions = async () => request('/first');

export interface Payload {
    id: number | null;
}
export const getSecondOptions = async (payload:Payload) => request('/second', payload);
