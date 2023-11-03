import {HashRouter,Route,Routes} from "react-router-dom";

import Home from "./Home";
import Tarot from "./Tarot";

import FlowerZo from "./FlowerZo";
import FlowerDay from "./FlowerDay";

function App() {
  return (
    <>
            <HashRouter>
                <Routes>
                <Route exact path="home" element={<Home />}></Route>
                {/*  เมื่อเปิดมาหน้าแรกให้แสดง Component  Page1  */}
                <Route path="/page1" element={<Tarot />}></Route>
                {/*  สำหรับ Path /page1 ให้แสดง Component  Page1  */}
                {/*<Route path="/page2" element={<Dream />}></Route>*/}
                {/*  สำหรับ Path /page2 ให้แสดง Component  Page2  */}
                <Route path="/page3" element={<FlowerZo />}></Route>
                {/*  สำหรับ Path /page3 ให้แสดง Component  Page2  */}
                <Route path="/page4" element={<FlowerDay />}></Route>
                {/*  สำหรับ Path /page4 ให้แสดง Component  Page2  */}
                {/*<Route path="*" element={<Home />}></Route>*/}
                {/* ถ้าไม่ตรงกับ path ตามที่กำหนเไว้ด้านบนให้แสดง Component  Page1  */}
                </Routes>
            </HashRouter>
  </>
  );
}

export default App;


