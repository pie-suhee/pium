// src/utils/dateCalculations.js (HealthNote에서 사용하던 로직을 함수화)

/**
 * 주어진 연/월 정보를 기반으로 월별 달력 셀 배열을 생성합니다. (전체 달력)
 * @param {number} year 현재 연도
 * @param {number} month 현재 월 (1-12)
 * @returns {Array<number|null>} 달력 셀 배열
 */
export const getMonthlyCalendarCells = (year, month) => {
    // month는 0-11 기반으로 사용해야 합니다 (JS Date 객체)
    const jsMonth = month - 1; 
    
    // 해당 월의 총 일수
    const daysInMonth = new Date(year, jsMonth + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    
    // 해당 월의 1일 요일 (0:일 ~ 6:토)
    const firstDayOfWeek = new Date(year, jsMonth, 1).getDay();
    
    // 빈 셀과 날짜를 합친 배열
    const calendarCells = [
        ...Array(firstDayOfWeek).fill(null),
        ...days,
    ];
    
    return calendarCells;
};

export const formatDateKey = (year, month, day) =>
    `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

// Week 캘린더 계산 로직 (다른 페이지 로직을 함수화)
/**
 * 현재 주차의 7일치 Date 객체 배열을 반환합니다.
 * @param {number} currentYear 현재 연도
 * @param {number} currentMonth 현재 월 (1-12)
 * @param {number} currentDate 현재 날짜 (1-31)
 * @param {number} currentDayOfWeek 현재 요일 (0-6)
 * @returns {Array<Date>} 7일간의 Date 객체 배열
 */

export const getWeeklyDates = (currentYear, currentMonth, currentDate, currentDayOfWeek) => {
    // JS Date 객체는 0-11월을 사용합니다.
    const jsMonth = currentMonth - 1; 

    // 현재 주(일요일)의 날짜 (1-31)
    const startOfWeekDay = currentDate - currentDayOfWeek;
    
    // 현재 주 일요일의 Date 객체 (이 날짜를 기준으로 7일을 만듭니다.)
    const startOfWeek = new Date(currentYear, jsMonth, startOfWeekDay);

    const days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(startOfWeek);
        d.setDate(startOfWeekDay + i); // startOfWeekDay를 기준으로 날짜를 설정
        return d;
    });
    return days;
};