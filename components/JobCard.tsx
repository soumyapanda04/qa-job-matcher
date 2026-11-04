import { Job } from "@/types/job";
import {
  calculateMatch,
  getMissingSkills,
} from "@/lib/matcher";

type JobCardProps = {
  company: string;
  title: string;
  location: string;
  match: number;
  skills: string[];
};

export default function JobCard({
  company,
  title,
  location,
  match,
  skills,
}: JobCardProps) {
    const calculatedMatch =
  calculateMatch(skills);

    const missingSkills =
  getMissingSkills(skills);

  return (
    <div className="bg-slate-900 p-6 rounded-xl mt-6">

      <div className="flex justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <p className="text-gray-300">
            {company}
          </p>

          <p className="text-gray-500">
            {location}
          </p>
        </div>

        <div className="bg-green-500 text-black px-4 py-2 rounded-lg font-bold h-fit">
          {calculatedMatch}%
        </div>

      </div>
    <div className="mt-4 flex gap-2 flex-wrap">

        {missingSkills.length > 0 && (

  <div className="mt-4">

    <p className="text-red-400 text-sm mb-2">
      Missing Skills:
    </p>

    <div className="flex gap-2 flex-wrap">

      {missingSkills.map((skill) => (

        <span
          key={skill}
          className="bg-red-700 px-3 py-1 rounded-md text-sm"
        >
          {skill}
        </span>

      ))}

    </div>

  </div>

)}

  {skills.map((skill) => (

    <span
      key={skill}
      className="bg-blue-600 px-3 py-1 rounded-md text-sm"
    >
      {skill}
    </span>

  ))}

</div>
    </div>
  );
}