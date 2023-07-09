import { UserList, MovieList } from "../fakeData.mjs";

export const resolvers = {
  Query: {
    // User queries
    users: () => {
      // TODO connect to DB
      return UserList;
    },
    user: (_, args) => {
      const id = args.id;
      // TODO connect to DB - find user by id in DB
      return UserList.find((user) => user.id === Number(id));
    },

    // Movie queries
    movies: () => {
      // TODO connect to DB
      return MovieList;
    },
    movie: (_, args) => {
      const id = args.id;
      // TODO connect to DB - find movie by id in DB
      return MovieList.find((movie) => movie.id === Number(id));
    },
  },
  // User special queries
  User: {
    favouriteMovies: () => {
      // TODO connect to DB - find movie by id in DB
      return MovieList.filter(
        (movie) =>
          movie.yearOfPublication > 2000 && movie.yearOfPublication < 2010
      );
    },
  },

  Mutation: {
    // User mutations
    createUser: (_, args) => {
      const newUser = args.input;
      newUser["id"] = UserList.length + 1;
      UserList.push(newUser);
      // TODO connect to DB - create user in DB
      return newUser;
    },
    updateUser: (_, args) => {
      const { id, newUsername } = args.input;
      // TODO connect to DB - update user in DB
      const updatedUser = UserList.find((user) => user.id === Number(id));
      if (!updatedUser) {
        throw new Error("User not found");
      } else {
        updatedUser.username = newUsername;
        return updatedUser;
      }
    },
    deleteUser: (_, args) => {
      const id = args.id;
      // TODO connect to DB - delete user in DB
      const deletedUser = UserList.find((user) => user.id === Number(id));
      if (!deletedUser) {
        throw new Error("User not found");
      } else {
        UserList.splice(UserList.indexOf(deletedUser), 1);
        return deletedUser;
      }
    },
  },
};
