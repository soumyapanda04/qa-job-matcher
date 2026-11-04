import StatsCard from "@/components/StatsCard";
import JobCard from "@/components/JobCard";
import { jobs } from "@/data/jobs";
import { profileSkills } from "@/data/profile";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-8">
        QA Match Netherlands
      </h1>

      <div className="bg-slate-900 p-6 rounded-xl mb-8">

  <h2 className="text-2xl font-bold mb-4">
    My Skills
  </h2>

  <div className="flex flex-wrap gap-2">

    {profileSkills.map((skill) => (

      <span
        key={skill}
        className="bg-green-600 px-3 py-1 rounded-md"
      >
        {skill}
      </span>

    ))}

  </div>

      </div>

      <div className="grid grid-cols-4 gap-6">

        <StatsCard
          title="Jobs Scanned"
          value="1248"
          color="text-white"
        />

        <StatsCard
          title="Matches"
          value="64"
          color="text-green-400"
        />

        <StatsCard
          title="Visa Sponsors"
          value="21"
          color="text-blue-400"
        />

        <StatsCard
          title="New Today"
          value="8"
          color="text-orange-400"
        />

      </div>
      <div className="mt-8">
  {jobs
  .filter((job) => job.match >= 70)
  .map((job) => (
    <JobCard
      key={job.id}
      company={job.company}
      title={job.title}
      location={job.location}
      match={job.match}
      skills={job.skills}
    />
  ))}
</div>

    </main>
  );
}