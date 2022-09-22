import React, { useState } from "react";

export const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [ReleaseDate, setReleaseDate] = useState("");
  const [imagePath, setImgPath] = useState("");

  const handleSubmit = () => {
    fetch("http://localhost:8080/movies", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        genre: genre,
        release_date: ReleaseDate,
        image_path: imagePath,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => alert("successfully added!"))
      .catch((error) => alert("Cannot add item"));
  };
  return (
    <form>
      <h1>Add Movie</h1>
      <div>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label>Release Date</label>
          <input
            type="text"
            name="release"
            value={ReleaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </div>
        <div>
          <label>Image Path</label>
          <input
            type="text"
            name="img"
            value={imagePath}
            onChange={(e) => setImgPath(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Add</button>
        </div>
      </div>
    </form>
  );
};
