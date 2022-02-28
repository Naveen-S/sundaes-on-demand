import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

test('Initial conditions', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', {
    name: /confirm order/i,
  });
  expect(confirmButton).toBeDisabled();
});

test('Confirm button enables on first click of checkbox and disables on next', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole('button', {
    name: /confirm order/i,
  });

  userEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  userEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test('Check if popover opens if on hover', () => {
  render(<SummaryForm />);
  // Except popover is not open
  const popover = screen.queryByText(
    /No ice cream will actually be delivered/i
  );
  expect(popover).not.toBeInTheDocument();

  // Hover on popover.
  const tAndC = screen.getByText(/Terms and Conditions/i);
  userEvent.hover(tAndC);
  // Why I used getByText:  https://testing-library.com/docs/react-testing-library/cheatsheet/
  const popoverOnHover = screen.getByText(
    /No ice cream will actually be delivered/i
  );
  expect(popoverOnHover).toBeInTheDocument();

  // Disappear on unhover.
  userEvent.unhover(tAndC);
  const popoverOnHoverOut = screen.queryByText(
    /No ice cream will actually be delivered/i
  );
  expect(popoverOnHoverOut).not.toBeInTheDocument();
});
