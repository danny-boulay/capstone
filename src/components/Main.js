import React, { useEffect, useReducer, useState} from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { submitAPI } from "../utils/api";
import { initializeTimes, updatesTimes } from "../utils/times";

const Main = () => {
    const [availableTimes, dispatch] = useReducer(updatesTimes, []);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInitialTimes = async () => {
            const times = await initializeTimes(selectedDate);
            dispatch({ type: "SET_AVAILABLE_TIMES", payload: times });
        };
        fetchInitialTimes();
    }, [selectedDate]);


    const submitForm = async (formData) => {
        try {
            const success = await submitAPI(formData);
            if (success) {
                localStorage.setItem("bookingData", JSON.stringify(formData));
                navigate("/confirmed");
            } else {
                alert("Reservation failed. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(new Date(date)); // Met à jour la date sélectionnée
    };

    return (
        <div>
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                onSubmit={submitForm}
                onDateChange={handleDateChange}
            />
        </div>
    );
};

export default Main;