import React, { useEffect, useState } from "react";

const ConfirmedBooking = () => {
    const [bookingData, setBookingData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const storedData = localStorage.getItem("bookingData");
            console.log("Stored Data:", storedData);
            if (storedData) {
                setBookingData(JSON.parse(storedData)); // Convertir JSON en objet JS
            } else {
                console.log("No booking data in localStorage.");
            }
        } catch (error) {
            console.error("Erreur lors du chargement des données :", error);
        } finally {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <p>Loading booking details...</p>; // Afficher un message de chargement si `bookingData` est en cours de chargement
    }

    if (!bookingData) {
        return <p>No booking data found.</p>; // Gérer le cas où aucune donnée n'est trouvée
    }

    return (
        <div className="ConfirmedPage">
            <h2>Your booking has been confirmed {bookingData.name}!</h2>
            <p>Date: {bookingData.date}</p>
            <p>Time: {bookingData.time}</p>
            <p>Guests: {bookingData.guests}</p>
            <p>Occasion: {bookingData.occasion}</p>
            <p>We look forward to seeing you soon.</p>
        </div>
    );
};

export default ConfirmedBooking;