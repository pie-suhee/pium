import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MemberHome from './pages/MemberHome';
import HealthNote from './pages/HealthNote';
import MemberMy from './pages/MemberMy';
import Main from './pages/Main';
import Nav from './components/Nav';
import Popup from './pages/Popup';
import Error from './pages/Error';

const AppRoutes = () => {
    const location = useLocation();
    const parts = location.pathname.split("/");

    /* 스크롤을 항상 맨 위로 이동 */
    useEffect(() => {
        const el = document.querySelector('.guide');
        if (el) el.scrollTop = 0;
    }, [location.pathname]);

    /* 트레이너 / 회원 구분 S: */
    let userType = "";

    if (parts[1] === "trainer") {
        userType = "trainer";
    } else if (parts[1] === "member") {
        userType = "member";
    } else {
        userType = "";
    }
    /* 트레이너 / 회원 구분 E: */

    /* 푸터 버튼 on/off 구분 S: */
    let navType = "";

    if (parts[2] === "home") {
        navType = "home";
    } else if (parts[2] === "schedule") {
        navType = "schedule";
    } else if (parts[2] === "note") {
        navType = "note";
    } else if (parts[2] === "chat") {
        navType = "chat";
    } else if (parts[2] === "management") {
        navType = "management";
    } else if (parts[2] === "my") {
        navType = "my";
    } else {
        navType = "";
    }
    /* 푸터 버튼 on/off 구분 E: */

    return (
        <main id="main">
            <div className="guide">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/trainer/home" element={<Main />} />
                    <Route path="/member/home" element={<MemberHome />} />
                    <Route path="/member/note" element={<HealthNote />} />
                    <Route path="/member/my" element={<MemberMy />} />
                    <Route path="/popup" element={<Popup />} />
                    <Route path="/error" element={<Error />} />
                </Routes>
            </div>
            <Nav type={{ userType, navType }} />
        </main>
    );
};

const App = () => (
    <Router>
        <AppRoutes />
    </Router>
);

export default App;