/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("movies").del();
  await knex("movies").insert([
    {
      title: "Mean Girls",
      genre: "Comedy",
      release_date: "2004-04-30",
      image_path:
        "https://upload.wikimedia.org/wikipedia/en/a/ac/Mean_Girls_film_poster.png",
    },
    {
      title: "Hackers",
      genre: "Drama",
      release_date: "1991-09-15",
      image_path:
        "https://upload.wikimedia.org/wikipedia/en/6/67/Hackersposter.jpg",
    },
    {
      title: "The Grey",
      genre: "Action",
      release_date: "2011-12-11",
      image_path:
        "https://upload.wikimedia.org/wikipedia/en/2/27/The_Grey_Poster.jpg",
    },
    {
      title: "Sunshine",
      genre: "Sci-Fi",
      release_date: "2007-07-20",
      image_path:
        "https://upload.wikimedia.org/wikipedia/en/6/68/Sunshine_poster.jpg",
    },
    {
      title: "Ex Machina",
      genre: "Sci-Fi",
      release_date: "2015-04-24",
      image_path:
        "https://upload.wikimedia.org/wikipedia/en/b/ba/Ex-machina-uk-poster.jpg",
    },
  ]);
}
