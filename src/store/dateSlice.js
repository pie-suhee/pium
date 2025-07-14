import { createSlice } from '@reduxjs/toolkit';

const now = new Date();
const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const weeks = ['첫', '둘', '셋', "넷", "다섯"];

const dateSlice = createSlice({
    name: 'calendar',
    initialState: {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        date: now.getDate(),
        day: now.getDay(),
        dayOfWeek: days[now.getDay()],
        weekOfMonth: weeks[Math.ceil(now.getDate() / 7)],
    },
    reducers: {
        setDate(state, action) {
            state.year = action.payload.year;
            state.month = action.payload.month;
            state.date = action.payload.date;
            state.day = action.payload.day;
            state.dayOfWeek = action.payload.dayOfWeek;
            state.weekOfMonth = action.payload.weekOfMonth;
        },
    },
});

// export let { setDate } = dateSlice.actions;

export default dateSlice.reducer;