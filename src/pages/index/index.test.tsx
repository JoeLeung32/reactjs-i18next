import React from 'react';
import { render } from '@testing-library/react';
import Index from "./index.js";

test('renders hello world content', () => {
    const { getByText } = render(<Index />);
    const textElement = getByText(/Hello World!/i);
    expect(textElement).toBeInTheDocument();
});
