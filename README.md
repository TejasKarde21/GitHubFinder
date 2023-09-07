# GitHubFinder


Here I using document.getElementById() to retrieve elements from your HTML by their respective IDs.
Function getUser(searchValue):
This function is responsible for fetching user data from the GitHub API and displaying it on your webpage.
It first determines the appropriate API URL based on whether a search value is provided or not.
It uses the fetch API to make a GET request to the GitHub API.
It handles the returned promise by converting it to JSON format, and then processes the data.
If the user is not found, it displays an error message. Otherwise, it populates the cardContainer with the user's information.
Search Button Event Listener:
This event listener listens for a click event on the search button (SearchBtn). When clicked, it prevents the default form submission behavior, gets the value from the search bar, calls the getUser() function with that value, and then resets the search value.

Last:-
Night Mode Toggle Event Listener:

javascript
This event listener is triggered when the night mode toggle (nightModeToggle) is changed. It toggles the class night-mode-active on various elements. This class is used to apply night mode styles. 
It gets the body element (document.body) and an array of elements to toggle.
It toggles the night-mode-active class on the body element.
It iterates through each element in elementsToToggle and toggles the night-mode-active class on them as well.
