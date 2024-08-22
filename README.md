# Text Encryptor

## Description

The ***Text Encryptor*** is a simple web application designed to encrypt and decrypt text using a basic character substitution algorithm. The application accepts text as input, transforms it according to a set of predefined rules, and allows the encrypted or decrypted text to be copied to the clipboard.

## Features

- **Encrypt Text:** Transforms a given text into an encrypted format based on a substitution pattern.
- **Decrypt Text:** Reverts an encrypted text back to its original format.
- **Character Validation:** Accepts only lowercase letters and spaces; displays an error message if invalid characters are entered.
- **Copy to Clipboard:** Allows the resulting text to be copied to the clipboard with a single click.
  
## Project Structure

### Main Files

- **index.html**: Contains the HTML structure of the application.
- **style.css**: Contains the CSS styles that define the appearance of the application.
- **script.js**: CContains the JavaScript logic for encryption, decryption, text validation, and event handling.
  
### HTML Structure

- **Header**: Contains the app logo.
- **Main Section**:
  - ***Prompting Area***: Section to promt the text to be encrypted or decrypted.
  - ***Buttons*** For encrypting, decrypting, and copying the resulting text.
- **Transcryption Section**:
  - ***Results***: Displays the encrypted or decrypted text.
  - ***Copy Button***: PAllows the resulting text to be copied to the clipboard.
  - ***Alerts***: Displays success or error messages when copying text or validating characters.

### CSS Styles

- Defines CSS variables for colors, font sizes, and other styles.
- Provides responsiveness to adapt the interface to different screen sizes (desktop, tablet and mobile).
- Includes animations for alerts and interactive buttons.

### JavaScript Logic

- ***handleEncryptButtonClick***: Function to encrypt the prompted text.
- ***handleDecryptButtonClick***: Function to decrypt the text.
- ***encryptText*** y ***decryptText***: Functions that apply substitution rules for encryption and decryption.
- ***copyToClipboard***: Function to copy the resulting text to the clipboard and display a confirmation alert.
- ***validateInputCharacters*** Validates characters to ensure that only lowercase letters and spaces are used.
  
## Usage Instructions

To be updated once the whole code and the Github Page is set up

## Technologies Used

- ***HTML5*** for the basic document structure.
- ***CSS3:*** for the styling and responsiveness of the interface.
- ***JavaScript:*** for the logic of encryption, decryption, and event handling.

## Autor

This project was developed as part of the Alura + One Oracle Next Education program during 2024.
