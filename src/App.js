import { Routes, Route } from "react-router-dom";

import Navbar from "./routes/Navbar/Navbar";
import Hero from "./routes/Hero/Hero";
import Shop from "./routes/Shop/Shop";
import Contact from "./routes/Contact/Contact";
import Sign from "./routes/Sign/Sign";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Hero />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sign" element={<Sign />} />
      </Route>
    </Routes>
  );
}

export default App;
