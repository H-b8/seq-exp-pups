### STEPS TO RECREATE
   
1. `express puppies`
2. `npm i sequelize pg`
3. `sequelize init`
8. Update import in www, add 'console.log(`running on ${addr.port}`)' to onListening function
4. `createdb puppies`
5. Update config file
6. `sequelize model:create --name [NAME OF MODEL] --attributes [ATTRIBUTE]:integer,[ANOTHER_ATTRIBUTE]:string` for each model
7. Make associations in each model
8. `sequelize db:migrate`
9. `sequelize seed: generate --name demo-pups`
10. `sequelize db:seed:all`
8. Write CRUD
9. Test in Postman