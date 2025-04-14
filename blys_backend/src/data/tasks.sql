CREATE TABLE tasks IF NOT EXISTS(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('pending', 'in progress', 'completed')),
    user_id REFRENCES users(id) ON DELETE CASCADE

)