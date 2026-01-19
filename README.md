# Day 1: HTTP Fundamentals and REST APIs

## Question 1: What is HTTP and how does it work? Explain the request response cycle.

HTTP stands for HyperText Transfer Protocol. It is an application layer protocol used for communication between a client and a server over the internet. A client can be a browser, mobile application, or any frontend system, and a server hosts resources or APIs.

The request response cycle works as follows. The client sends an HTTP request to the server containing the URL, HTTP method, headers, and an optional body. The server receives the request, processes it according to the route and business logic, and then sends back an HTTP response. The response contains a status code, headers, and an optional response body. After the response is sent, the connection is closed or reused.

---

## Question 2: What are the different HTTP methods GET POST PUT PATCH DELETE and when should each be used?

GET is used to retrieve data from the server. It should not modify server state and is safe and idempotent.

POST is used to create a new resource on the server. Each POST request can create a new entry, so it is not idempotent.

PUT is used to completely replace an existing resource. If the resource exists, it is overwritten. If it does not exist, it may be created depending on implementation.

PATCH is used to partially update an existing resource. Only specific fields are modified.

DELETE is used to remove a resource from the server.

---

## Question 3: Explain HTTP status codes. What is the difference between 2xx 3xx 4xx and 5xx?

HTTP status codes indicate the result of an HTTP request.

2xx status codes indicate success. The request was received and processed correctly. Example includes 200 OK and 201 Created.

3xx status codes indicate redirection. The client must take additional action to complete the request. Example includes 301 Moved Permanently.

4xx status codes indicate client errors. The request was invalid or cannot be processed. Example includes 400 Bad Request and 404 Not Found.

5xx status codes indicate server errors. The server failed to process a valid request. Example includes 500 Internal Server Error.

---

## Question 4: What are HTTP headers? Name some important request and response headers.

HTTP headers are key value pairs that provide metadata about the HTTP request or response.

Common request headers include Authorization, Content Type, Accept, and User Agent.

Common response headers include Content Type, Set Cookie, Cache Control, and Access Control Allow Origin.

---

## Question 5: What is the difference between stateless and stateful protocols? Is HTTP stateless?

A stateless protocol does not store any client information between requests. Each request is independent and contains all the information required to process it.

A stateful protocol maintains information about the client session across multiple requests.

HTTP is a stateless protocol. However, state can be managed using cookies, sessions, or tokens like JWT.

---

## Question 6: Explain idempotency in REST APIs. Which HTTP methods are idempotent?

Idempotency means that making the same request multiple times produces the same result as making it once.

GET, PUT, DELETE, and usually PATCH are idempotent methods.

POST is not idempotent because multiple identical requests can create multiple resources.

---

## Question 7: What is REST? What are the principles of RESTful API design?

REST stands for Representational State Transfer. It is an architectural style for designing network based applications.

The principles of RESTful API design include client server separation, stateless communication, uniform interface, resource based URLs, use of standard HTTP methods, representation of resources using formats like JSON, and cacheable responses.

---

## Question 8: How would you version a REST API? What are the different approaches?

One approach is URL versioning, where the version is included in the URL such as api v1 users. This is the most commonly used approach.

Another approach is header versioning, where the API version is specified in request headers.

Query parameter versioning uses a version parameter in the URL but is generally not recommended.

Content negotiation uses headers to determine the API version and response format.

---

