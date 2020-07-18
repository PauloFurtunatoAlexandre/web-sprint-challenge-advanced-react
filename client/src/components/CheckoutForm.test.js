import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);
  getByText(/checkout form/i);
});

test("form shows success message on submit with form details", async () => {
  const { getByTestId } = render(<CheckoutForm />);

  const buttonCheckout = getByTestId("buttonCheckout");

  await waitFor(() => {
    fireEvent.click(buttonCheckout);
    const successMessage = getByTestId("successMessage");
    expect(successMessage.textContent).toBe(
      "You have ordered some plants! Woo-hoo! 🎉Your new green friends will be shipped to: ,  "
    );
  });
});

test("fail on purpose", async () => {
  const { getByTestId } = render(<CheckoutForm />);

  const firstName = getByTestId("firstName");

  fireEvent.change(firstName, {
    target: { value: "Paulo" },
  });
  expect(getByTestId("firstName")).toHaveValue("Robert");
});
