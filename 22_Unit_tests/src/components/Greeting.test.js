import { render, screen } from '@testing-library/react'
import useEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => { // describe() is sused to creat a suite of related tests 
    test('reners Hello World as a text', () => {
        // Arrange
        render(<Greeting />);
    
        // Act
        // ...nothing
    
        //Assert
        const helloWorldElement = screen.getByText('Hello World!', { exact: true }); // default exact is true
    
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders good to see you if the button was NOT clicked', () => {
        render(<Greeting />);
       
        const outputElement = screen.getByText('good to see you', { exact: false }); // default exact is true
    
        expect(outputElement).toBeInTheDocument();

    });

    test('renders "Changed!" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);
       
        // Act
        const buttonElement = screen.getByRole('button');
        useEvent.click(buttonElement);

        // Assert
        const outputElement = screen.getByText('Changed!', { exact: false }); // default exact is true
    
        expect(outputElement).toBeInTheDocument();
    });

    test('does not render "good to see you" if the button was clicked,', () => {
         // Arrange
         render(<Greeting />);
       
         // Act
         const buttonElement = screen.getByRole('button');
         useEvent.click(buttonElement);
 
         // Assert
         const outputElement = screen.queryByText('good to see you', { exact: false }); // default exact is true
     
         expect(outputElement).toBeNull();
    });
});