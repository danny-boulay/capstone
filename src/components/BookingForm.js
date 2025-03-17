import React, {  useState } from "react";
import { fetchAPI} from "../utils/api";

const BookingForm = ({ availableTimes, dispatch, onSubmit  }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        setDate(e.target.value);
        dispatch({ type: "UPDATE_DATE", payload: selectedDate });

        fetchAPI(selectedDate).then((times) => {
            dispatch({ type: "SET_AVAILABLE_TIMES", payload: times });
        });
    };

    // Soumettre la réservation
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ date, time, guests, occasion });
    };

    return (
        <div className="FormContainer">
            <h1 className="BookingTitle">Book a Table</h1>
            <form className="BookingForm" onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange} required/>

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
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
                    required
                />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <button type="submit">Make Your Reservation</button>
            </form>
        </div>
  );
};

export default BookingForm;

