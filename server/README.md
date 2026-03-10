# OurEstate API Documentation

## Introduction
OurEstate is a cutting-edge real estate management system designed to provide a seamless experience for property managers, owners, and tenants. This documentation covers all key features, setup instructions, and API endpoints for effective implementation.

## Key Features
- **Property Management:** Easily add, update, and delete property listings.
- **User Management:** Handle user registration, authentication, and role assignments.
- **Search and Filters:** Robust search functionality with advanced filters for optimized results.
- **Booking Management:** Manage property bookings, schedules, and tenant agreements.
- **Notifications:** Automated notifications for users regarding their bookings and inquiries.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (version 4.0 or higher)
- Git (for version control)

### Installation Steps
1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/dinnu2003/OurEstate.git  
   cd OurEstate/server  
   ```

2. **Install Dependencies**  
   ```bash  
   npm install  
   ```

3. **Configuration**  
   - Create a `.env` file based on the `.env.example` file to set up database credentials and other environment settings.

4. **Run the Application**  
   ```bash  
   npm start  
   ```  
   Your server should now be running at `http://localhost:3000`.

## API Endpoints
### Authentication
- **POST /api/auth/register**  
  - Register a new user  
  - Request Body: `{ "username": "example", "password": "example" }`  
  
- **POST /api/auth/login**  
  - Login existing user  
  - Request Body: `{ "username": "example", "password": "example" }`

### Properties
- **GET /api/properties**  
  - Retrieve a list of properties  
  - Response: An array of property objects

- **POST /api/properties**  
  - Create a new property listing  
  - Request Body: `{ "title": "example", "description": "example", "price": 100000 }`

- **GET /api/properties/:id**  
  - Retrieve a single property by ID

- **PUT /api/properties/:id**  
  - Update a property's details

- **DELETE /api/properties/:id**  
  - Delete a property listing

### Bookings
- **GET /api/bookings**  
  - Retrieve all bookings for the authenticated user

- **POST /api/bookings**  
  - Create a new booking for a property

## Usage Examples
```bash
# Example of creating a new property
curl -X POST http://localhost:3000/api/properties \
-H "Content-Type: application/json" \
-d '{"title": "Luxury Apartment", "description": "Spacious and modern", "price": 250000}'
```

## Contributing
We welcome contributions! Please submit a pull request or open an issue to discuss potential improvements or new features.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.