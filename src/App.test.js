import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updatesTimes  } from "./utils/times";

//Test simple qui vérifie si le label "Choose time" est affiché
test("renders the label 'Choose time'", () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} onSubmit={() => {}} />);

    const labelElement = screen.getByLabelText(/choose time/i);
    expect(labelElement).toBeInTheDocument();
});

//Test de fonctionnement de initializeTimes
describe("initializeTimes", () => {
    it("should return a non-empty array of available times", async () => {
        const result = await initializeTimes();
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThan(0);
    });
});

//Test de fonctionnement de updatesTimes
describe("updatesTimes", () => {
    it("should update available times when SET_AVAILABLE_TIMES is dispatched", () => {
        const initialState = [];
        const newTimes = ["12:00", "14:00"];
        const action = { type: "SET_AVAILABLE_TIMES", payload: newTimes };

        const newState = updatesTimes(initialState, action);
        expect(newState).toEqual(newTimes);
    });

    it("should return the same state for an unknown action", () => {
        const initialState = ["10:00", "11:00"];
        const action = { type: "UNKNOWN_ACTION", payload: ["17:00"] };

        const newState = updatesTimes(initialState, action);
        expect(newState).toEqual(initialState);
    });
});