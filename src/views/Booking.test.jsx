import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest';
import Booking from './Booking';


// Fungerar // Story 2
describe('Booking', () => {
    it('renders new shoe input fields that can be filled in',  () => {
        const { container } = render(<Booking />);

      const addButton = screen.getByText("+");

      fireEvent.click(addButton);
      fireEvent.click(addButton);

      const shoeInput = container.querySelectorAll(".shoes__input");

      expect(shoeInput.length).toBe(2);

      fireEvent.change(shoeInput[0], { target: { value: '42' } });

      fireEvent.change(shoeInput[1], { target: { value: '38' } });

 
      expect(shoeInput[0].value).toBe('42');
      expect(shoeInput[1].value).toBe('38');
    });
});
// Fungerar // Story 3

it('removes shoe input fields', () => {
    const { container } = render(<Booking />);

    const addButton = screen.getByText("+");


    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(addButton);

    let shoeInput = container.querySelectorAll(".shoes__input");

    expect(shoeInput.length).toBe(3);

    const removeButtons = container.querySelectorAll('.shoes__button--small');
    fireEvent.click(removeButtons[2]);


    shoeInput = container.querySelectorAll(".shoes__input");
    expect(shoeInput.length).toBe(2);
});

// Fungerar //



// Fungerar // Story 4

describe('Booking', () => {
    it("should be able to give a total price and a booking number", async () => {
        const { container } = render(<Booking />);
       
  
        const dateInput = screen.getByTestId('input-when');
        const timeInput = screen.getByTestId('input-time');
        const peopleInput = screen.getByTestId('input-people');
        const lanesInput = screen.getByTestId('input-lanes');

        fireEvent.change(dateInput, { target: { value: '2024-05-31' } });
        fireEvent.change(timeInput, { target: { value: '13:00' } });
        fireEvent.change(peopleInput, { target: { value: '2' } });
        fireEvent.change(lanesInput, { target: { value: '1' } });

        const addButton = screen.getByText("+");

        fireEvent.click(addButton);
        fireEvent.click(addButton);

        await waitFor(() => {

            let shoeInput = container.querySelectorAll(".shoes__input");

            fireEvent.change(shoeInput[0], { target: { value: '42' } });
            fireEvent.change(shoeInput[1], { target: { value: '38' } });

        });  

        fireEvent.click(screen.getByText('strIIIIIike!'));
  
        await waitFor(() => {

        });

            expect(screen.getByText(/see you soon!/i)).toBeInTheDocument();
            expect(screen.getByDisplayValue(/2024-05-31 12:10/i)).toBeInTheDocument();
            expect(screen.getByDisplayValue('QWE123')).toBeInTheDocument();
            expect(screen.getByText("340 sek")).toBeInTheDocument();



            screen.debug()
        });

  });



  
    // it('Has inputs that can take date, time, player amount, and lanes', async () => {
    //     render(<Booking />);

    //     const dateInput = screen.getByLabelText('date');
    //     const timeInput = screen.getByLabelText('time');
    //     const playerInput = screen.getByLabelText('Number of awesome bowlers');
    //     const laneInput = screen.getByLabelText('Number of lanes');

    //     fireEvent.change(dateInput, { target: { value: '2024-05-31' } });
    //     fireEvent.change(timeInput, { target: { value: '13:00' } });
    //     fireEvent.change(playerInput, { target: { value: '2' } });
    //     fireEvent.change(laneInput, { target: { value: '1' } });

    //     await waitFor(() => {

    //     expect(dateInput.value).toBe('2024-05-31');
    //     expect(timeInput.value).toBe('13:00');
    //     expect(playerInput.value).toBe('2');
    //     expect(laneInput.value).toBe('1');
    //     });

    //     const bookButton = screen.getByText('strIIIIIike!')
    //     fireEvent.click(bookButton)

    //     const errorMessage = screen.queryByText('Error');
    //     await waitFor(() => {
    //         expect(errorMessage).not.toBeInTheDocument()
    //     })

    // });
