# requiments
node 18.2.0
postgresql >= 12

# setup database
```
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

# see if its working
```
curl localhost:3002/api/things
```

# development
if you have a local postgres with different credentials from the default you can edit them using this .env file
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432"
```
the format is postgresql://USER:PASSWORD@HOST:PORT
is recommended you use an admin user in development as sequelize need the permission to create new databases
but if that is not possible you can pass a database name using this format postgresql://USER:PASSWORD@HOST:PORT/DATABASE

```
  npm install -g foreman
  npx foreman start -f Procfile.dev
```

# test
todo


