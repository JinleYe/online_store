
# READ ME (Pixelated Paradise Capstone Project- Backend part):

#ADD LOGO IMAGE!! 


In this segment of the project, you will find all information pertaining to the backend, i.e, the server-side logic that powers the functionality of Pixelated Paradise from behind the scenes... It includes all the code needed to build out the database, server, and application. The backend development will work in tandem with the front end to deliver the final product to the end user.

<br>



## Table of Contents:
- [UML](#unified-modelling-language-diagrams-uml)
- [ERD](#entity-relationship-diagrams-erd)
- [Minimum Viable Product (MVP)](#minimum-viable-product-mvp)
- [Extensions](#extensions)
- [Plain Old Java Objects (POJOs)](#plain-old-java-objects-pojos)
- [Running the API - List of Possible Commands (CRUD Functionality):](#running-the-api---list-of-possible-commands-crud-functionality)
- [Testing:](#testing)
- [Further Implementations & Extensions](#further-implementations--extensions)
- [Acknowledgements](#acknowledgments)


## Project Structure:
### Unified Modelling Language Diagrams (UML):

<br>
MVP:

![MVP UML]( )

<br>

Extension:

![Extension UML]( )


### Entity Relationship Diagrams (ERD):
<br>
MVP:

![MVP ERD]( )

<br>
Extension:

![Extension ERD]( )


## Minimum Viable Product (MVP):
For our MVP, we wanted to create an API with full CRUD functionality with 7x classes:
- 
- 
- 


## Extensions:
For our extension, we wanted to expand on the MVP and challenge ourselves with the following extensions:
- X
- Y 
- Z


<br>
## Plain Old Java Objects (POJOs):

This section highlights the POJOS used within the project:

<br>
POJO TABLE:

![POJO Table]( )

<br>

## Running the API - List of Possible Commands (CRUD Functionality):

The following table shows a list of possible commands used alongside: localhost:8080/ ...

<br/>
User endpoints: 

| HTTP Request Path                                                        | Request Type | Description                                      |
|:-------------------------------------------------------------------------|:-------------|:-------------------------------------------------|
| `.../users`  | `GET` | Get All User Entries |
| `.../users` | `POST` | Post/Create User |
| `.../users{id}` | `PUT` | Update User by id |
| `.../users{id}` | `DELETE` | Delete User by id |


Admin endpoints: 
| HTTP Request Path                                                        | Request Type | Description                                      |
|:-------------------------------------------------------------------------|:-------------|:-------------------------------------------------|
| `.../admins`  | `GET` | Get All Admin Entries |
| `.../admins/{id} ` | `GET` | Get Admin by Id |
| `.../admins` | `POST` | Post/Create Admin |
| `.../admins{id}` | `PUT` | Update Admin by id |
| `.../admins{id}` | `DELETE` | Delete Admin by id |


Product endpoints: 
| HTTP Request Path                                                        | Request Type | Description                                      |
|:-------------------------------------------------------------------------|:-------------|:-------------------------------------------------|
| `.../products`  | `GET` | Get All Product Entries |
| `.../products/{id} ` | `GET` | Get Product by Id |
| `.../products?title={title} ` | `GET` | Get Product by title|
| `.../products?description={description} ` | `GET` | Get Product by description|
| `.../products?price={price}` | `GET` | Get Product with a price less than |
| `.../products?category={category}` | `GET` | Get Product from a certain category |
| `.../products` | `POST` | Post/Create Product |
| `.../products{id}` | `PUT` | Update Product by id |
| `.../products{id}` | `DELETE` | Delete Product by id |


Customer endpoints: 
| HTTP Request Path                                                        | Request Type | Description                                      |
|:-------------------------------------------------------------------------|:-------------|:-------------------------------------------------|
| `.../customers`  | `GET` | Get All Customer Entries |
| `.../customers/{id} ` | `GET` | Get Customer by Id |
| `.../customers` | `POST` | Post/Create Customer |
| `.../customers/{customerId}/{productId}/{num}` | `POST` | Post product to customer cart |
| `.../customers/remove/{customerId}/{productId}` | `POST` | Remove product from customer cart |
| `.../customers{id}` | `PUT` | Update Customer by id |
| `.../customers{id}` | `DELETE` | Delete Customer by id |

Order endpoints: 
| HTTP Request Path                                                        | Request Type | Description                                      |
|:-------------------------------------------------------------------------|:-------------|:-------------------------------------------------|
| `.../orders`  | `GET` | Get All Order Entries |
| `.../orders/{id} ` | `GET` | Get Order by Id |
| `.../orders/timeofpurchase?timeofpurchase={Year-Month-Day} ` | `GET` | Get Order by time of purchase |
| `.../orders/search/status={status} ` | `GET` | Get Order by order status |
| `.../orders` | `POST` | Post/Create Order |
| `.../orders{id}` | `PUT` | Update Order by id |
| `.../orders{id}` | `DELETE` | Delete Order by id |


Review endpoints: 
| HTTP Request Path                                                        | Request Type | Description                                      |
|:-------------------------------------------------------------------------|:-------------|:-------------------------------------------------|
| `.../reviews`  | `GET` | Get All Review Entries |
| `.../reviews/{id} ` | `GET` | Get Review by Id |
| `.../reviews?title={title} ` | `GET` | Get Review by title|
| `.../reviews?description={description} ` | `GET` | Get Review by description|
| `.../reviews?dateposted ={Year-Month-Day} ` | `GET` | Get Review by datePosted|
| `.../reviews?rating={rating} ` | `GET` | Get Review by rating|
| `.../reviews?isVerifiedPurchase=false={boolean} ` | `GET` | Get Review by whether it is from a verified purchase|
| `.../reviews` | `POST` | Post/Create Review |
| `.../reviews{id}` | `PUT` | Update Review by id |
| `.../reviews{id}` | `DELETE` | Delete Review by id |



<br>

## Testing:
The project involved different forms of testing including unit testing and testing via Postman. 

Unit testing: This process allowed for the testing of the smallest code in the system that could be logically isolated i.e., the methods and derived queries. 

Example of unit testing: 

<br>
Unit testing:

![Unit testing]()

<br>

Postman testing: This application was the HTTP client that tested HTTP requests, using a graphical user interface, through which we obtained different types of responses that needed to be subsequently validated.  

Example of Postman testing: 

<br>
Postman:

![Postman Testing]()

<br>

This process allowed us to evaluate and verify that our Pixelated Paradise API did what it was supposed to do; it prevented bugs and improved performance.


## Further Implementations:
Here are a few ideas on how we would like to expand on this API:
- X
- Y
- Z
<br/>
Thank you for reading this guide!

## Acknowledgments:
We would like to thank the Bright Network Technology Academy team and especially our trainers Anna and Richard!



