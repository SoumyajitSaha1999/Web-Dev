import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Actions
export const fetchTodos = createAsyncThunk("fetchTodo", async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return response.json();
})
   

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },

  extraReducers: (builder) => {

    builder.addCase(fetchTodos.pending, (state, action) => {
        state.isLoading = true;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
    });
  }
});

export default todoSlice.reducer;


// createAsyncThunk is a concept known for middleware. If you have any delay task lkie API call that time we use createAsyncThunk middleware in redux
// createAsyncThunk function create a action and we can dispatch the function