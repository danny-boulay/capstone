import React, { useEffect, useReducer} from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { submitAPI } from "../utils/api";
import { initializeTimes, updatesTimes } from "../utils/times";

const Main = () => {
    const [availableTimes, dispatch] = useReducer(updatesTimes, []);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInitialTimes = async () => {
            const times = await initializeTimes(); // Appel de la fonction async
            dispatch({ type: "SET_AVAILABLE_TIMES", payload: times });
        };
        fetchInitialTimes();
    }, []); // Le tableau vide [] signifie que ce useEffect ne se déclenche qu'une fois lors du montage du composant

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

    return (
        <div>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} onSubmit={submitForm} />
        </div>
    );
};

export default Main;