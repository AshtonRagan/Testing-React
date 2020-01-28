import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import StarWarsCharacters from "./StarWarsCharacters";

test("Buttons work", async () => {

const {getByText} = render(<StarWarsCharacters/>)

const NextButton = getByText(/Next/i);
fireEvent.click(NextButton);

const PrevButton = getByText(/Previous/i);
fireEvent.click(PrevButton);


})