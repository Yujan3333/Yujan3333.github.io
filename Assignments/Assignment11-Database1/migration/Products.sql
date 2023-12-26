CREATE TABLE IF NOT EXISTS Products (
	productid INT PRIMARY KEY,
	productname VARCHAR(255),
	supplierid INT,
	categoryid INT,
	unit VARCHAR(50),
    price DECIMAL(10, 2),
    FOREIGN KEY (supplierid) REFERENCES Suppliers(supplierid),
    FOREIGN KEY (categoryid) REFERENCES Categories(categoryid)
);