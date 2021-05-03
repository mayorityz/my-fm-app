export default function localStorage() {
  // !check if local storage has logged_in set to true.
  try {
    const localStore = window.localStorage.getItem("is_logged_status");
    if (localStore === null) {
      return "not_logged!";
    }
    if (!localStore) {
      return "not_logged!!";
    } else {
      return "isLoggedIn";
    }
  } catch (error) {
    console.log(error.message);
  }
}
