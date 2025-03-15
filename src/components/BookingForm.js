import React, {  useState } from "react";
import { fetchAPI } from "../utils/api";

const BookingForm = ({ availableTimes, dispatch, onSubmit  }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value); // ✅ Convertir en objet Date
        setDate(e.target.value); // ✅ Mettre à jour le state local

        dispatch({ type: "UPDATE_DATE", payload: selectedDate });

        fetchAvailableTimes(selectedDate).then((times) => {
            dispatch({ type: "SET_AVAILABLE_TIMES", payload: times });
        });
    };

    // Soumettre la réservation
    const handleSubmit = (e) => {
        e.preventDefault();
        const booking = { date, time, guests, occasion };
        onSubmit(booking); // Appeler la fonction pour sauvegarder la réservation
    };

     // Récupérer les horaires disponibles via l'API
     const fetchAvailableTimes = (date) => {
        return fetchAPI(date) // Utilise la fonction fetchAPI pour obtenir les horaires disponibles
            .then((times) => times)
            .catch((error) => {
                console.error("Error fetching available times:", error);
                return [];
            });
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

