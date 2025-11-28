import { createSlice } from '@reduxjs/toolkit';

const getDateInfo = (dateObj) => {
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1; // 1-12
    const date = dateObj.getDate(); // 1-31
    const day = dateObj.getDay(); // 0(일)-6(토)
    
    // YYYY-MM-DD 형식의 키 생성
    const dateKey = `${year}-${String(month).padStart(2, "0")}-${String(date).padStart(2, "0")}`;
    
    // 해당 달의 며칠인지(date)를 기준으로 주차를 대략 계산
    const weekOfMonth = Math.ceil(date / 7);

    return { year, month, date, dayOfWeek: day, dateKey, weekOfMonth };
};

const initialState = getDateInfo(new Date());

const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        // 현재 날짜를 특정 날짜로 변경 (선택 또는 이동 시)
        setDate(state, action) {
            // action.payload는 Date 객체여야 합니다.
            const newDate = new Date(action.payload);
            return getDateInfo(newDate);
        },
        // 주차 이동 로직
        moveWeek(state, action) {
            const currentDate = new Date(state.year, state.month - 1, state.date);
            currentDate.setDate(currentDate.getDate() + action.payload * 7); // payload: 1(다음 주) 또는 -1(이전 주)
            return getDateInfo(currentDate);
        },
        // 월 이동 로직
        moveMonth(state, action) {
            const currentDate = new Date(state.year, state.month - 1, state.date);
            currentDate.setMonth(currentDate.getMonth() + action.payload); // payload: 1(다음 달) 또는 -1(이전 달)
            return getDateInfo(currentDate);
        },
    },
});

export const { setDate, moveWeek, moveMonth } = dateSlice.actions;
export default dateSlice.reducer;