export const fetchMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
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

  export const fetchTvshows = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
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
  
  