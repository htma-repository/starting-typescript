interface ErrorContainer {
  id: string;
  [prop: string]: string;
}

const errorView: ErrorContainer = {
  id: Math.random().toString(),
  username: "Please input valid username!",
  password: "Please input valid Password",
};
