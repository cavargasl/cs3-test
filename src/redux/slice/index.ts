
import { combineReducers } from '@reduxjs/toolkit';

import { default as todos } from './todos';

const rootReducer = combineReducers({
  todos,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;