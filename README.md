# **EzShopie**

EzShopie is an e-commerce application that allows users to browse products, manage their shopping cart, and save items to their wishlist. The application features user authentication using Auth0, providing a secure way for users to manage their accounts.

## **Features**
#### **User authentication with Auth0**
##### Browse products
##### Add products to the shopping cart
##### Manage quantities in the cart
##### Remove items from the cart
##### Save items to a wishlist
##### View and manage wishlist items

#### **Technologies Used**
##### React.js
##### Auth0 for authentication
##### Context API for state management (Cart and Wishlist)
##### CSS for styling
##### Node.js and Express (if backend is included)
##### MongoDB (if backend is included)

### **Getting Started**

#### **Prerequisites**
**Make sure you have the following installed:**
Node.js (version 14 or higher),
npm (Node package manager)

### **Installation**

#### Clone the repository:
``` bash
git clone https://github.com/ItsDazai/EzShopie.git
```

### Install dependencies:

#### For the client-side:
```bash
npm install
```

#### Set Up Environment Variables:
Create a .env file in the client directory and add your Auth0 domain and client ID:
```
REACT_APP_AUTH0_DOMAIN=your-auth0-domain
REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
MONGODB_URI=mongodb-uri
JWT_TOKEN=your-secret-key
```
### Run the Application:

**Start the development server:**
```bash
npm start
```

#### **Open your browser:**
Navigate to http://localhost:3000 to view the application.
Usage

##### **User Authentication:** 
Users can log in using their Auth0 credentials.
New users can sign up through Auth0.

##### **Browsing Products:**
Users can view a list of available products.

##### **Managing Cart:**
Users can add products to their cart.
Users can adjust product quantities or remove items from the cart.
The total price and delivery charges are displayed during checkout.

##### **Wishlist Functionality:**
Users can add products to their wishlist.
Users can view their wishlist and add items from there to their cart.

### **Contributing**
Contributions are welcome! If you have suggestions for improvements or new features, feel free to fork the repository and submit a pull request.
