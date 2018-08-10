INSERT INTO users (id, username, pasword, profile_pic)
VALUES (${sub}, ${username}, ${pasword}, ${profile_pic})
RETURNING *;