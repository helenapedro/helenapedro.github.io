export function ProfileImage() {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur"></div>
      <img 
        src="https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com/me_at_google.jpg" 
        alt="Helena's profile"
        className="relative w-32 h-32 rounded-full object-cover border-2 border-white/50"
      />
    </div>
  );
}