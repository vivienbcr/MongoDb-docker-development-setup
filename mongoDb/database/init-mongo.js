/**
 * Create users
 */
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
db.createUser({
    user : "api",
    pwd : "azertyqsdf",
    roles:[
        {
            role:"readWrite",
            db:"goNcoder"
        }
    ]
})
