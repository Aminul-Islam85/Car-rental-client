import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddCar from "./pages/AddCar";
import PrivateRoute from "./routes/PrivateRoute";
import Cars from "./pages/Cars";
import BookCar from "./pages/BookCar";
import MyBookings from "./pages/MyBookings"; 
import AdminPanel from "./pages/AdminPanel";
import MyCars from "./pages/MyCars";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add-car"
          element={
            <PrivateRoute>
              <AddCar />
            </PrivateRoute>
          }
        />
        <Route path="/cars" element={<Cars />} />
        <Route
          path="/book/:id"
          element={
            <PrivateRoute>
              <BookCar />
            </PrivateRoute>
          }
        />

        <Route
          path="/my-cars"
          element={
            <PrivateRoute>
              <MyCars />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-bookings"
          element={
            <PrivateRoute>
              <MyBookings />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
