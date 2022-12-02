# Development

### Link to Deployed Website

`https://stonedstallion420.github.io/development`

### Goal and Value of the Application

The goal of this application is a one-stop-shop for coffee pods. It provides significant value for coffee lovers who want to keep track of their favorite flavors.

### Usability Principles Considered

The application is organized so that the coffee pods are the center of attention. Each pod has the same structure so that users can compare corresponding information between two pods. Settings for content organization reside in a small sidebar to the left of the coffee pods. The sidebar is visible but small enough to not be a distraction.

### Organization of Components

I added two components in addition to the App component: Filterbox and Pod. Filterbox is a component for the checkboxes for the filtering categories. This was used to avoid redundant code. The Pod component represents each pod displayed in the application.

### How Data is Passed Down Through Components

Data is passed down through components using props. For example, the Filterbox component takes four props, which include the category to filter on.

### How the User Triggers State Changes

The user triggers filtering and sorting changes when they click the checkboxes in the left sidebar. Filtering changes occur by maintaing a dictionary of active categories for each filter type. Sorting changes occur by updating the category to sort on. Lastly, changes in the favorites price aggregator occur by maintaining a dictionary that maps coffee pods to boolean values that indicate whether they are favorites.
