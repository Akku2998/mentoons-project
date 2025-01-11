export const Initials = ({ profileImage, title, description, date }) => {
  return (
    <div className="flex items-center gap-4">
      <img
        className="w-16 h-16 rounded-full"
        src={profileImage}
        alt="profile Image"
      />
      <div className="font-medium">
        <div>{title}</div>
        <div className="text-xs text-gray-500">{description}</div>
        <div className="text-xs text-gray-500">{date}</div>
      </div>
    </div>
  );
};
