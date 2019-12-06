-- schema.sql
CREATE TABLE IF NOT EXISTS user
(
    id          SERIAL PRIMARY KEY,
    nom       VARCHAR(255),
    prenom       VARCHAR(255),
    email VARCHAR(255),
    dateNaissance     DATE,
    mdp     VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS topic
(
    id          SERIAL PRIMARY KEY,
    title       VARCHAR(255),
    userAutor       INTEGER,
    CONSTRAINT FK_UserTopic FOREIGN KEY (userAutor) REFERENCES User(id)

);

CREATE TABLE IF NOT EXISTS comment
(
    id          SERIAL PRIMARY KEY,
    idUser        INTEGER,
    dateComment       DATE,
    idTopic           INTEGER,
    CONSTRAINT FK_UserComment FOREIGN KEY (idUser) REFERENCES User(id),
    CONSTRAINT FK_TopicComment FOREIGN KEY (idTopic) REFERENCES Topic(id)

);