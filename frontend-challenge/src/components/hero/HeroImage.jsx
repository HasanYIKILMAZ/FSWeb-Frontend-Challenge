import heroImg from "../../assets/heroimg.png";

const HeroImage = ({ className }) => {
  return (
    <div
      className={`rounded-[18px] shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12),0_18px_88px_-4px_rgba(24,39,75,0.14)] overflow-hidden ${className}`}
    >
      <img
        src={heroImg}
        alt="Hero"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroImage;
