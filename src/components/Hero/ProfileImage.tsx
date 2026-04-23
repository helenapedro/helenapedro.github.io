const BASE_URL = "https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com";

export function ProfileImage() {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur"></div>
      <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white/50 sm:h-28 sm:w-28 lg:h-24 lg:w-24 xl:h-28 xl:w-28">
        <img
          src={`${BASE_URL}/me.jpg`}
          alt="Helena's profile"
          className="h-full w-full scale-[1.18] object-cover object-[52%_24%] transition-transform duration-500 group-hover:scale-[1.22]"
        />
      </div>
    </div>
  );
}
