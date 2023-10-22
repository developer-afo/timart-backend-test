# Timart Project

This readme file provides instructions on how to set up and run this timart project with a seed file named `seed.js`. Please follow the steps below to get started.

## Prerequisites
- Node.js installed on your machine
- Yarn package manager installed on your machine

## Step 1: Create .env File
1. Create a .env file in the root directory of the project.

2. Copy the content from env.sample and paste it into the newly created .env file.

3. Update the database configuration in the .env file with your database credentials.

## Step 2: Create Database
1. Create a database named `timartdb` in MYSQL database.

## Step 3: Install Packages
- Run the following command to install the necessary packages
   ```
   yarn
   ```

## Step 4: Migrate Database
1. Open the root directory of the project in your terminal.
2. Run the following command to migrate your database:
   ```
   yarn start
   ```

## Step 5: Seed Data
1. After successfully migrating the database, run the following command to create sample users and orders:
   ```
   yarn seed
   ```
   This will generate 1000 sample users and 5000 sample orders for random users.

## Step 6: Start the Project
1. Once the seeding process is complete, start the project by running the following command:
   ```
   yarn start
   ```

   This command will start your Node/Express server and make it accessible at port 3000.


## Additional Information

### Answer to Question Two, Section One
The answer to task 1, question three can be found in the `index.js` file located in the root directory of this project.

### API Documentation
For detailed API documentation, please refer to [https://documenter.getpostman.com/view/25069630/2s9YRCVWL4](https://documenter.getpostman.com/view/25069630/2s9YRCVWL4).

