#### EN - English [(Versão em Português Brasil aqui)](https://github.com/m4rcos-dev/BackEnd-project-mysql-one-for-all/blob/main/README_pt-br.md)

<h1 align="center">🎉 Welcome to my project trybesmith repository </h1>

![typescript express mysql logo](https://user-images.githubusercontent.com/104791582/213533785-09ea4425-4183-4b65-80f2-eb6840013e69.jpg)

![flag tools](https://img.shields.io/badge/Tools-VScode%20|%20WorkBanch|%20|%20MySql%20|%20Docker-9cf) ![flag tools](https://img.shields.io/badge/Languages-TypeScript-blue) ![flag tools](https://img.shields.io/badge/Frameworks-Express%20|%20JWT-yelow)


<p>Project developed during the back-end module of the Trybe full-stack web development course.</p>
<p>The project's proposal was to create a store of medieval items, in the form of an API, using Typescript.</p>
<p>All layers of the application (Models, Service and Controllers) were developed where it is possible to perform the basic operations on a given database: Creation, Reading and Deletion (or CRUD, for the most intimate 😜).</p>
<p>Endpoints were created to read and write to the database, using MySql.</p>

## 🔨 Project features

<ul>
<li>✅EndPoint for product registration, using the POST method.</li>
<li>✅EndPoint for listing products registered using the GET method.</li>
<li>✅EndPoint for registering users, using the POST method.</li>
<li>✅EndPoint for lists all requests, using GET method.</li>
<li>✅EndPoint for user person login, using POST method.</li>
<li>✅EndPoint for order registration using the POST method</li>
<li>✅EndPoint for order registration using the POST method</li>
<li>✅Product validations, users using token with JWT.</li>
</ul>

## ▶️ Running application
</br>
<details>
   <summary><strong>🐳 Running on Docker vs Locally</strong></summary><br />

   ## With Docker


   > Run the `node` and `db` services with the `docker-compose up -d` command.
   - Remember to stop `mysql` if you are using it locally on the default port (`3306`), or adapt it, if you want to use the application in containers
   - These services will start up a container named `trybesmith` and another named `trybesmith_db`.
   - From here you can run the `trybesmith` container via CLI or open it in VS Code.

   > Use the `docker exec -it trybesmith bash` command.
   - It will give you access to the interactive terminal of the container created by compose, which is running in the background.

   > Install dependencies [**If any**] with `npm install`

   ⚠ Attention ⚠ If you choose to use Docker, **ALL** the commands available in `package.json` (npm start, npm test, npm run dev, ...) must be executed **INSIDE** the container, that is, in the terminal that appears after executing the `docker exec` command mentioned above.

   ⚠ Attention ⚠ The **git** inside the container is not configured with your credentials. Make commits outside the container, or set your git credentials inside the container.

   ⚠ Warning ⚠ Do not run the npm audit fix command! It updates several project dependencies, and this update causes conflicts with the evaluator.

   ⚠ Warning ⚠ If you are using macOS and running `docker-compose up -d` you get the following error:

   ~~~bash
   The Compose file './docker-compose.yml' is invalid because:
   Unsupported config option for services.db: 'platform'
   Unsupported config option for services.node: 'platform'
   ~~~

> 2 possible solutions were found for this problem:
> 1. You can manually add the `platform: linux/amd64` option to the database service in the project's docker-compose.yml file, but this is a local solution and you should reproduce this for other projects.
> 2. You can manually add the line `export DOCKER_DEFAULT_PLATFORM=linux/amd64` to your computer's .bashrc, .zshenv or .zshrc files, this is a global solution.
> The solutions were based on [this source](https://stackoverflow.com/a/69636473).



✨ **Tip:** The `Remote - Containers` extension (which will be in the recommended extensions section of VS Code) is indicated so that you can develop your application in the Docker container directly in VS Code, as you do with your local files .

<img src="https://user-images.githubusercontent.com/104791582/213542711-a092f145-a6e3-4172-89f4-417379cfefae.png" width="800px" >

---

   ## Without Docker

   > Install dependencies [**If any**] with `npm install`

   ⚠ Warning ⚠ Do not run the npm audit fix command! It updates several project dependencies, and this update causes conflicts with the evaluator.

   ✨ **Tip:** To run the project this way, you must have `node` installed on your computer.
   ✨ **Tip:** The evaluator expects that the `node` version used is 16.

</details>
<details>
   <summary><strong>🎲 Project Relationship Entity Diagram</strong></summary><br />
   The project database follows the structure below:

   <img src="https://user-images.githubusercontent.com/104791582/213542727-4a7abad9-d00b-4eea-b3ef-57fa1b99f5fa.png" height="200px" />

</details>
<details>
   <summary><strong>🏦 Bank Connection</strong></summary><br />

   The local database connection must contain the following parameters:

   ```typescript
   import dotenv from 'dotenv';
   import mysql from 'mysql2/promise';

   dotenv.config();

   const connection = mysql.createPool({
     host: process.env.MYSQL_HOST,
     user: process.env.MYSQL_USER,
     password: process.env.MYSQL_PASSWORD,
   }); // your connection must NOT have the database, this must be specified in each query

   export default connection;
   ```

   **⚠️ It is essential to configure these 3 environment variables to test the project locally: ⚠️**

   ```
     host: process.env.MYSQL_HOST
     user: process.env.MYSQL_USER
     password: process.env.MYSQL_PASSWORD
   ```

   **⚠️ There is a file already created called .env.example where the environment variables expected in the project are listed. Environment variables other than those specified in the referenced file are not supported as they are not expected by the project evaluator. ⚠️ **

   **⚠️ It is essential that your file has the name `connection.ts` and is in the `src/models` directory ⚠️**

</details>

<details>
   <summary><strong>🪑 Tables</strong></summary><br />

   The database will have three tables: users, products and orders.

   ```sql
   DROP SCHEMA IF EXISTS Trybesmith;
   CREATE SCHEMA IF NOT EXISTS Trybesmith;

   CREATE TABLE Trybesmith.users (
     id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
     username TEXT NOT NULL,
     vocation TEXT NOT NULL,
     level INTEGER NOT NULL,
     password TEXT NOT NULL
   );

   CREATE TABLE Trybesmith.orders (
     id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
     user_id INTEGER,
     FOREIGN KEY (user_id) REFERENCES Trybesmith.users (id)
   );

   CREATE TABLE Trybesmith.products (
     id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
     name
    TEXT NOT NULL,
     amount TEXT NOT NULL,
     order_id INTEGER,
     FOREIGN KEY (order_id) REFERENCES Trybesmith.orders (id)
   );
   ```

   The `Trybesmith.sql` file contains the _queries_ that create and populate the database as the test does, and the tests **restores** the database after execution.
</details>
</br>

## 🧔 Author

<div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="dev-marcospaulo" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/dev-marcospaulo?trk=profile-badge">Marcos Paulo Pereira</a></div>
