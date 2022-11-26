-- delete previous records
DROP TABLE IF EXISTS order_items; 
DROP TABLE IF EXISTS orders; 
DROP TABLE IF EXISTS customer; 
DROP TABLE IF EXISTS employee; 
DROP TABLE IF EXISTS product; 
DROP TABLE IF EXISTS branch; 


-- create tables
CREATE TABLE branch(
id INT NOT NULL AUTO_INCREMENT,
Name VARCHAR(45) NOT NULL,
Contact_Number VARCHAR(10) NOT NULL,
Address VARCHAR(255) NOT NULL,
Posting_Date timestamp NOT NULL DEFAULT current_timestamp(),
PRIMARY KEY(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1; 



CREATE TABLE customer(
id INT NOT NULL AUTO_INCREMENT,
First_Name VARCHAR(45) NOT NULL,
Last_Name VARCHAR(45) NOT NULL,
Gender VARCHAR(10) NOT NULL,
Contact_Number VARCHAR(10) NOT NULL,
Password VARCHAR(120) NOT NULL,
Address VARCHAR(255) NULL,
Branch_id INT NOT NULL,
Posting_Date timestamp NOT NULL DEFAULT current_timestamp(),
PRIMARY KEY(id),
FOREIGN KEY(Branch_id) REFERENCES branch(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1; 


CREATE TABLE employee(
id INT NOT NULL AUTO_INCREMENT,
First_Name VARCHAR(45) NOT NULL,
Last_Name VARCHAR(45) NOT NULL,
Contact_Number VARCHAR(10) NOT NULL,
Gender VARCHAR(45) NOT NULL,
Address VARCHAR(255) NOT NULL,
Salary DOUBLE NOT NULL,
manager_id INT,
Branch_id INT NOT NULL,
Posting_Date timestamp NOT NULL DEFAULT current_timestamp(),
PRIMARY KEY(id),
FOREIGN KEY(Branch_id) REFERENCES branch(id),
FOREIGN KEY(manager_id) REFERENCES employee(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1; 



CREATE TABLE orders(
id INT NOT NULL AUTO_INCREMENT,
Quantity DOUBLE NOT NULL,
Total_Cost DOUBLE NOT NULL,
Customer_Id INT NOT NULL,
Employee_id INT NOT NULL,
Posting_Date timestamp NOT NULL DEFAULT current_timestamp(),
PRIMARY KEY(id),
FOREIGN KEY(customer_id) REFERENCES customer(id),
FOREIGN KEY(Employee_id) REFERENCES employee(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1; 



CREATE TABLE product(
id INT NOT NULL AUTO_INCREMENT,
Name VARCHAR(45) NOT NULL,
Price DOUBLE NOT NULL,
Weight DOUBLE NOT NULL,
Posting_Date timestamp NOT NULL DEFAULT current_timestamp(),
PRIMARY KEY(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1; 



CREATE TABLE order_items(
id INT NOT NULL AUTO_INCREMENT,
weight DOUBLE NOT NULL,
cost DOUBLE NOT NULL,
Product_id INT NOT NULL,
Order_id INT NOT NULL,
Posting_Date timestamp NOT NULL DEFAULT current_timestamp(),
PRIMARY KEY(id, Product_id, Order_id),
FOREIGN KEY(Product_id) REFERENCES product(id),
FOREIGN KEY(Order_id) REFERENCES orders(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1; 


-- insert data
INSERT INTO `branch` (`id`, `Name`, `Contact_Number`, `Address`, `Posting_Date`) VALUES
(1, 'Kochchikade', '0317413429', '48, Pallansena road Kochchikade', '2021-07-25 10:25:39'),
(2, 'Negombo', '0314673226', '251,Sea street Negombo', '2021-07-25 12:32:59'),
(3, 'Nuwara Eliya', '0521472183', '74/14, Beddagana road Nuwara Eliya', '2021-07-28 10:24:41'),
(4, 'Anuradhapura', '0250634208', 'Isuru Products, Jaffna junction Anuradhapura', '2021-07-30 17:16:23'),
(5, 'Chilaw', '0320533329', '123/35, Seda Uyana, Kurunegala road Chilaw', '2021-08-02 13:23:02'),
(6, 'Polonnaruwa', '0270941380', '92/6 New Moor street Polonnaruwa', '2021-08-09 13:39:53'),
(7, 'Ratnapura', '0451824124', '95/1 B Jampettah Ln Ratnapura', '2021-08-12 15:50:01'),
(8, 'Gampaha', '0333399599', '123, Galle Face Court 23 Gampaha', '2021-08-15 09:22:56'),
(9, 'Trincomalee', '0268523719', '15 Main street Trincomalee', '2021-08-22 12:13:16'),
(10, 'Vavuniya', '0240194737', '449 Main street Vavuniya', '2021-08-26 10:33:40'),
(11, 'Jaffna', '0212701621', '70 De Saram road, Jaffna', '2021-09-01 10:48:11'),
(12, 'Mannar', '0239774329', '163 Lower street Mannar', '2021-09-16 16:45:06'),
(13, 'Kalutara', '0340627810', '56, Sumudu Place, Asiri Uyana Kalutara', '2021-09-20 11:08:26'),
(14, 'Puttalam', '0323012247', '232 Baseline road Puttalam', '2021-10-01 14:07:16'),
(15, 'Kegalle', '0351374260', '	452A  Main street Kegalle', '2021-10-03 12:02:56'),
(16, 'Avissawella', '0360348417', '39, Rathnapura road Avissawella', '2021-10-17 13:38:40'),
(17, 'Kurunegala', '0371612671', '41nd Floor, Sarasavi Building, Kurunegala', '2021-10-20 08:29:54'),
(18, 'Matara', '0410912451', 'South Lake Resorts Kathaluwa Ahangama Matara', '2021-10-22 20:18:27'),
(19, 'Hambantota', '0476784284', '72-74 Vauxhall Lane Hambantota', '2021-11-09 14:27:45'),
(20, 'Hatton', '0514638345', 'Tirukovil Kalmunai Hatton', '2021-11-13 16:13:40'),
(21, 'Nawalapitiya', '0540240123', 'Export Processing Zone, Biyagama Nawalapitiya', '2021-11-27 16:46:34'),
(22, 'Badulla', '0559122942', '312 Main street Badulla', '2021-11-16 15:42:32'),
(23, 'Bandarawela', '0571002402', 'Ariyanandaramya Katuwasgoda VG Bandarawela', '2021-11-30 08:44:49'),
(24, 'Ampara', '0631443316', '77 Sir James Pieris Mw Ampara', '2021-12-01 08:51:05'),
(25, 'Batticaloa', '0650023526', '178,Trinco road Batticaloa', '2021-12-15 09:31:09'),
(26, 'Matale', '0667130710', '61 1st Cross street, 11 Matale', '2021-12-16 12:52:46'),
(27, 'Kalmunai', '0671043191', '188 Main street, HR Kalmunai', '2021-12-20 08:53:50'),
(28, 'Kandy', '0814054101', 'No 99 Thalatuoya road, Gurudeniya Kandy', '2021-12-22 15:35:28');

INSERT INTO `customer` (`id`, `First_Name`, `Last_Name`, `Gender`, `Contact_Number`, `Branch_id`, `Password`, `Address`, `Posting_Date`) VALUES
(1, 'Nadeesha', 'Madurange', 'Male', '0753457456', 3, 'nadeesha123', '58 Main road Kothmale', '2021-07-28 09:05:29'),
(2, 'Sisila', 'Jayamal', 'Male', '0714567564', 4, 'sisila123', '3 Galkulama Anuradhapura', '2021-08-01 11:22:39'),
(3, 'Dinuka', 'Madushan', 'Male', '0772435642', 5, 'dinuka123', '15 Main Road Chilaw', '2021-08-03 16:09:51');

INSERT INTO `employee` (`id`, `First_Name`, `Last_Name`, `Gender`, `Salary`, `Contact_Number`, `manager_id`, `Branch_id`, `Address`, `Posting_Date`) VALUES
(1, 'Nadeesha', 'Madurange', 'Male', '75000', '0753457456', null, 3, '58 Main road Kothmale', '2021-07-28 09:05:29'),
(2, 'Sisila', 'Jayamal', 'Male', '70000', '0714567564', null, 4, '3 Galkulama Anuradhapura', '2021-08-01 11:22:39'),
(3, 'Dinuka', 'Madushan', 'Male', '74000', '0772435642', null, 5, '15 Main Road Chilaw', '2021-08-03 16:09:51'),
(4, 'Gihan', 'Priyadarshana', 'Male', '75000', '0773154525', 1, 3, '23 Main road Nuwara Eliya', '2021-08-04 09:05:29'),
(5, 'Buddika', 'Lahiru', 'Male', '75000', '0717353672', 2, 4, '51 Madawachchiya Anuradhapura', '2021-08-07 11:22:39'),
(6, 'Supuni', 'Rangika', 'Female', '75000', '0776378972', 3, 5, '7 Watakawa Dankotuwa', '2021-08-10 16:09:51');

INSERT INTO `orders` (`id`, `Quantity`, `Total_Cost`, `Customer_Id`, `Employee_id`, `Posting_Date`) VALUES
(1, 25.2, 464.50, 1, 4, '2021-09-01 08:25:29'),
(2, 12.6, 324.50, 2, 5, '2021-09-01 09:14:57'),
(3, 9.26, 534.50, 3, 6, '2021-09-01 10:32:15');

INSERT INTO `product` (`id`, `Name`, `Weight`, `Price`, `Posting_Date`) VALUES
(1, 'Carrot', 3, 220.00, '2020-12-14 08:25:29'),
(2, 'Big Onions', 14, 120.50, '2020-12-14 08:26:02'),
(3, 'Tomatoes', 16, 80.75, '2020-12-14 08:26:32'),
(4, 'Pumpkin', 12, 80.50, '2020-12-14 08:27:03'),
(5, 'Potatoes', 12, 220.00, '2020-12-14 08:28:14'),
(6, 'Leeks', 14, 275.50, '2020-12-14 08:28:59'),
(7, 'Red Onions', 12, 455.20, '2020-12-14 08:29:21'),
(8, 'Cabbage', 13, 200.50, '2020-12-14 08:30:03'),
(9, 'Brinjals', 21, 275.50, '2020-12-14 08:32:13'),
(10, 'Green Chilies', 15, 475.25, '2020-12-14 08:32:31'),
(11, 'Garlic', 16, 540.00, '2020-12-14 08:34:25'),
(12, 'Manioc', 18, 80.50, '2020-12-14 08:35:03'),
(13, 'Jak Fruit', 11, 475.50, '2020-12-14 08:35:21'),
(14, 'Sweet Potato', 13, 220.00, '2020-12-14 08:36:13'),
(15, 'Ladies Fingers', 19, 90.00, '2020-12-14 08:36:58'),
(16, 'Capsicum', 17, 480.50, '2020-12-14 08:44:21'),
(17, 'Beetroot', 17, 180.25, '2020-12-14 08:45:05'),
(18, 'Bitter Gourd', 16, 150.00, '2020-12-14 08:45:49'),
(19, 'Lime', 13, 275.50, '2020-12-14 08:47:11'),
(20, 'Kekiri', 12, 130.00, '2020-12-14 08:48:37'),
(21, 'Broccoli', 13, 2500.00, '2020-12-14 08:49:04'),
(22, 'Green Cucumber', 11, 380.50, '2020-12-14 08:49:27'),
(23, 'Egg plant', 17, 250.00, '2020-12-14 08:50:03'),
(24, 'Bell Pepper Green', 12, 920.50, '2020-12-14 08:53:11'),
(25, 'Bell Pepper Yellow', 14, 1500.00, '2020-12-14 08:54:03'),
(26, 'Thumba Karawila', 18, 550.75, '2020-12-14 08:54:48'),
(27, 'Onion Leaves', 19, 350.25, '2020-12-14 08:56:17'),
(28, 'Cauliflower', 21, 400.00, '2020-12-14 08:57:19'),
(29, 'Ginger', 12, 425.50, '2020-12-14 08:58:31'),
(30, 'Dambala', 15, 350.00, '2020-12-14 08:59:06');

INSERT INTO `order_items` ( `id`, `weight`, `cost`, `Product_id`, `Order_id`, `Posting_Date`) VALUES
(1, 7, 111.50, 11, 1, '2021-09-01 08:25:29'),
(2, 6, 237.75, 21, 1, '2021-09-01 08:25:29'),
(3, 9, 123.50, 7, 2, '2021-09-01 10:32:15');