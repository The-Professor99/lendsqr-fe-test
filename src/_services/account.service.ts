import { BehaviorSubject } from "rxjs";
import { Account } from "_models";

const userSubject: BehaviorSubject<Account> = new BehaviorSubject({
  email: "",
  password: "",
});

export const accountService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
};
