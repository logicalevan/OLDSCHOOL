CREATE DATABASE student_db2;
USE student_db2;


CREATE TABLE notes (
	id int NOT NULL AUTO_INCREMENT,
    name varchar (255) NOT NULL,
	note longtext,
	PRIMARY KEY (id)
);
