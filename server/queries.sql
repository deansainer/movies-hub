CREATE TABLE Saved_Movies (
    Title VARCHAR(255),
    Year CHAR(4),
    imdbID VARCHAR(55) PRIMARY KEY,
    Type VARCHAR(50),
    Poster VARCHAR(255),
    date DATE
);

CREATE TABLE History_Movies (
    title VARCHAR(255) NOT NULL,
    year CHAR(4) NOT NULL,
    imdbid VARCHAR(55) PRIMARY KEY,
    type VARCHAR(50),
    poster VARCHAR(255),
    rating INTEGER,
    completedAt DATE
);