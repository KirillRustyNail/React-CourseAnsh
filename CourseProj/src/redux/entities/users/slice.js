import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from "../../../constants/normalized-mock";

const initialState = {
  ids: normalizedUsers.map(u => u.id),
  entities: normalizedUsers.reduce((acc, u) => {
    acc[u.id] = u;
    return acc;
  }, {}),
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  selectors : {
  selectUsersIds: (state) => state.ids,
  selectUserById: (state, id) => state.entities[id],
}
});

export const { selectUsersIds, selectUserById} = usersSlice.selectors;
