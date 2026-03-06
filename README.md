# cs2-dom-basics-practice

# Learning Target
- I am learning how to control CSS styles using the DOM and JavaScript

# Success Criteria
- I can define a function and call it from HTML using the ```onclick``` attribute
- I can use ```let element = document.getElementById("someId")``` to store an HTML element in a JS variable
- I can change the text of an element using ```element.innerText = "new text";```
- I can set style properties using ```element.style.property = "new value";```


# Project Setup
1. Install *Live Server*
2. Create ```script.js```
3. Add ```console.log("Script started")``` to begining of ```script.js```
4. Add ```<script src="script.js"></script>``` before ```</body>``` tag in ```index.html``` to link the script
8. Go live and use the inspection tool to check that you see ***Script started*** in the console to verify your script is linked correctly to your html 

# Essential Notes
- You must first use ```let element = document.getElementById("id")``` to store an element in a variable before you can set its styles (or do anything with it) in JavaScript
- Use ```element.innerText = "new text";``` to change the text
- Use ```element.style.property = "value";``` to set a new value for a CSS style property e.g. ```p.style.color = "red";```
- Style values are always written as strings (should be in "")
- CSS properties with dashes must be converted to camelCase e.g. ```background-color``` in CSS becomes ```backgroundColor``` in JavaScript
- You can define a class in your ```styles.css``` file and then apply it to an element in JavaScript using ```element.classList.add("classname")```

# Assignment
The webpage has a poem by Emily Dickinson. Your job is to add some buttons that let the user change the look of the poem.

## Part 1: Change the text color
1. Add a button to the page that says *Change color*
2. Define a function called ```changeColor()```
3. Add ```console.log("click");``` to your function
4. Add an ```onclick``` attribute to the button that calls the function and test that it is working
5. Continue the function to do the following:
    - Use ```prompt()``` to ask the user for a new color name e.g. ```let color = prompt("Enter a new color for the poem");```
    - Set the color of the text to the name given by the user
        - Use ```document.getElementById()``` to get the paragraph element
        - Use ```element.style.color = color``` to set the new color 


## Part 2: Change the text size
1. Add another button to the page that says *Change font size*
2. Define a function called ```changeFontSize()``` that does the following:
    - Prompts the user for a new font size in pixels
    - Sets the font size of the text to the value given by the user
3. Add an ```onclick``` attribute to the button that calls the function

## Part 3: Change the poem
1. Add another button to the page that says *Change poem*
2. Define a function called ```changePoem()``` that does the following:
    - Prompts the user for title of the poem
    - Sets the ```h1``` text to the title the user entered
    - Prompts the user to enter the text for a new poem
    - Sets the text of the poem to the text entered by the user
3. Add an ```onclick``` attribute to the button that calls the function