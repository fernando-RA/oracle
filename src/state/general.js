import { createReduce,createAction } from '@reduxjs/toolkit'

export const setInitialized = createAction<Boolean>(
  'general/setInitialized'
);
