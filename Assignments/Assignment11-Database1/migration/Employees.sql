CREATE TABLE IF NOT EXISTS Employees 
(
    EmployeeID 	INT PRIMARY KEY,
    LastName	VARCHAR(255),
    FirstName	VARCHAR(255),
    BirthDate	TIMESTAMP,
    Photo	VARCHAR(255),
    Notes	TEXT
);

