# CSV Random Selector

## Description
This application allows you to upload a CSV file, select random records, and display the information of each record in a modal.

## Prerequisites
Before running the application, make sure you have the following installed in your development environment:
- Node.js
- npm or yarn (Node.js package managers)

## Installation
Follow these steps to install the necessary dependencies:

1. Clone this repository:
   ```
   git clone <repository-url>
   cd csv-random-selector
   ```

2. Install project dependencies:

    ```
    npm install
    # or if you prefer using yarn
    yarn
    ```

## Running the Application

To run the application locally, follow these steps:

Start the application in development mode:

    ```
    npm run dev
    # or
    yarn dev
    ```

Open your browser and go to http://localhost:3000 to see the application in action.

## Usage

- Drag and drop a CSV file into the specified area or click to select a file.
- Once the file is loaded, the number of loaded records will appear.
- If there are records available, you can click the "Select Random Record" button to view the information of a record in a modal.
- The modal will display the fields and their respective values of the selected record.

or you have accces for this link [csv-random-selector.vercel.app](csv-random-selector.vercel.app)

## Project Structure

- components/: Contains React components of the application.
- page.tsx: Main pages of Next.js.
- styles/: CSS styles for the application.

## Technologies Used

- React.js
- Next.js
- TypeScript
- react-papaparse
- Framer Motion (for modal animations)

## Contributing

If you want to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature/new-feature).
- Make your changes and commit (git commit -am 'Add new feature').
- Push to the branch (git push origin feature/new-feature).
- Create a new Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

