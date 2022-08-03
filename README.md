# requiments
node 18.2.0
postgresql >= 12

# setup database
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

