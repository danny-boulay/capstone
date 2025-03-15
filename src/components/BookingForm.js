import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        console.log(dispatch); // Vérifie que dispatch est bien une fonction
        dispatch({ type: "UPDATE_DATE", payload: selectedDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ date, time, guests, occasion });
        alert(`Reservation Details:
            Date: ${date}
            Time: ${time}
            Guests: ${guests}
            Occasion: ${occasion}`);
    };

  return (
    <div className="FormContainer">
        <form className="BookingForm" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {(availableTimes || []).map((t) => (
                    <option key={t} value={t}>{t}</option>
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

