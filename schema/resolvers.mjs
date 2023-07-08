import { UserList, MovieList } from "../fakeData.mjs";

export const resolvers = {
  Query: {
    users: () => {
      // TODO george connect to DB
      return UserList;
    },
    user: (_, args) => {
      const id = args.id;
      // TODO george connect to DB - find user by id in DB
      return UserList.find((user) => user.id === Number(id));
    },
    movies: () => {
      // TODO george connect to DB
      return MovieList;
    },
    movie: (_, args) => {
      const id = args.id;
      // TODO george connect to DB - find movie by id in DB
      return MovieList.find((movie) => movie.id === Number(id));
    },
  },
};
