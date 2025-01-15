type MOCK_FIST_OPTIONS_NAME = 'A' | 'B' | 'C'

type MOCK_FIST_OPTIONS_VALUE = 'a' | 'b' | 'c'

export interface MockFistOptions {
  id: number,
  name: MOCK_FIST_OPTIONS_NAME,
  value: MOCK_FIST_OPTIONS_VALUE
}

export const MOCK_FIST_OPTIONS: MockFistOptions[] = [
  { id: 1, name: 'A', value: 'a' },
  { id: 2, name: 'B', value: 'b' },
  { id: 3, name: 'C', value: 'c' },
];
