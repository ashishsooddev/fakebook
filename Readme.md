# Fakebook – Assignment 3

## Overview

This project is a simple web application that simulates a basic social media posting system. Users can create posts with text and images, and view them in a feed. It also includes a user profile modal that displays account information.

## Features

* Create posts with text and/or images
* Prevent empty posts (no text and no image)
* Display posts with user name and date
* Upload and preview images in posts
* User profile modal with account details
* Navigation bar with menu buttons

## Technologies Used

* HTML
* CSS
* JavaScript (ES Modules)
* Node.js
* Express

## Project Structure

```
project/
│
├── server.js
├── package.json
│
└── public/
    ├── index.html
    ├── style/
    │   └── style.css
    ├── script/
    │   ├── app.js
    │   ├── main.js
    │   ├── classes/
    │   │   ├── User.js
    │   │   └── Subscriber.js
    │   └── utils/
    │       └── date.js
    └── assets/
        └── media/user.png
```
## Classes

### User

* Properties: id, name, userName, email
* Method: getInfo()

### Subscriber (extends User)

* Properties: pages, groups, canMonetize
* Method: getInfo() (extends base class method)

## Notes

* The project uses ES Modules (import/export)
* A server is required to run the project correctly
* All posts are stored temporarily (no database)

## Author

Ashish Sood
