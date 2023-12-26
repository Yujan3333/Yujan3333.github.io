CREATE TABLE IF NOT EXISTS Orders (
	orderid INT PRIMARY KEY,
	customerid INT,
	employeeid INT,
	orderdate TIMESTAMP,
	shipperid INT,
	FOREIGN KEY (customerid) REFERENCES Customers(customerid),
	FOREIGN KEY (employeeid) REFERENCES Employees(employeeid),
	FOREIGN KEY (shipperid) REFERENCES Shippers(shipperid)
);