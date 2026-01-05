import { MapPin, Backpack} from 'lucide-react';
import { SiFiles } from 'react-icons/si'; 
import { ProfileImage } from './ProfileImage';
import { StatusBadge } from './StatusBadge';
import { SocialLinks } from './SocialLinks';

const BASE_URL = "https://hmpedropublicfiles.s3.us-east-2.amazonaws.com";
const ADDRESS = "Bellevue, WA";
const AVAILABILITY = "Available for full-time W2 Employment";
const JOB_TITLE = "Software Development Engineer";
const SCHOOL = "M.Sc. Computer Science - Maharishi International University";

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white h-full lg:min-h-screen">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      <div className="px-6 py-12 relative">
        <div className="flex flex-col items-center text-center">
          <ProfileImage />
          <div className="mt-6">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Helena Pedro
            </h1>
            <p className="text-xl text-gray-200 mb-2">{`${JOB_TITLE}`}</p>
            <p className="text-xl text-gray-200 mb-2">{`${SCHOOL}`}</p>
          </div>
          <div className="flex flex-col gap-4 text-sm mb-2 w-full">
            <StatusBadge Icon={MapPin} text={`${ADDRESS}`} />
            <StatusBadge Icon={Backpack} text={`${AVAILABILITY}`} />
            <StatusBadge Icon={SiFiles} text="Resume" href={`${BASE_URL}/Resume-Pedro-HelenaMbeua.pdf`} target="_blank" />
          </div>
          <p className="text-base leading-relaxed mb-2 text-gray-300 max-w-2xl mx-auto">
            I'm a passionate Software Engineer with a strong background in full-stack development, microservices, 
            database design, cloud solutions, and data science. I am adept at building high-performance and scalable systems. 
            <br/> This is a showcase of my projects and skills.
          </p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}