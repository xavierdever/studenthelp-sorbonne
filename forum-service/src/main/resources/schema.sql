-- schema.sql
CREATE TABLE IF NOT EXISTS forum
(
    id          SERIAL PRIMARY KEY,
    title       VARCHAR(255),
    image       VARCHAR(255),
    description VARCHAR(255),
    cols_ui     INTEGER,
    rows_ui     INTEGER
);