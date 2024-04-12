export const mutationLogin = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/authentication/guest_session/new",
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
