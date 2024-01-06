# Frontend React Task

# Table of Content

- [Frontend React Task](#frontend-react-task)
- [Table of Content](#table-of-content)
  - [Information](#information)
    - [Developer](#developer)
    - [Technology Used](#technology-used)
  - [Requirements](#requirements)
  - [Preview App](#preview-app)
  - [Preview Test](#preview-test)
  - [Task](#task)
    - [Home Page](#home-page)
      - [1. The page should get data from the API below to populate 2 sections](#1-the-page-should-get-data-from-the-api-below-to-populate-2-sections)
      - [2. Category list](#2-category-list)
      - [3. Vehicle list](#3-vehicle-list)
      - [4. The menu bar should always hang on top of the page](#4-the-menu-bar-should-always-hang-on-top-of-the-page)
    - [Search Page](#search-page)
      - [1. In the beginning, the page displays a search text box](#1-in-the-beginning-the-page-displays-a-search-text-box)
      - [2. When the user types vehicle in the search text box, vehicles detail displayed](#2-when-the-user-types-vehicle-in-the-search-text-box-vehicles-detail-displayed)
    - [Vehicle Detail Page](#vehicle-detail-page)
      - [1. This page will display if the user clicks on](#1-this-page-will-display-if-the-user-clicks-on)
      - [2. The share button and like button should be able to use. No need to get/update data from API](#2-the-share-button-and-like-button-should-be-able-to-use-no-need-to-getupdate-data-from-api)
      - [3. The button “share” will copy the URL to the clipboard and the user can paste it later](#3-the-button-share-will-copy-the-url-to-the-clipboard-and-the-user-can-paste-it-later)
      - [4. The button “Like” will add the vehicle to the list of wishlist vehicles. Allowed to store in state management](#4-the-button-like-will-add-the-vehicle-to-the-list-of-wishlist-vehicles-allowed-to-store-in-state-management)
      - [5. The button “Book” will add the vehicle to the list of purchased history. Allowed to store in state management](#5-the-button-book-will-add-the-vehicle-to-the-list-of-purchased-history-allowed-to-store-in-state-management)
    - [My Book Page](#my-book-page)
      - [1. This page will display if the user clicks on the MyBook menu at the above navigation on the Home page](#1-this-page-will-display-if-the-user-clicks-on-the-mybook-menu-at-the-above-navigation-on-the-home-page)
      - [2. The list of booked vehicles will grow if the use clicks “Book” on the vehicle detail page](#2-the-list-of-booked-vehicles-will-grow-if-the-use-clicks-book-on-the-vehicle-detail-page)
      - [3. If the user clicks on one of the vehicles on the list it will bring to the detail vehicle page](#3-if-the-user-clicks-on-one-of-the-vehicles-on-the-list-it-will-bring-to-the-detail-vehicle-page)
      - [4. The back button will bring you back to the previous page](#4-the-back-button-will-bring-you-back-to-the-previous-page)

## Information

### Developer

Muhammad Naufal Yafi'

### Technology Used

Technology: [React + Vite + Typescript](https://vitejs.dev/guide/)  
UI Component: [Material UI](https://mui.com/material-ui/)

## Requirements

[✓]  Redux  
[✓]  React Hook (useState, useEffect, useRef)  
[✕]  Unit Test Jest + Enzyme (coverage 50%)  
[✕]  Hybrid App SSR and CSR _(big plus)_  
[✕]  AMP Pages _(big plus)_  

## Preview App

## Preview Test

## Task

### Home Page

#### 1. The page should get data from the API below to populate 2 sections
[✓] Fetch categories and a list of vehicles

#### 2. Category list
[✓] Should be able to slide/wipe  
[✓] Should display category images from API  
[✓] Should display its name  

#### 3. Vehicle list
[✓] Should display unique random vehicle vehicles and image  
[✓] Should display like status (love icon)
   
#### 4. The menu bar should always hang on top of the page
[✓] App bar position fixed

### Search Page

#### 1. In the beginning, the page displays a search text box
[✓] Display search box

#### 2. When the user types vehicle in the search text box, vehicles detail displayed
[✕] Realtime search get api

### Vehicle Detail Page

#### 1. This page will display if the user clicks on
[✓] One of the vehicles listed on the home page  
[✓] One of the vehicles on the search result page  
[✓] One of the vehicles listed on the MyBook history page  
[✓] One of the vehicles listed on the wishlist page  

#### 2. The share button and like button should be able to use. No need to get/update data from API
[✓] Share link should be able to use and not get/update data from API

#### 3. The button “share” will copy the URL to the clipboard and the user can paste it later
[✓] Copy URL to Clipboard

#### 4. The button “Like” will add the vehicle to the list of wishlist vehicles. Allowed to store in state management
[✓] Store wishlist data to redux

#### 5. The button “Book” will add the vehicle to the list of purchased history. Allowed to store in state management
[✓] Store book data to redux

### My Book Page

#### 1. This page will display if the user clicks on the MyBook menu at the above navigation on the Home page
[✓] User click navigation can show this page

#### 2. The list of booked vehicles will grow if the use clicks “Book” on the vehicle detail page
[✓] Data will increase

#### 3. If the user clicks on one of the vehicles on the list it will bring to the detail vehicle page
[✓] Navigate to detail car

#### 4. The back button will bring you back to the previous page
[✓] Button back to home

