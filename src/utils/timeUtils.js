/**
 * 24시간 형식의 시간 문자열을 '오전/오후 HH:MM' 형식으로 변환합니다.
 * @param {string} timeString 'HH:MM' 형식의 시간 (예: '10:00', '14:30')
 * @returns {string} 오전/오후가 붙은 시간 (예: '오전 10:00', '오후 2:00')
 */
export const formatTimeWithAmPm = (timeString) => {
    if (!timeString) return '';

    const [hourString, minuteString] = timeString.split(':');
    const hour = parseInt(hourString, 10);
    const minutes = minuteString || '00';

    let ampm = '';
    let displayHour = hour;

    if (hour >= 12) {
        // 오후 (12시~23시)
        ampm = '오후';
        displayHour = hour === 12 ? 12 : hour - 12;
    } else {
        // 오전 (0시~11시)
        ampm = '오전';
        displayHour = hour === 0 ? 12 : hour; // 0시는 오전 12시
    }

    return `${ampm} ${displayHour}:${minutes}`;
};

/**
 * 시작 시간과 종료 시간 문자열 사이의 차이를 "N시간 M분" 형태로 계산하여 반환합니다.
 * @param {string} start 'HH:MM' 형식의 시작 시간 (예: '10:00')
 * @param {string} end 'HH:MM' 형식의 종료 시간 (예: '11:00')
 * @returns {string} 차이 시간 문자열 (예: '1시간', '1시간 30분')
 */
export const calculateDuration = (start, end) => {
    const timeToMinutes = (time) => {
        const [h, m] = time.split(':').map(Number);
        return h * 60 + m;
    };

    let diffMinutes = timeToMinutes(end) - timeToMinutes(start);

    // 자정을 넘는 경우 처리
    if (diffMinutes < 0) {
        diffMinutes += 1440;
    }
    
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;

    const parts = [];
    if (hours > 0) {
        parts.push(`${hours}시간`);
    }
    if (minutes > 0) {
        parts.push(`${minutes}분`);
    }
    
    return parts.length === 0 ? "0분" : parts.join(' ');
};