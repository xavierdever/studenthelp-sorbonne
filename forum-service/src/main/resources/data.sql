-- data.sql
INSERT INTO user(nom, prenom, email, dateNaissance, mdp)
VALUES ('Lion', 'Bob', 'bob@test.com', '2018-09-24 22:21:20', 'mdp');

INSERT INTO topic(title, idAutor)
VALUES ('Title', LAST_INSERT_ID());

INSERT INTO comment(text, idUser, dateComment, topic)
VALUES ('Text', LAST_INSERT_ID(), '2018-09-24 22:21:20', 'Title');

