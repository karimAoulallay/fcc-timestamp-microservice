## Timestamp Microservice (freeCodeCamp Back End and APIs)

This project implements a simple "Timestamp Microservice" as part of the freeCodeCamp Back End Development and APIs course. It uses Node.js and Express.js to handle requests for a specific date or the current date, returning its Unix timestamp and UTC representation in JSON format.

**Key Features:**

- Retrieves the current date's timestamp and UTC string if no date is specified in the request.
- Handles requests with Unix timestamps as the date parameter.
- Accepts valid dates in "YYYY-MM-DD" format and returns their corresponding timestamps and UTC strings.
- Provides informative error messages for invalid date inputs.

**Getting Started:**

1. **Prerequisites:** Node.js and npm or yarn installed on your system.
2. **Clone this repository:** `git clone git@github.com:karimAoulallay/fcc-timestamp-microservice.git`
3. **Install dependencies:** `npm install` or `yarn install`
4. **Run the project:** `npm start` or `yarn start`
5. **Test the API:**

   - **Current date:** Access `http://localhost:3000/api/` in a browser or API testing tool.
   - **Specific date:** Access `http://localhost:3000/api/<date>` with a valid date (e.g., `http://localhost:3000/api/2024-02-22`) or Unix timestamp (e.g., `http://localhost:3000/api/1645453200`).

**Response Examples:**

- **Current date:**

```json
{
  "unix": 1676989520,
  "utc": "Thu, 22 Feb 2024 23:58:40 GMT"
}
```

- **Specific date:**

```json
{
  "unix": 1580214400,
  "utc": "Wed, 03 Feb 2021 00:00:00 GMT"
}
```

- **Invalid date:**

```json
{
  "error": "Invalid Date"
}
```
