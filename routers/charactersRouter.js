const {Router} = require("express");
const charactersRouter = Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


charactersRouter.get("/", async(req, res)=>{
    const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
    const characters = await prisma.$queryRaw`SELECT * FROM "Character"  ORDER BY RANDOM() LIMIT ${limit}`;
    res.json(characters);
})

module.exports = charactersRouter;