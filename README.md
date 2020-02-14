# MongoDb development setup

Docker tool to fast init mongoDb with pre-configured users and data.

/!\ **DON'T USE THIS CONFIGURATION IN PRODUCTION ENVIRONMENT** /!\

## Overview

Mongo express admin panel available at [http://localhost:8080](http://localhost:8080)

## Run

```bash
# Rebuild
docker-compose build
#Start
docker-compose up
#Stop
docker-compose down
```

## Customize setup

Step to personalize this docker-compose for your projects

- Configure root password : docker-compose.yml

```bash
MONGO_INITDB_DATABASE: myDatabase
MONGO_INITDB_ROOT_USERNAME: root
MONGO_INITDB_ROOT_PASSWORD: azertyqsd
```

- Configure user and permissions : mongoDb/database/init-mongo.js

```javascript
db.createUser({
    user : "encoder",
    pwd : "azertyqsdf",
    roles:[
        {
            role:"readWrite",
            db:"goNcoder"
        }
    ]
})
```

- Set data : CREATE a file : mongoDb/mongo-seed/{{ dataFile }}.json, next add line in mongoDb/mongo-seed/Dockerfile to refer to this file

```bash
# Template
mongoimport --host {{MongoDb container name}} --port={{MongoDb container port}} --db {{MongoDb database name}} -u={{ user }} -p={{ password }}--authenticationDatabase admin --collection {{collection name}} --type json --file /{{Json to import}}.json --jsonArray
# Sample
mongoimport --host mongo_db --port=27017 --db myDatabase -u=root -p="azertyqsd" --authenticationDatabase admin --collection Rands --type json --file /initRands.json --jsonArray
```
