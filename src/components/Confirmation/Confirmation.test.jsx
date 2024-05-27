import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { waitFor } from '@testing-library/dom';
import Confirmation from './Confirmation';
import { fireEvent } from '@testing-library/dom';

// Fungerar // Story 5

describe('Confirmation', () => {
    it("Can take you back to the booking page", async () => {

        const mockSetConfirmation = vi.fn();
        const confirmationDetails = {
            active: true,
            when: '2024-05-21T00:42',
            people: '2',
            lanes: '1',
            id: 'STR851VJQK',
            price: 220,
          };

      render(<Confirmation confirmationDetails={confirmationDetails} setConfirmation={mockSetConfirmation} />);

        const backButton = screen.getByRole('button');
  
        fireEvent.click(backButton);

        await waitFor(() => {
            expect(mockSetConfirmation).toHaveBeenCalledTimes(1);
        })
  });
  
  });