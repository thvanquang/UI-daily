export default function JobElements({ title, icon, bgClass }) {
  return (
    <div
      className={`${bgClass} flex aspect-square flex-col items-center gap-2 rounded-md p-6`}
    >
      {icon}
      <h1>{title}</h1>
    </div>
  );
}
