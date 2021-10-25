# 'Become a Software Developer' - 

## WEEK 3 PROJECT  - Responsive Design.'

The objective of this week project is to create the cover of a newspaper (main page), putting together my own cover design using FlexBox as the main tool for creating a Responsive Design, and following the Mobile First concept. 

## Description
 The cover must contain:
 - Name of the newspaper.
 - Date.
 - Main news with images, title, brief description and link to the news.
 - Secondary news (with or without image), the title and link to the news.
 - A navigation menu to the different sections of the newspaper and advertisements.
 
  It is not requested that the links of the news, advertisements or navigation menu lead anywhere.
  The main menu should be a horizontal bar with links when viewed from a desktop PC, but when looking at the web from a mobile phone the horizontal bar should disappear and only the “hamburger” icon should be displayed. (It's not requested to be clickable since that is solved with JavaScript).

## WEEK 5 PROJECT  - JavaScript DOM and Events.'

The objective of this week project consists of adding a subscription page to the online newspaper developed in week 03, adding a new html file that maintains the aesthetics of the newspaper, its header and footer, and that contains a subscription form for readers. 

## Description

The form must contain the following fields: 
 - Full name, email, password, repeat password, age, telephone number, address, city, postal code and ID. 
 
It must also have a "Submit" button. The design must be responsive, so that from a mobile phone, the fields must be displayed one below the other, but from a tablet or laptop, the fields must be displayed separated into two columns, with the send button at the end of the form and centered in the middle.

Each field should be validated and a descriptive error message must be displayed below it.
Requested validations:
- Full name: It must have more than 6 letters and at least one space in between.
- Email: must have a valid email format.
- Password: At least 8 characters, cotaining letters and numbers.
- Age: Only integer numbers, 18 or above.
- Telephone Number: Number of at least 7 digits, do not accept spaces, hyphens or parentheses.
- Address: At least 5 characters, with letters, numbers and a space in between.
- City: At least 3 characters.
- Post Code: At least 3 characters.
- DNI: 7 or 8 digit number.

The validation of each field must be done in the "blur" event of each field. Furthermore, if any field has a validation error, in the "focus" event of that field the message should disappear because it is assumed that the user is correcting the error.

Pressing the "Submit" button should show a pop-up box with the information loaded in the form in case all the validations have passed. If any validation failed, in addition to showing the error below each field, the error should also be displayed in the pop-up box.

### Bonus task
Add a title to the form that says "HELLO" and that as the "Full Name" field is completed, the title of the form will be modified in real time, while keys are pressed.

## WEEK 6 PROJECT  - JavaScript Async & Storage'
The objective of this week project consists of modifying the online newspaper developed in weeks 03 and 05, so that 
when the "Send" button is clicked, the data loaded in the form is sent to a web server through an HTTP call from JavaScript. Then, a modal should indicate if the form was successful or rejected. 
In addition, the received data must be saved in LocalStorage and reloaded the next time the screen is refreshed.

## Description
In case the data validation is correct, all the form data must be sent to the following URL: 
http://curso-dev-2021.herokuapp.com/newsletter 
Upon receiving the response, a modal must be displayed with a message indicating whether the newsletter subscription was successful or unsuccessful.
If successful, the modal should also show the data received as a response from the HTTP call. 

## Executing 

1. Download the project from this repository.
2. Open the 'index.html' file on your browser.
3. Click on the link for the subscription form., at the bottom of the page. 
4. Fill in the fields. If it doesn't meet the requierements, an error message should appear below each field.
5. Click on the Send Button. If fields passed all validations, and the data loaded in the form was successfully sent to the web server, a modal will show you the information loaded.
In case one or more field haven't passed the validations,and the data was not send, the modal will show you an error message.

You can also access it clicking on its [GithubPage](https://micaela-89.github.io/BaSD-Responsive-Design/)
(instead of downloading the files)


**Author:** Micaela Casais