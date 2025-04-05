import { useState } from "react";

const AddCar = () => {
  const [error, setError] = useState("");

  const handleAddCar = (e) => {
    e.preventDefault();
    const form = e.target;

    const newCar = {
      model: form.model.value,
      dailyPrice: form.dailyPrice.value,
      availability: form.availability.value,
      registrationNumber: form.registrationNumber.value,
      features: form.features.value.split(","),
      description: form.description.value,
      image: form.image.value,
      location: form.location.value,
    };

    console.log("Car to add:", newCar);
    form.reset();
    setError("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-100 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Add a New Car</h2>

      <form onSubmit={handleAddCar} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="model" placeholder="Car Model" className="input input-bordered w-full" required />
        <input type="number" name="dailyPrice" placeholder="Daily Rental Price ($)" className="input input-bordered w-full" required />
        <input type="text" name="availability" placeholder="Available / Booked" className="input input-bordered w-full" required />
        <input type="text" name="registrationNumber" placeholder="Vehicle Registration Number" className="input input-bordered w-full" required />
        <input type="text" name="features" placeholder="Features (comma separated)" className="input input-bordered w-full" />
        <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
        <input type="url" name="image" placeholder="Image URL" className="input input-bordered w-full" required />
        <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full md:col-span-2" required></textarea>

        {error && <p className="text-red-500 text-sm md:col-span-2">{error}</p>}

        <button type="submit" className="btn btn-primary md:col-span-2">Add Car</button>
      </form>
    </div>
  );
};

export default AddCar;
