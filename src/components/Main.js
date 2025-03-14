import React, {useReducer} from "react";
import BookingForm from "../components/BookingForm";

const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updatesTimes = (state, action) => {
    switch(action.type) {
        case "UPDATE_DATE":
            return [...initializeTimes()]; /**/
        default:
            return state;
    }
};

const Main = () => {
    const [availableTimes, dispatch] = useReducer(updatesTimes, initializeTimes());

    console.log(dispatch); // Ajoute un log pour vérifier si dispatch est bien défini

    return (
        <>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </>
    );
};

export default Main;