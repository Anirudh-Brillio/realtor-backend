## API Endpoints

### Get All Properties

- **URL:** `/Property`
- **Method:** GET
- **Description:** Fetches all properties from the database.
- **Response:**
  ```json
  {
    "message": "Data fetched successfully",
    "data": [...]
  }
### Add a New Property
- **URL:** /Property
- **Method:** POST
- **Description:** Adds a new property to the database.
- **Request Body:**
```json
Copy code
{
  "category": "string",
  "title": "string",
  "price": "number",
  "quantity": "number",
  "location": "string",
  "details": {
    "id": "number",
    "title": "string",
    "size": "string",
    "bedrooms": "number",
    "bathrooms": "number",
    "year_built": "number",
    "amenities": ["string"],
    "description": "string",
    "nearby_schools": ["string"],
    "transportation": "string",
    "photos": ["string"]
  }
}
Response:
json
Copy code
{
  "message": "Data added successfully",
  "data": {...}
}
```
## Get Properties Grouped by Unique Categories
- **URL:** /getByUniqueCategory
- **Method:** GET
- **Description:** Fetches all properties and groups them by unique categories.
- **Response:**
json
```
{
  "message": "Properties fetched and grouped by category successfully",
  "data": {
    "category1": [...],
    "category2": [...],
    ...
  }
}
```
### Middleware
CORS: Enabled using cors package to allow cross-origin requests.
JSON Parsing: Enabled using express.json() middleware to parse JSON request bodies.
Error Handling
All endpoints handle errors gracefully and return appropriate error messages with status codes.

## Usage
Get All Properties
Request: Send a GET request to /Property.
Response: Returns a list of all properties in the database.

## Add a New Property
Request: Send a POST request to /Property with the property details in the request body.
Response: Returns the added property data.
```{
  "category": "New Listings",
  "title": "Beautiful Family Home",
  "price": 250000,
  "quantity": 1,
  "location": "New York, NY",
  "details": {
    "id": 1,
    "title": "Beautiful Family Home",
    "size": "2500 sq ft",
    "bedrooms": 4,
    "bathrooms": 3,
    "year_built": 2010,
    "amenities": ["Pool", "Garage"],
    "description": "A beautiful family home with spacious rooms and modern amenities.",
    "nearby_schools": ["School A", "School B"],
    "transportation": "Close to public transport",
    "photos": ["https://via.placeholder.com/400x200", "https://via.placeholder.com/400x200"]
  }
}'
```
Get Properties Grouped by Unique Categories
Request: Send a GET request to /getByUniqueCategory.
Response: Returns properties grouped by their unique categories.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Built with Node.js, Express, and MongoDB.
Inspired by real estate management systems.
