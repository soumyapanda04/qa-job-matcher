type StatsCardProps = {
  title: string;
  value: string;
  color: string;
};

export default function StatsCard({
  title,
  value,
  color,
}: StatsCardProps) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl">
      <h2 className="text-gray-400">{title}</h2>

      <p className={`text-4xl font-bold mt-2 ${color}`}>
        {value}
      </p>
    </div>
  );
}