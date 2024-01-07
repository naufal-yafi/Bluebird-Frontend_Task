# Frontend React Task

I use React from Vite Typescript with UI Component from Material UI (MUI).  
[🎥 Video Preview App](https://youtu.be/IyI6kwAb6nc)

# Table of Content

- [Frontend React Task](#frontend-react-task)
- [Table of Content](#table-of-content)
  - [Technology Used](#technology-used)
  - [Requirements](#requirements)
  - [Preview App](#preview-app)
  - [Task](#task)
    - [1. Home Page](#1-home-page)
      - [1.1 Category list](#11-category-list)
      - [1.2 Vehicle list](#12-vehicle-list)
    - [2. Search Page](#2-search-page)
    - [3. Vehicle Detail Page](#3-vehicle-detail-page)
      - [3.1. This page will display if the user clicks on](#31-this-page-will-display-if-the-user-clicks-on)
    - [My Book Page](#my-book-page)
    - [Wishlist Page](#wishlist-page)

## Technology Used

Technology: [React + Vite + Typescript](https://vitejs.dev/guide/)  
UI Component: [Material UI](https://mui.com/material-ui/)

[[Table of Content](#table-of-content)]

## Requirements

[✓]  Redux  
[✓]  React Hook (useState, useEffect, useRef)  
[✕]  Unit Test (coverage 50%)  
[✕]  Hybrid App SSR and CSR _(big plus)_  
[✕]  AMP Pages _(big plus)_  

[[Table of Content](#table-of-content)]

## Preview App

[🎥 Video Preview App](https://youtu.be/IyI6kwAb6nc)

[[Table of Content](#table-of-content)]

## Task

### 1. Home Page

[✓] The page should get data from the API below to populate 2 sections  
[✓] The menu bar should always hang on top of the page

#### 1.1 Category list

[✓] Should be able to slide/wipe  
[✓] Should display category images from API  
[✓] Should display its name  

#### 1.2 Vehicle list

[✓] Should display unique random vehicle vehicles and image  
[✓] Should display like status (love icon)

[[Table of Content](#table-of-content)]

### 2. Search Page

[✓]  In the beginning, the page displays a search text box  
[✓]  When the user types vehicle in the search text box, vehicles detail displayed

[[Table of Content](#table-of-content)]

### 3. Vehicle Detail Page

[✓] The share button and like button should be able to use. No need to get/update data from API  
[✓] The button “share” will copy the URL to the clipboard and the user can paste it later
[✓] The button “Like” will add the vehicle to the list of wishlist vehicles. Allowed to store in state management  
[✓] The button “Book” will add the vehicle to the list of purchased history. Allowed to store in state management

#### 3.1. This page will display if the user clicks on

[✓] One of the vehicles listed on the home page  
[✓] One of the vehicles on the search result page  
[✓] One of the vehicles listed on the MyBook history page  
[✓] One of the vehicles listed on the wishlist page  

[[Table of Content](#table-of-content)]

### My Book Page

[✓] This page will display if the user clicks on the MyBook menu at the above navigation on the Home page  
[✓] The list of booked vehicles will grow if the use clicks “Book” on the vehicle detail page  
[✓] If the user clicks on one of the vehicles on the list it will bring to the detail vehicle page    
[✓] The back button will bring you back to the previous page  

[[Table of Content](#table-of-content)]

### Wishlist Page

[✓] This page will display if the user clicks on the Wishlist menu at the bottom navigation on
the Home page  
[✓] The list of wishlist vehicles will grow if use click “Like” on the love icon or vehicle detail 
page  
[✓] If the user clicks on one of the vehicles on the list it will bring to the detail vehicle page  
[✓] The design is similar to the Purchase History page with the title “Wishlist

[[Table of Content](#table-of-content)]
