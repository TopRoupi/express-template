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

