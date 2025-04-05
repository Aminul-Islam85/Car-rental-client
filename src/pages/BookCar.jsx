import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BookCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data))
      .catch((err) => console.error("Failed to load car:", err));
  }, [id]);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;

    const booking = {
      carId: id,
      name: form.name.value,
      email: form.email.value,
      startDate: form.startDate.value,
      endDate: form.endDate.value,
    };

    console.log("Booking submitted:", booking);
    form.reset();
    alert("Booking request submitted!");
  };

  if (!car) return <div className="text-center mt-10">Loading car details...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Book: {car.model}</h2>
      <p className="mb-2 text-sm text-gray-600">{car.description}</p>

      <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4">
        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" required />
        <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" required />
        <input type="date" name="startDate" className="input input-bordered w-full" required />
        <input type="date" name="endDate" className="input input-bordered w-full" required />

        <button type="submit" className="btn btn-primary">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookCar;
