# Bike Store

Develop an Express.js application using TypeScript to manage a Bike Store. The app integrates MongoDB (via Mongoose) for data storage and ensures data integrity through schema validation.

## **Features**

- Manage **Products** (Bikes) and **Orders** using CRUD operations.
- Maintain inventory integrity with real-time stock updates.
- Validate and handle errors with user-friendly responses.
- Calculate total revenue from orders using MongoDB aggregation.

##Endpoints

1. Product (Bike) Management
   - Create a Bike
   - URL: /api/create-products
   - Method: POST
   - Request Body:
     ![alt text](image.png)
     ##Get All Bikes

- URL: /api/products
- Method: GET

      # Get a Specific Bike

  URL: /api/get-products/:userId
  Method: GET
  Response: Details of the requested bike.

# Update a Bike

- URL: /api/update-products/:userId
- Method: PUT
- Request Body: Fields to update (e.g., price, quantity).
- Response: Updated bike details.
  # Delete a Bike
- URL: /api/delete-products/:userId
- Method: DELETE
- Response: Confirmation of deletion.

## Order

- Create an Order
- URL: /api/orders
- Method: POST
- Request Body:

{
"email": "customer@example.com",
"product": "648a45e5f0123c45678d9012",
"quantity": 2,
"totalPrice": 2400
}

### Calculate Revenue

- URL: /api/orders/revenue
- Method: GET

  # Order Models

  email (string): Customer's email.
  product (ObjectId): ID of the ordered bike.
  quantity (number): Number of bikes ordered.
  totalPrice (number): Total cost of the order.
  Error Handling
  All errors follow a standardized response format:

{
"message": "Validation failed",
"success": false,
"error": {
"name": "ValidationError",
"errors": {
"fieldName": {
"message": "Error message",
"type": "Validation type"
}
}
},
"stack": "Error stack trace"
}

## Revenue Calculation

Revenue is calculated by aggregating the totalPrice from all orders:

- Endpoint: /api/orders/revenue
- Method: GET
  Response:

{
"message": "Revenue calculated successfully",
"status": true,
"data": {
"totalRevenue": 3600
}
}
