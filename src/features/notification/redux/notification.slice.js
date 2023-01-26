import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  message: "",
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.visible = true;
      state.message = action.payload;
    },
    hideNotification: (state, action) => {
      state.visible = false;
    },
  },
});

export const { addNotification, hideNotification } = notificationsSlice.actions;

export default notificationsSlice.reducer;
