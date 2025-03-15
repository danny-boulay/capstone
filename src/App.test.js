import { render, screen, within, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';

//Step 1
test('Renders the first label', () => {
    render(<BookingForm />);
    const firstLabelElement = screen.getByText("Choose date");
    expect(firstLabelElement).toBeInTheDocument();
})

//Step 2
test('Renders the initializeTimes function values', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BookingForm availableTimes={availableTimes} dispatch={() => {}} />);

  // Récupérer le select des heures en se basant sur le label
  const timeSelect = screen.getByLabelText(/choose time/i); // on cible le select avec le label "Choose time"

  // Récupérer toutes les options dans ce select
  const timesElements = within(timeSelect).getAllByRole("option");

  // Vérifier que le nombre d'options est bien celui attendu (sans inclure l'option pour "Birthday" ou "Anniversary")
  expect(timesElements).toHaveLength(availableTimes.length);

  // Vérifier que les options affichées correspondent aux valeurs de availableTimes
  timesElements.forEach((option, index) => {
      expect(option).toHaveTextContent(availableTimes[index]);
  });
});

test('Should keep the selected time after form submission', () => {
  // Simuler des heures disponibles
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  // Mock dispatch pour l'utiliser dans le test, car il ne fait rien dans ce cas précis
  const dispatch = jest.fn();

  // Render du composant
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);

  // Sélectionner le select des heures
  const timeSelect = screen.getByLabelText(/choose time/i);

  // Sélectionner 18h
  fireEvent.change(timeSelect, { target: { value: "18:00" } });

  // Soumettre le formulaire
  const submitButton = screen.getByText(/make your reservation/i);
  fireEvent.click(submitButton);

  // Vérifier que la valeur sélectionnée (18:00) est passée
  // Ici, on vérifie que l'alerte ou la console affiche la valeur du temps choisi
  // En attendant que la valeur "time" dans la soumission soit bien "18:00"

  // Mock de l'alert pour vérifier ce qui est affiché
  global.alert = jest.fn();  // Simule une alerte

  // Soumettre à nouveau le formulaire
  fireEvent.click(submitButton);

  // Vérifier que l'alert contient "Time: 18:00"
  expect(global.alert).toHaveBeenCalledWith(expect.stringContaining("Time: 18:00"));
});