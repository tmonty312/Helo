INSERT INTO posts (id, title, img, content, auth_id)
VALUES (${id}, ${title}, ${img}, ${content}, ${sub})
RETURNING *;