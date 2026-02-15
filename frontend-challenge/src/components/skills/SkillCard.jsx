
const SkillCard = ({ name, logo }) => (
  <div className="flex items-center  gap-5">
    <div
      className="w-30 h-30 rounded-md  bg-center bg-cover shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12),0_18px_88px_-4px_rgba(24,39,75,0.14)]"
      style={{ backgroundImage: `url(${logo})` }}
    ></div>
    <span className="text-lg font-medium uppercase text-gray-500">{name}</span>
  </div>
);

export default SkillCard;