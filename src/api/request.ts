import { delay } from '../utils';
import { MOCK_FIST_OPTIONS, MOCK_SECOND_OPTIONS } from './mock';
import { MockFistOptions } from './mock/firstOptions';
import { MockSecondOption } from './mock/secondOptions';
import { Payload } from './options';

type Path = '/first' | '/second';
export type Request = (path: Path, data?: Payload) => Promise<MockSecondOption[] | MockFistOptions[]>;


export const request: Request = async (
  path,
  data
) => {
  await delay(window.appSettings.requestDelay);
  const chanceToSuccess = Math.random();
  if (
    path === '/first' &&
    chanceToSuccess > window.appSettings.requestChanceToSuccess

  ) {
    return Promise.resolve(MOCK_FIST_OPTIONS);
  }
  if (path === '/second' && data?.id) {
    return Promise.resolve(MOCK_SECOND_OPTIONS[data.id]);
  }
    return Promise.reject('Something went wrong...');
};