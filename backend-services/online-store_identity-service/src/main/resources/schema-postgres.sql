CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
DROP TABLE IF EXISTS CUSTOMER_INFO;
CREATE TABLE CUSTOMER_INFO(
    account_id uuid DEFAULT uuid_generate_v4 (),
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    first_name varchar(255),
    last_name varchar(255),
    date_of_birth DATE,
    news_letter boolean,
    PRIMARY KEY (account_id)
);