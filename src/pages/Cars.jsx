import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/cars");
        const data = await res.json();
        setCars(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load cars:", err);
      }
    };

    fetchCars();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading cars...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Available Cars</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car._id} className="card bg-base-100 shadow-md p-4">
            <img src={car.image} alt={car.model} className="rounded mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mb-2">{car.model}</h3>
            <p><strong>Price:</strong> ${car.dailyPrice}/day</p>
            <p><strong>Status:</strong> {car.availability}</p>
            <p><strong>Location:</strong> {car.location}</p>
            <p className="mt-2 text-sm text-gray-600">{car.description}</p>
            <Link to={`/book/${car._id}`} className="btn btn-primary btn-sm mt-3">
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
