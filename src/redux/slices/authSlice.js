import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// Retrieve user info and token from loacalStorage if available

const userFromStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo")) : null;

// Check for an existin gguest idin the local storage
const initialGuestId = localStorage.getItem("guestId") || `guest_${new Date().getTime()}`;
localStorage.setItem("guestId", initialGuestId);

// Initial state
const initialState= {
    user: userFromStorage,
    guestId: initialGuestId,
    loading: false,
    error: null,
};

// Async thunk for user Login
export const loginUser = createAsyncThunk("auth/loginUser", async(userData, {rejectWithValue}) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, userData);
        localStorage.setItem("userInfo", JSON.stringify(response.data.user));
        localStorage.setItem("userToken", response.data.token);
        
        return response.data.user; //Return the user object from the response
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: error.message });
        
    }
})

// Async thunk for user Registration
export const registerUser = createAsyncThunk("auth/registerUser", async(userData, {rejectWithValue}) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/register`, userData);
        localStorage.setItem("userInfo", JSON.stringify(response.data.user));
        localStorage.setItem("userToken", response.data.token);
        
        return response.data.user; //Return the user object from the response
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: error.message });
        
    }
});

// Slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) =>{
            state.user = null;
            state.guestId = `guest_${new Date().getTime()}`;  //Reset guest id on logout
            localStorage.removeItem("userInfo");
            localStorage.removeItem("userToken");
            localStorage.setItem("guestId", state.guestId); // Set new guest Id in local storage

        },
        generateNewGuestId: (state) =>{
            state.guestId = `guest_${new Date().getTime()}`;
            localStorage.setItem("guestId", state.guestId);
        }
    },
    extraReducers : (builder) =>{
        builder
        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;

        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
            
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || "Login failed";
            
        })


        .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;

        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
            
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || "Registration failed";
            
        })
    }
}) 

export const {logout, generateNewGuestId} = authSlice.actions;
export default authSlice.reducer;
