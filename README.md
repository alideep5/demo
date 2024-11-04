# OrderApp

OrderApp is a demo application where users can sign up, create shops, and add products to their shops. Users can browse products from various shops and make purchases. Users and shop owners can also view their order history.

## Features

- User registration and login
- Shop creation and management
- Product addition and management
- Browse products from different shops
- Purchase products
- View order history

## Getting Started

Follow these steps to run the OrderApp using Docker. The Docker Compose file will set up the necessary services, including pgAdmin, PostgreSQL, and the OrderApp container.

### Step 1: Install Docker

Ensure that Docker is installed on your machine. You can download and install Docker from the [official Docker website](https://www.docker.com/get-started).

### Step 2: Clone the Repository

Clone the OrderApp repository to your local machine by running:

```bash
git clone https://github.com/alideep5/demo.git
cd demo
```

### Step 3: Run the Application

```bash
docker-compose up -d
```

### Step 4: Access the Application

Now, open your browser and navigate to the following URLs:

- For the OpenAPI documentation: [http://localhost:8888/api-docs](http://localhost:8888/api-docs)
- For accessing pgAdmin: [http://localhost:5050](http://localhost:5050)  
  (Username: `admin@admin.com`, Password: `admin`)
