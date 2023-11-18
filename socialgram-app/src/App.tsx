import { Routes, Route } from "react-router-dom";
import "./globals.css";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public route */}
        <Route path="/Sign-in" element={<SignInForm/>}/>
        {/*  private route */}
        <Route index element={<Home/>}/>
      </Routes>
    </main>
  );
};

export default App;
