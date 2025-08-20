import { useState } from "react";

export default function Rooms() {
  const [rooms] = useState([
    { id: 1, name: "Single Sharing", price: 5000, location: "Delhi", img: "https://via.placeholder.com/300" },
    { id: 2, name: "Double Sharing", price: 3500, location: "Delhi", img: "https://via.placeholder.com/300" },
    { id: 3, name: "Triple Sharing", price: 2500, location: "Delhi", img: "https://via.placeholder.com/300" },
  ]);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-5">Available Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {rooms.map((room) => (
          <div key={room.id} className="p-5 border rounded-lg shadow hover:shadow-lg">
            <img src='elijah-pilchard-PkfZ6k0Gozo-unsplash.jpg' alt={room.name} className="rounded mb-3"/>
            <h3 className="text-xl font-semibold">{room.name}</h3>
            <p>Price: ₹{room.price}/month</p>
            <p>Location: {room.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
