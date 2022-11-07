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
  logout,
};

async function login(values: Account) {
  const user = await fetchWrapper.post(loginUrl, values);
  // publish user to subscribers
  userSubject.next(user);
  localStorage.setItem(userKey, JSON.stringify(user) || "");
  return user;
}

async function logout() {
  // publish null to user subscribers
  localStorage.removeItem(userKey);
  userSubject.next({
    email: "",
    password: "",
    verified: false,
  });

  function simulateDelay() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2500);
    });
  }

  await simulateDelay(); // causes a delay to simulate server
  // api call for better ux
}
