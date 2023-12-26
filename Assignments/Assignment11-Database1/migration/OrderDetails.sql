CREATE TABLE IF NOT EXISTS OrderDetails 
(
    OrderDetailID	INT PRIMARY KEY,
    OrderID	INT,
    ProductID INT,
    Quantity INT CHECK (Quantity >= 0),
	FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
	FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);