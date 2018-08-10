SELECT p.*, u.username as author
FROM posts p
JOIN users u ON p.autior_id = u.id
