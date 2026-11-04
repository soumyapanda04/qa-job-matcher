import { profileSkills } from "@/data/profile";

export async function GET() {
  return Response.json({
    skills: profileSkills,
  });
}