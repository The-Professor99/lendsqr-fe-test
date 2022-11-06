import { BehaviorSubject } from "rxjs";
import { Account } from "_models";
import { fetchWrapper } from "_helpers";

let initUser: Account;
const userKey = "user-account-lendsqr-test";
const baseUrl = process.env.REACT_APP_BASE_URL;
const loginUrl = `${baseUrl}/accounts/login`;

// Get user details from localStorage, else, initialize
if (localStorage.getItem(userKey)) {
  initUser = JSON.parse(localStorage.getItem(userKey)!);
} else {
  initUser = {
    email: "",
    password: "",
    verified: false,
  };
}

const userSubject: BehaviorSubject<Account> = new BehaviorSubject(initUser);

export const accountService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
};

async function login(values: Account) {
  const user = await fetchWrapper.post(loginUrl, values);
  // publish user to subscribers
  userSubject.next(user);
  localStorage.setItem(userKey, JSON.stringify(user) || "");
  return user;
}
