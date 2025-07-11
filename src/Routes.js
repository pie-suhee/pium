import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import MemberHome from './pages/MemberHome';
import Main from './pages/Main';
import Test from './pages/Test';
import Footer from './components/Footer';
import BtnTest from './pages/BtnTest';
import Popup from './pages/Popup';



const AppRoutes = () => {
    const location = useLocation();
    const parts = location.pathname.split("/");

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
    let footerType = "";

    if (parts[2] === "home") {
        footerType = "home";
    } else if (parts[2] === "schedule") {
        footerType = "schedule";
    } else if (parts[2] === "note") {
        footerType = "note";
    } else if (parts[2] === "chat") {
        footerType = "chat";
    } else if (parts[2] === "management") {
        footerType = "management";
    } else if (parts[2] === "my") {
        footerType = "my";
    } else {
        footerType = "";
    }
    /* 푸터 버튼 on/off 구분 E: */

    return (
        <main id="main">
            <div className="guide">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/trainer/home" element={<Main />} />
                    <Route path="/member/home" element={<MemberHome />} />
                    <Route path="/trainer/schedule" element={<Test />} />
                    <Route path="/btn" element={<BtnTest />} />
                    <Route path="/popup" element={<Popup />} />
                </Routes>
            </div>
            <Footer type={{ userType, footerType }} />
        </main>
    );
};

const App = () => (
    <Router>
        <AppRoutes />
    </Router>
);

export default App;