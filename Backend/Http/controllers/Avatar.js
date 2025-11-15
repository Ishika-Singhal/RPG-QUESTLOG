
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const  Avatarcreate= async (req,res)=>{

    try{
        const { avatarClass, gear } = req.body;

    // Get token from Authorization header
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ error: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Token missing" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id; // depends on what you encoded in JWT

    // Create avatar in DB
    const userAvatar = await prisma.avatar.create({
      data: {
        userId: userId,
        class: avatarClass,
        gear: gear,
      },
    });

    res.status(201).json({
      message: "Avatar created successfully",
      avatar: userAvatar,
    });}

    
  catch (error) {
    console.error("Avatar creation error:", error);
    res.status(500).json({ error: "Failed to create avatar" });
  }

}






