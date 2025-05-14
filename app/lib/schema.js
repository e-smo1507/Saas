import {z} from "zod";

export const OnboardingSchema=z.object({

industry:z.string({
  required_error:"please select industry",
}),
subIndustry:z.string({
required_error:"please select spezialization",
}),
bio:z.string().max(500).optional(),
experience:z.string().transform((val)=>parseInt(val,10)).pipe(
  z.string(
    z.number().min(0,"experience must be more than 0 years").max(50,"experience should not exceed 50")
  ),
),
    skills:z.string().transform((val)=>
    val
    ? val
    .split(",").map((skill)=>skill.trim())
   .filter(Boolean)
   :undefined
),
})