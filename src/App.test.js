import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updatesTimes  } from "./utils/times";

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

//Test de validation HTML5
describe('HTML5 validation attributes', () => {
    test('name field has required attribute', () => {
      render(<BookingForm />);
      const nameField = screen.getByLabelText(/reservation name/i); // Le texte du label, ajuster si nécessaire
      expect(nameField).toHaveAttribute('required');
    });

    test('date field has required and min attributes', () => {
      render(<BookingForm />);
      const dateField = screen.getByLabelText(/choose date/i);
      expect(dateField).toHaveAttribute('required');
      expect(dateField).toHaveAttribute('min');
    });

    test('time field has required attribute', () => {
      render(<BookingForm />);
      const timeField = screen.getByLabelText(/choose time/i);
      expect(timeField).toHaveAttribute('required');
    });

    test('guests field has required, min, and max attributes', () => {
      render(<BookingForm />);
      const guestsField = screen.getByLabelText(/number of guests/i);
      expect(guestsField).toHaveAttribute('required');
      expect(guestsField).toHaveAttribute('min', '2');
      expect(guestsField).toHaveAttribute('max', '10');
    });

    test('occasion field has required attribute', () => {
      render(<BookingForm />);
      const occasionField = screen.getByLabelText(/occasion/i);
      expect(occasionField).toHaveAttribute('required');
    });
  });

//Test de validation avec Yup
  describe("Form validation with Yup", () => {
    test("affiche 'Your name is too short' si le nom est trop court", async () => {
        render(<BookingForm />);

        // Entrez un nom trop court
        const nameInput = screen.getByLabelText(/reservation name/i);
        fireEvent.change(nameInput, { target: { value: "d" } });

        // On déclenche le blur pour simuler la perte de focus
        fireEvent.blur(nameInput);
        
        // Vérification du message d'erreur
        await waitFor(() => {
            expect(screen.getByText(/your name is too short/i)).toBeInTheDocument();
        });
    });

    test("soumet le formulaire avec succès sans navigation", async () => {
        // On mock la fonction de soumission
        const mockOnSubmit = jest.fn(() => Promise.resolve());

        // Mock du dispatch (juste une fonction vide pour les tests)
        const mockDispatch = jest.fn();

        // On fournit des horaires fictifs en props
        render(<BookingForm onSubmit={mockOnSubmit} dispatch={mockDispatch} availableTimes={["19:00", "20:00"]} />);

        // Remplir le formulaire avec des valeurs valides
        fireEvent.change(screen.getByLabelText(/reservation name/i), { target: { value: "Danny" } });
        fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2026-12-25" } });
        fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "19:00" } });
        fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "4" } });
        fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });

        // Soumettre le formulaire
        fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

        // Vérification que la fonction de soumission est appelée avec les bonnes valeurs
        await waitFor(() => {
            expect(mockOnSubmit).toHaveBeenCalledWith({
                name: "Danny",
                date: "2026-12-25",
                time: "19:00",
                guests: 4,
                occasion: "Birthday",
            });
        });
    });
});