# Bike Store
# Overview
<div> 
<p> This backend project is made for a bike store. There has collection of bike . User can buy own choise. This project is useful for a bike lover and bike seller. Bike seller can add and show his avilable product and Bike lover can buy his own choise. </p>
</div>

# Features
<div> 
  <ul>
    <li>CRUD operations</li>
    <li>Integration with MongoDB</li>
    <li>Data validation and error handling</li>
    <li>TypeScript type safety</li>
  </ul>
</div>

### Tech Stack
<div> 
    <ul>
    <li>Node.js: For building the server.</li>
    <li>Express: For routing and middleware.</li>
    <li>Mongoose: For MongoDB object modeling.</li>
    <li>TypeScript: For type safety and better code quality.</li>
    <li>Others (e.g., dotenv, Jest for testing, etc.).</li>
  
  </ul>
</div>

### Prerequisites
<div> 
    <ul>
    <li>Node.js ("version": "1.0.0")</li>
    <li>npm</li>
    <li>MongoDB (cloud-based)</li>
    <li>environment variables ( MongoDB connection string, port)</li>

  </ul>
</div>

### Project Structure
<div> 
 src/
    ├── config     # Business logic
    ├── modules/    # Mongoose schemas and models
          ├── product
          ├── order
    ├── app.ts    
    ├── server.ts   
    
</div>


### API Documentation

### <h1 style= "font: 15px; "> Bike model </h1>
### 1. Create a Bike
<a> https://bike-store-kappa.vercel.app/api/products/addProduct </a>
### 2. Get all Bike
<a> https://bike-store-kappa.vercel.app/api/products </a>
### 3. Get a Bike by ID
<a>https://bike-store-kappa.vercel.app/api/products/:id </a>
### 4. Update a Bike by ID
<a>https://bike-store-kappa.vercel.app/api/products/:id </a>
### 5. Delete a Bike by ID
<a>https://bike-store-kappa.vercel.app/api/products/:id </a>


## <h1 style= "font: 15px; "> Order model </h1>
### 6. Order a Bike
<a> https://bike-store-kappa.vercel.app/api/orders </a>
### 7. Calculate Revenue from Orders (Aggregation)
<a> https://bike-store-kappa.vercel.app/api/orders/revenue </a>

