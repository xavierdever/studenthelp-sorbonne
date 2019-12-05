drop table if exists "user";
create table "user"
(
    id       serial primary key,
    email    varchar(255),
    password varchar(255),
    role     varchar(255)
);
