import { createSlice } from '@reduxjs/toolkit';

const MODAL_SLICE_NAME = 'MODAL_SLICE';

const initialState = { open: false, name: null };

const modalSlice = createSlice({
  name: MODAL_SLICE_NAME,
  initialState,
  reducers: {
    modalOpenToggle: (state) => {
      state.open = !state.open;
    },
  },
});

export const { modalOpenToggle: modalOpenToggleAction } = modalSlice.actions;

export default modalSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';

// const MODAL_SLICE_NAME = 'MODAL_SLICE';

// const initialState = { open: false, name: null };

// const modalSlice = createSlice({
//   name: MODAL_SLICE_NAME,
//   initialState,
//   reducers: {
//     modalOpenToggle: (state, action) => {
//       state.open = !state.open;
//       state.name = action.payload?.name;
//     },
//   },
// });

// export const { modalOpenToggle: modalOpenToggleAction } = modalSlice.actions;

// export default modalSlice.reducer;
