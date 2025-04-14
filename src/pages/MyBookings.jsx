import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchBookings = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/bookings?email=${user.email}`);
        const data = await res.json();
        setBookings(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
      }
    };

    fetchBookings();
  }, [user?.email]);

  const handleCancel = async (id) => {
    const confirmed = confirm("Are you sure you want to cancel this booking?");
    if (!confirmed) return;

    try {
      const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setBookings(bookings.filter((b) => b._id !== id));
      } else {
        alert("Failed to cancel booking.");
      }
    } catch (err) {
      console.error("Cancel error:", err);
      alert("Something went wrong.");
    }
  };

  if (loading) return <div className="text-center mt-10">Loading bookings...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">My Bookings</h2>
      {bookings.map((booking) => (
        <div key={booking._id} className="bg-base-100 rounded-lg shadow p-4 mb-4">
          <h3 className="text-xl font-semibold mb-1">{booking.carId?.model || "Car"}</h3>
          <p><strong>Booking Dates:</strong> {booking.startDate} to {booking.endDate}</p>
          <p><strong>Email:</strong> {booking.email}</p>
          <p><strong>Booked At:</strong> {new Date(booking.createdAt).toLocaleString()}</p>
          <button onClick={() => handleCancel(booking._id)} className="btn btn-outline btn-sm mt-2">
            Cancel Booking
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
