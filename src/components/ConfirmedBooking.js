import React, { useEffect, useState } from "react";

const ConfirmedBooking = () => {
    const [bookingData, setBookingData] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem("bookingData");
        if (storedData) {
            setBookingData(JSON.parse(storedData));
        }
    }, []);

    if (!bookingData) {
        return <p>Loading booking details...</p>;
    }

    return (
        <div className="ConfirmedPage">
            <h2>Your booking has been confirmed!</h2>
            <p>Date: {bookingData.date}</p>
            <p>Time: {bookingData.time}</p>
            <p>Guests: {bookingData.guests}</p>
            <p>Occasion: {bookingData.occasion}</p>
            <p>We look forward to seeing you soon.</p>
        </div>
    );
};

export default ConfirmedBooking;