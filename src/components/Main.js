import React, { useEffect, useReducer, useState } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI } from "../utils/api";

const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updatesTimes = (state, action) => {
    switch(action.type) {
        case "UPDATE_DATE":
            return [...initializeTimes()]; /**/
        case "SET_AVAILABLE_TIMES":
            return action.payload; // Utilise les horaires retournés par l'API
        default:
            return state;
    }
};

// Fonction pour récupérer les horaires disponibles depuis l'API
const fetchAvailableTimes = (date) => {
    const dateObj = new Date(date); // ✅ Convertir en objet Date

    return fetchAPI(dateObj)
        .then((times) => times)
        .catch((error) => {
            console.error("Error fetching available times:", error);
            return [];
        });
};


const Main = () => {
    const [availableTimes, dispatch] = useReducer(updatesTimes, initializeTimes());
    const [bookingData, setBookingData] = useState([]);

    // Hook useEffect pour récupérer les horaires disponibles à l'initialisation
    useEffect(() => {
        const today = new Date().toISOString().split("T")[0]; // Formater la date en YYYY-MM-DD
        fetchAvailableTimes(today).then((times) => {
            dispatch({ type: "SET_AVAILABLE_TIMES", payload: times }); // Met à jour les horaires dans le state
        });
    }, []);

    const handleBookingSubmit = (booking) => {
        setBookingData([...bookingData, booking]);
    };

    // Log pour vérifier que dispatch fonctionne bien
    console.log(dispatch);

    return (
        <>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} onSubmit={handleBookingSubmit} />
            <h2>Booking Data</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Guests</th>
                        <th>Occasion</th>
                    </tr>
                </thead>
                <tbody>
                    {bookingData.map((booking, index) => (
                        <tr key={index}>
                            <td>{booking.date}</td>
                            <td>{booking.time}</td>
                            <td>{booking.guests}</td>
                            <td>{booking.occasion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Main;