# UFOs

UFO Sightings with JavaScript

## Purpose/Overview

The request from a client was to display a table organizing UFO data stored as a JavaScript array. The client wanted the ability to filter by multiple criteria creating a dynamic website. The table was created using JavaScript, while HTML/CSS and Bootstrap were used to modify the aesthetics of the website.

## Results

1.) Landing Page :

The landing page will look as below

![image](https://user-images.githubusercontent.com/99941484/169715687-faef0b5a-b37a-42e9-9206-57ecc70f568a.png)

2.) Filters :

UFO sightings can be filtered based on date, city, state, country and shape

![image](https://user-images.githubusercontent.com/99941484/169715879-c6fbeb4b-5c9b-49cf-99d2-b675bd88ce9f.png)

The user can update any one of the filter values or all the filter values and it will dynamically filtyer the data stored in data.js.

a.) Filter By city : Example - Benton

![image](https://user-images.githubusercontent.com/99941484/169715976-b17cb909-f690-4eeb-8ab3-ed4a9e96e084.png)

b.) Filter by Country : Example - us

![image](https://user-images.githubusercontent.com/99941484/169716018-75ecb6ec-297b-4fbc-b76c-ab70d6cb9b19.png)


## Summary

### Drawbacks

1.) The user must know specific dates,country, state,city and shape in order to filter the desired data.
2.) The data is case sensitive.
eg: if the user enter "US" instead of "us' the search wil fail and an empty table will be returned.

### Improvements

1.) The code should account for any extra spaces,unecessary characters at the end of value entered and case sensistivity of the data.

2.) The data should also be filtered on a date range instead of a singular date.




