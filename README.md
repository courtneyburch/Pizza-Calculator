# Pizza-Calculator
A tool to compare different pizzas and decide which one is the best value. Users can select a shape and enter dimensions, price, and quantity. The page will calculate the price per square inch and display which pizza is the best value. 

# CSS Features
- mobile-first layout hides title image and stacks content
- media query for medium screens shows small logo above title
- media query for full-size content shows full logo and side-by-side content
- flexbox layout title and content on small and medium views
- grid layout for pizza info entry large screens
- grid layout for logo and title text on large screens

# Javascript Features
- The dimensions to be entered change based on what shape is chosen (either diameter of a round pizza, or length and width of a rectangular pizza)
- Calculate button calculates the area of each pizza. 
- Results are displayed on the page below the buttons. Results are validated so that if either area is 0 or NaN, the page will display a "Please try again" message.
- Multiple variables gathered from user input and used in calculations.
- Clear button clears all input resets the radio buttons to the default value of round.


