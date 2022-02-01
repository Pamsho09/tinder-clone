import {Models} from '@rematch/core';
import {globalState} from './globalState';

export interface RootModel extends Models<RootModel> {
  globalState: typeof globalState;
}
export const models: RootModel = {globalState};
