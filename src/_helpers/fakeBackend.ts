import { Account } from "_models";

/**
 * Serves as a fake backend for login purposes.
 * it intercepts fetch requests and if the url the request is
 * being made to ends with "/accounts/login", It then simulates a basic
 * login process that ought to be handled by a real backend.
 */
export function configureFakeBackend() {
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      handleRoute();

      function handleRoute() {
        if (!opts) {
          return realFetch(url)
            .then((response) => resolve(response))
            .catch((error) => reject(error));
        }
        let { method } = opts;
        switch (true) {
          case url.toString().endsWith("/accounts/login") && method === "POST":
            // wrap in timeout to simulate server api call
            return setTimeout(login, 2500);
          default:
            // pass through any requests not handled above
            return realFetch(url, opts)
              .then((response) => resolve(response))
              .catch((error) => reject(error));
        }
      }

      // simulate a basic backend login process.
      function login() {
        const { email } = body();

        return ok({
          email: email,
          verified: true,
        });
      }

      function ok(body: Account) {
        resolve({
          ok: true,
          text: () => Promise.resolve(JSON.stringify(body)),
        } as Response);
      }

      function body() {
        return opts!.body && JSON.parse(opts!.body.toString());
      }
    });
  };
}
