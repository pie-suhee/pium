import scheduleData from "../assets/json/user.json";

/**
 * scheduleData에서 필요한 파생 데이터를 제공하는 커스텀 훅입니다.
 * @param {string} dateKey 현재 선택된 날짜 (YYYY-MM-DD)
 * @returns {{
 * selectedEvents: Array<Object>, 
 * getEventCount: Function
 * }}
 */
export const useScheduleData = (dateKey) => {
    // 현재는 import된 JSON을 직접 사용하지만, Redux로 전환 시 이 부분을 변경합니다.
    const userCalendar = scheduleData[0]?.calendar; 

    // 1. 선택된 날짜의 이벤트 목록을 반환
    const selectedEvents = userCalendar && Array.isArray(userCalendar[dateKey]) 
                           ? userCalendar[dateKey] 
                           : [];

    // 2. 캘린더 날짜에 이벤트가 있는지 확인 (개수 반환)
    const getEventCount = (dayKey) => {
        // dayKey를 포맷팅하지 않고 그대로 사용합니다.
        return userCalendar && Array.isArray(userCalendar[dayKey]) ? userCalendar[dayKey].length : 0;
    };
    
    return {
        selectedEvents,
        getEventCount,
    };
};