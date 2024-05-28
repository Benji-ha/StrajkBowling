import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { waitFor } from '@testing-library/dom';
import BookingInfo from './BookingInfo';
import { fireEvent } from '@testing-library/dom';


// Fungerar // Story 1

describe('BookingInfo', () => {
    it("Has inputs that can take date, time, player amount and lanes", async () => {
      render(<BookingInfo />);
  
        const dateInput = screen.getByTestId('input-Date');
        const timeInput = screen.getByTestId('input-Time');
        const peopleInput = screen.getByTestId('input-Number of awesome bowlers');
        const lanesInput = screen.getByTestId('input-Number of lanes');
  
        fireEvent.change(dateInput, {target: { value: '2024-05-31'}});
        fireEvent.change(timeInput, { target: { value: '14:00' } });
        fireEvent.change(peopleInput, { target: { value: '2' } });
        fireEvent.change(lanesInput, { target: { value: '2' } });
  
        await waitFor(() => {
            expect(dateInput.value).toBe('2024-05-31')
            expect(timeInput.value).toBe('14:00')
            expect(peopleInput.value).toBe('2')
            expect(lanesInput.value).toBe('2')
        })
  
  });
  
  });


// describe('Bookinginfo', () => {
//     it('Has inputs that can take date, time, player amount and lanes', async () => {
//       render(<BookingInfo updateBookingDetails={() => {}}/>);

//       describe('BookingInfo', () => {
//         it('allows user to input date, time, player amount, and lanes', () => {
//           render(<BookingInfo updateBookingDetails={() => {}} />);
      
//           const dateInput = screen.getByTestId('date-input');
//           const timeInput = screen.getByTestId('time-input');
//           const playerInput = screen.getByTestId('people-input');
//           const laneInput = screen.getByTestId('lanes-input');
      

//           fireEvent.change(dateInput, { target: { value: '2024-05-31' } });
//           fireEvent.change(timeInput, { target: { value: '13:00' } });
//           fireEvent.change(playerInput, { target: { value: '2' } });
//           fireEvent.change(laneInput, { target: { value: '1' } });
      

//           expect(dateInput.value).toBe('2024-05-31');
//           expect(timeInput.value).toBe('13:00');
//           expect(playerInput.value).toBe('2');
//           expect(laneInput.value).toBe('1');
//          });
//         });
//       });
//     });

    //   const dateInput = screen.getByText("åååå-mm-dd");
    //   fireEvent.change(dateInput, {
    //     target: { value: '2024-05-31' },
    //   });
  
    //   await waitFor(() => {

    //   expect(Input.textContent).toBe('2024-05-31');

    //   });
      // // const contentElement = screen.getByText(/Sök/i);
  
//       expect(contentElement).toBeInTheDocument();
//     });
//   });