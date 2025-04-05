import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddCar from "./pages/AddCar";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-base-100 text-center px-4">
              <h1 className="text-3xl font-bold mb-2">Welcome to Car Rental System 🚗</h1>
              <p className="text-gray-600 text-lg max-w-md">
                Search, book, and manage your car rentals all in one place. Start by browsing available cars or adding your own!
              </p>
            </div>
          }
        />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
