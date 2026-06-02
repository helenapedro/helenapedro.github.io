const PROFILE_IMAGE = '/project-images/features/revista-carreira-feature.jpg';

export function ProfileImage() {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur"></div>
      <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-white/50 sm:h-24 sm:w-24 lg:h-24 lg:w-24 xl:h-28 xl:w-28">
        <img
          src={PROFILE_IMAGE}
          alt="Helena's profile"
          className="h-full w-full scale-[1.08] object-cover object-[50%_28%] transition-transform duration-500 group-hover:scale-[1.12]"
        />
      </div>
    </div>
  );
}
