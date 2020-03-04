-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT p."ProductName", c."CategoryName"
FROM "Product" AS p
JOIN "Category" AS c
ON c."id" = p."CategoryId"

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT o."Id", s."CompanyName", o."OrderDate"
FROM "order" AS o
JOIN "shipper" AS s
ON o."ShipVia" = s."id"
where o."OrderDate" < "2012-08-09"

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select p."ProductName", o."Quantity"
from "product" AS p
join "orderDetail" AS o
on p."Id" = o."ProductId"
where o."OrderId" = 10251

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT o."Id" OrderId,  c."CompanyName",  e."LastName" EmployeeLastName
FROM "order" AS o
JOIN "customer" AS c on c."id" = o."CustomerId"
JOIN "Employee" AS e on e."id" = o."EmployeeId"

-- Stretch 
-- Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 8 records.
SELECT CategoryName, count(*) as count
FROM Categories
JOIN Products
ON "Categories"."CategoryID" = "Products"."CategoryID"
GROUP BY 1;


-- Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
SELECT O."OrderID", count(d."Quantity") as ItemCount
FROM Orders AS o
JOIN OrderDetails AS d
ON o."OrderID" = d."OrderID"
GROUP BY 1; 
