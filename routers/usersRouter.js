const {Router} = require("express");
const usersRouter = Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


usersRouter.get("/", async(req, res)=>{
    await new Promise(resolve => setTimeout(resolve, 3000));
    const users = await prisma.user.findMany({
        orderBy:{
            time: 'asc'
        }
    });
    res.json(users);
})

usersRouter.post("/", async(req, res)=>{
    console.log(req.body);
    const {name, time} = req.body;
    console.log(name, time);
    await prisma.user.create({
        data:{
            name:name,
            time:time
        }
    });
    res.json({message: "User created!"});
})

module.exports = usersRouter;