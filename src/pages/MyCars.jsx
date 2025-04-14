import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyCars = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5000/api/cars?email=${user.email}`)
      .then(res => res.json())
      .then(data => setCars(data))
      .catch(err => console.error("Failed to load user's cars", err));
  }, [user]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">My Listed Cars</h2>
      {cars.length === 0 ? (
        <p className="text-center">You haven't listed any cars yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map(car => (
            <div key={car._id} className="card bg-base-100 shadow-md p-4">
              <img src={car.image} alt={car.model} className="rounded w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold">{car.model}</h3>
              <p><strong>Price:</strong> ${car.dailyPrice}/day</p>
              <p><strong>Status:</strong> {car.availability}</p>
              <p><strong>Location:</strong> {car.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCars;
