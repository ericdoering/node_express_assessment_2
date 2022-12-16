Bug #1:

-The testing database was absent from the sql file. The data.sql file required a "bankly_test" database with the "users"
table included in the database. Once this was setup the tests were able to run. Since the testing library was searching for
"bankly_test"

(Bug Fixed!)

Bug #2:

-The "register" does not have the user inputting if they are an admin or not. However, it is used/required in other places in the application such as the database. The test also did not catch this bug

(Bug Fixed!)

Bug #3:

-In the app.js file, "module.exports = app;" was written twice.

(Bug Fixed!)

Bug #4:

-In auth.js file there is no token validation, a clue was that SECRET_KEY was not being utilized. The SECRET_KEY is required in order to generate the token. Testing is also required to check this functionality.

(Bug Fixed!)

Bug #5

-In auth.js of routes file. The register endpoint does not have admin added into creating a user. 