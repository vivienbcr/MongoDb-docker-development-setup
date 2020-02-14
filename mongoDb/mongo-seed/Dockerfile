FROM mongo

COPY * /

CMD mongoimport --host mongo_db --port=27017 --db myDatabase -u=root -p="azertyqsd" --authenticationDatabase admin --collection Videos --type json --file /initVideos.json --jsonArray \
    && mongoimport --host mongo_db --port=27017 --db myDatabase -u=root -p="azertyqsd" --authenticationDatabase admin --collection Users --type json --file /initUsers.json --jsonArray \
    && mongoimport --host mongo_db --port=27017 --db myDatabase -u=root -p="azertyqsd" --authenticationDatabase admin --collection Rands --type json --file /initRands.json --jsonArray