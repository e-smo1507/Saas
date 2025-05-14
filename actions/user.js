"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export async function updateUser(data){
  const {userId}=await auth();
  if(!userId)throw new Error("unauthorized");
  const user=await db.user.findunique({
    where:{
      clerkUserId:userId
    },
  });
  if(!user) throw new Error("user not found");

  try{
const result=await db.$transaction(
  async(tx)=>{
let industryInsight=await tx.industryInsight.findUnique({
  where:{
    industry:data.industry,
  },

});
if(!industryInsight){
   const insights = await generateAIInsights(data.industry);
    industryInsight = await db.industryInsight.create({
     data:{
       industry:data.industry,
       ...insights,
       nextUpdate:new Date(Date.now()+7*24*60*60*1000),
   
     },
   });
   return industryInsight;
}
const updatedUser = await tx.industryInsight.update({
  where:{
    id:user.id,
  },
  data:{
industry:data.industry,
experience:data.experience,
bio:data.bio,
skills:data.skills,
  }
})
return {updatedUser,industryInsight}
  },{
    timeout:1000,
  }
);
return {success:true, ...result};
  }
  catch(error){
    console.log("updating error",error.message);
    throw new Error("failed to update" + error.message);
  }
}


export async function getUserOnboardingStatus(){
  const {userId}=await auth();
  if(!userId)throw new Error("unauthorized");
  const user=await db.user.findUnique({
    where:{
      clerkUserId:userId
    }
  });
  if(!user) throw new Error("user not found");

  try{
    const user=await db.user.findunique({
      where:{
        clerkUserId:userId,
      },
      select:{
        industry:true,
      }
    })
    return {
      iSOnboarded: !!user?.industry,
    }
  }
  catch(error){
console.log("updating erroe",error.message)
throw new Error("failed to update",+ error.message)
  }
}