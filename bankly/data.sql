
DROP DATABASE bankly;
CREATE DATABASE bankly;
\connect bankly

CREATE TABLE users (
    username text PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    password text NOT NULL,
    admin boolean DEFAULT false
);

DROP DATABASE bankly_test;
CREATE DATABASE bankly_test;
\connect bankly_test

CREATE TABLE users (
    username text PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    password text NOT NULL,
    admin boolean DEFAULT false
);