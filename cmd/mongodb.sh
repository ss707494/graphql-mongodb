service mongod start

mongodump
mongodump -h 127.0.0.1 --port 27744 -d graphql -o E:\ss_code\graphql\mongodbData
mongodump -h 127.0.0.1 --port 27744 -d graphql -o /usr/ss707494/graphql-mongodb/mongodbData


mongorestore -h 127.0.0.1 --port 27744 -d graphql --drop ./

mongorestore -h 127.0.0.1 --port 27744 -d graphql --drop ./mongodbData/graphql/
