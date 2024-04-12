export const fetchMovieDetails = async (movieId: string) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGFiN2Y4ZDhlOWVmOWI3ZTBhZWVjNWM2NGY5ZjliMSIsInN1YiI6IjY2MTQ0NTIxMGJiMDc2MDE4NTMxMzJiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g7OcsL0HOBqnXiPn8QEY9YiaDXRMjs7XVQKbikqfG74",
        },
      }
    );
    const data = await res.json();
    return data;
  };
