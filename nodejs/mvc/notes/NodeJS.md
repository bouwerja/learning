
Getting started with Node.js? Go here [[nodejs/learning/Introduction]]

## 1. Overall architecture and production practice

|Resource|Why it fits your code|
|---|---|
|**Node.js Best Practices** (Yoni Goldberg): [https://github.com/goldbergyoni/nodebestpractices](https://github.com/goldbergyoni/nodebestpractices)|Each practice comes with an explanation and code examples. The _Error Handling_ section describes the same `AppError` design as [errors.js](vscode-webview://0acu2287vjguhqp22moinmtennf8phpskhjkclk60jlqppdg699m/src/errors.js). The _Going to Production_ section covers graceful shutdown and fail-fast startup, which [server.js](vscode-webview://0acu2287vjguhqp22moinmtennf8phpskhjkclk60jlqppdg699m/src/server.js) already does.|
|**Practica.js**: [https://github.com/practicajs/practica](https://github.com/practicajs/practica)|A production-ready Express starter from the same authors. It uses the same layering (entry point → app factory → domain → data access) and documents each decision.|
|**Express production best practices**: [https://expressjs.com/en/advanced/best-practice-performance.html](https://expressjs.com/en/advanced/best-practice-performance.html) and [https://expressjs.com/en/advanced/best-practice-security.html](https://expressjs.com/en/advanced/best-practice-security.html)|Official guidance for the Express setup in [app.js](vscode-webview://0acu2287vjguhqp22moinmtennf8phpskhjkclk60jlqppdg699m/src/app.js) (helmet, CORS, body limits).|
|**Express health checks and graceful shutdown**: [https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html](https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html)|Explains the `SIGTERM`/`server.close()` pattern you have built by hand.|

## 2. Express 5 routing, middleware and errors

- **Migrating to Express 5**: [https://expressjs.com/en/guide/migrating-5.html](https://expressjs.com/en/guide/migrating-5.html). Your controllers `throw` inside `async` handlers without `try/catch`. This only works because Express 5 passes rejected promises to the error handler automatically, and this page explains that behaviour.
- **Error handling**: [https://expressjs.com/en/guide/error-handling.html](https://expressjs.com/en/guide/error-handling.html). Covers the `res.headersSent` check and the four-argument signature used in [errorHandler.js](vscode-webview://0acu2287vjguhqp22moinmtennf8phpskhjkclk60jlqppdg699m/src/middleware/errorHandler.js).
- **Writing and using middleware**: [https://expressjs.com/en/guide/writing-middleware.html](https://expressjs.com/en/guide/writing-middleware.html) and [https://expressjs.com/en/guide/using-middleware.html](https://expressjs.com/en/guide/using-middleware.html)

## 3. Data layer: Drizzle ORM, MySQL and mysql2

- **Drizzle schema declaration**: [https://orm.drizzle.team/docs/sql-schema-declaration](https://orm.drizzle.team/docs/sql-schema-declaration) (matches [users.js](vscode-webview://0acu2287vjguhqp22moinmtennf8phpskhjkclk60jlqppdg699m/src/db/users.js))
- **Drizzle transactions**: [https://orm.drizzle.team/docs/transactions](https://orm.drizzle.team/docs/transactions). This is the basis of the `insertRecord` + `#audit` pattern in [baseModel.js](vscode-webview://0acu2287vjguhqp22moinmtennf8phpskhjkclk60jlqppdg699m/src/models/baseModel.js).
- **Drizzle migrations / drizzle-kit**: [https://orm.drizzle.team/docs/migrations](https://orm.drizzle.team/docs/migrations) and [https://orm.drizzle.team/docs/kit-overview](https://orm.drizzle.team/docs/kit-overview) (relevant to [drizzle.config.js](vscode-webview://0acu2287vjguhqp22moinmtennf8phpskhjkclk60jlqppdg699m/drizzle.config.js))
- **Drizzle Relational Queries**: [https://orm.drizzle.team/docs/rqb](https://orm.drizzle.team/docs/rqb). Useful once your models start joining tables, since you already pass `schema` to `drizzle()`.
- **mysql2 documentation**: [https://sidorares.github.io/node-mysql2/docs](https://sidorares.github.io/node-mysql2/docs). Covers pool sizing and the `ER_DUP_ENTRY` error codes you check for.

## 4. Scheduled jobs: Bree and worker threads

- **Bree README**: [https://github.com/breejs/bree](https://github.com/breejs/bree). Explains `workerData`, `closeWorkerAfterMs`, cancellation with the `'cancel'` message, and graceful stop, all of which [runJob.js](vscode-webview://0acu2287vjguhqp22moinmtennf8phpskhjkclk60jlqppdg699m/src/jobs/runJob.js) relies on.
- **Node.js `worker_threads`**: [https://nodejs.org/api/worker_threads.html](https://nodejs.org/api/worker_threads.html). Explains why each job opens and closes its own database pool.

## 5. Testing with `node:test`

- **Node.js test runner API**: [https://nodejs.org/api/test.html](https://nodejs.org/api/test.html), including mocking and coverage.
- **Node.js integration tests best practices**: [https://github.com/testjavascript/nodejs-integration-tests-best-practices](https://github.com/testjavascript/nodejs-integration-tests-best-practices). Of everything on this list, this is closest to your [testServer.js](vscode-webview://0acu2287vjguhqp22moinmtennf8phpskhjkclk60jlqppdg699m/tests/helpers/testServer.js): it starts the real app on a random port, keeps tests isolated, and explains each choice.
- **JavaScript testing best practices**: [https://github.com/goldbergyoni/javascript-testing-best-practices](https://github.com/goldbergyoni/javascript-testing-best-practices)

## 6. Security, configuration and runtime

- **OWASP Node.js Security Cheat Sheet**: [https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html)
- **Helmet**: [https://helmetjs.github.io/](https://helmetjs.github.io/)
- **Node `--env-file`**: [https://nodejs.org/api/cli.html#--env-fileconfig](https://nodejs.org/api/cli.html#--env-fileconfig) (your `dev` and `start` scripts use it)
- **Process signal events**: [https://nodejs.org/api/process.html#signal-events](https://nodejs.org/api/process.html#signal-events)

## 7. Resources for the next things your code is likely to need

|Gap I noticed|Resource|
|---|---|
|[auth.js](vscode-webview://0acu2287vjguhqp22moinmtennf8phpskhjkclk60jlqppdg699m/src/middleware/auth.js) uses a hard-coded placeholder token (your test helper says it is temporary)|**jose** (JWT verification): [https://github.com/panva/jose](https://github.com/panva/jose) · **OWASP Authentication Cheat Sheet**: [https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)|
|Input is validated by hand in both the controller and the model|**Zod**: [https://zod.dev](https://zod.dev/) · **drizzle-zod** (builds validators from your Drizzle tables): [https://orm.drizzle.team/docs/zod](https://orm.drizzle.team/docs/zod)|
|All logging uses `console.log`|**Pino**: [https://getpino.io](https://getpino.io/) (structured logs suitable for production)|