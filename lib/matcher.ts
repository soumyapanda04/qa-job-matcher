import { profileSkills } from "@/data/profile";

export function calculateMatch(
  jobSkills: string[]
) {
  const matchedSkills = jobSkills.filter(
    (skill) => profileSkills.includes(skill)
  );

  return Math.round(
    (matchedSkills.length / jobSkills.length) * 100
  );

}

export function getMissingSkills(
  jobSkills: string[]
) {
  return jobSkills.filter(
    (skill) => !profileSkills.includes(skill)
  );
}
