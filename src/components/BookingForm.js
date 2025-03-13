import { useState } from "react";

const BookingForm = ({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, handleSubmit }) => {

  // Liste des heures disponibles (simulée pour l'instant)
  const [availableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

  return (
    <div className="FormContainer">
        <form className="BookingForm" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {availableTimes.map((t) => (
                <option key={t} value={t}>
                    {t}
                </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                placeholder="1"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
            />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your Reservation" />
        </form>
    </div>
  );
};

export default BookingForm;

