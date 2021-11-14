
import React from "react";
import { render, fireEvent, screen } from './renderUtil'
import { Provider } from "react-redux";
import { store } from "../app/store";

import { Tictac } from "../features/tictac/Tictac";
import { getByLabelText } from "@testing-library/dom";

test('render tictac', () => {
    const tic = render(
        <Tictac />
    )
    const input = tic.getByLabelText(/Set board size/i)
    const button = tic.getByText(/set board size/i)
    const boxes = tic.getAllByTestId('boxes')
    // fireEvent.change(input, {target: {value: '23'}})
    expect(boxes.length).toBe(9)
    fireEvent.change(input, {target: {value: 4}})
    expect(input.value).toBe('4')
    
    expect(boxes.length).toBe(9)
    fireEvent.click(button)

    const boxesNew = tic.getAllByTestId('boxes')
    expect(boxesNew.length).toBe(16)
    console.log(button)
    // fireEvent.change(input, {target: {value: 4}})

})