// Certainly! You can use regular expressions (regex) to validate phone numbers. Here's an example of how you can validate a phone number using regex in a React component:

// ```jsx
import React, { useState } from "react";

function PhoneNumberForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value;
    setPhoneNumber(inputPhoneNumber);
    // Regular expression for a simple phone number validation
    const phoneRegex = /^\d{10}$/;
    setIsValid(phoneRegex.test(inputPhoneNumber));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      console.log("Phone number submitted:", phoneNumber);
      // Handle form submission with the phone number
    } else {
      console.log("Invalid phone number");
      // Handle invalid phone number scenario
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone Number:
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="Enter your phone number"
          required
        />
      </label>
      {!isValid && (
        <p style={{ color: "red" }}>Please enter a valid phone number</p>
      )}
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}

export default PhoneNumberForm;

// In this example, we're using a simple regex (`/^\d{10}$/`) to validate the phone number. This regex ensures that the input consists of exactly 10 digits. You might need to adjust the regex pattern based on your specific requirements (e.g., allowing different formats or international phone numbers).

// If the input doesn't match the regex pattern, we set `isValid` state to `false`, which disables the submit button and displays an error message prompting the user to enter a valid phone number.
