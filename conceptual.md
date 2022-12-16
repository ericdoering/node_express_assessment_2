### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

A JWT is known as a "JSON Web Token". A JWT, when assigned to a user, will allow them to access multiple points in an application without continuely requiring seperate validation.

- What is the signature portion of the JWT?  What does it do?

The signature of the JWT is the portion of the token that securely validates the token. The signature is calculated by encoding the header and payload using Base64url Encoding.

- If a JWT is intercepted, can the attacker see what's inside the payload?

Unless the attacker is able to decode the token's signature, the attacker will not be able to see what is inside the payload

- How can you implement authentication with a JWT?  Describe how it works at a high level.

When a JWT is authenticated, the user successfully logs in using their credentials, a JSON Web Token will be returned and must be saved locally (typically in local or session storage, but cookies can also be used), instead of the traditional approach of creating a session in the server and returning a cookie

- Compare and contrast unit, integration and end-to-end tests.

Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. Integration testing is testing in which the different units, modules or components of a software application are tested as a combined entity. End-to-end testing is a technique that tests the entire software product from beginning to end to ensure the application flow behaves as expected. 

- What is a mock? What are some things you would mock?

Mocking is typically used for unit testing. Mocking is the process of mimicking and/or to create a fake external dependency so that the test can proceed to run without relying on external code and tools. A common application would be mocking an external api. The advantages are that you can test only the code that you intend on expecting to fail. Other advantages are that if your API is a paid service you don't have to call it unecessarily when you are testing.

- What is continuous integration?

Continuous Integration is the process of testing an application every time a new addition of code is added. Every new revision triggers automatic building and testing.

- What is an environment variable and what are they used for?

Environment variables are predetermined values that are typically used to provide the ability to configure a value in your code from outside of your application.

- What is TDD? What are some benefits and drawbacks?

"TDD" stands for test driven development. It is the process of testing for a piece of the application you would like for it to execute. When it initially fails, the actually code will be then produced and then tested again until it passes. The process will then repeat until the entire application is complete.

- What is the value of using JSONSchema for validation?

JSONSchemas allow for the application to check and validate data before it is allowed to be processed by the application. An example would be book data to be checked using JSONSchema. The schema could make sure that a book has a title, author, and page count before it is allowed to be saved by the database

- What are some ways to decide which code to test?

If a section of code caluculates something, produces a result, changes/alters something, deletes something, introduces something, or passes/fails, etc., you are most likely going to want to test it.

- What does `RETURNING` do in SQL? When would you use it?

The RETURNING clause allows you to retrieve values of columns (and expressions based on columns) that were modified by an insert, delete or update. Without RETURNING you would have to run a SELECT statement after the DML statement is completed, in order to obtain the values of the changed columns. 

- What are some differences between Web Sockets and HTTP?

The main difference is that Web Sockets stream information in realtime where as HTTP must wait for a full request-response cycle. WebSocket is a bidirectional communication protocol that can send the data from the client to the server or from the server to the client by reusing the established connection channel, whereas The HTTP protocol is a unidirectional protocol that works on top of TCP protocol which is a connection-oriented transport layer protocol, we can create the connection by using HTTP request methods after getting the response HTTP connection get closed. Web sockets tend to be faster than HTTP.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

I personally preferred using Flask. The syntax is simpler and the use of an ORM makes it easier to get the data you want. 