import React from "react";
import { Link, useParams } from "react-router-dom";
import BgVideo from "../../assets/BgVideo.mp4";
import BackArrow from "../../assets/BackArrow.svg";
import Heart from "../../assets/Heart.svg";
import StarFilled from "../../assets/StarFilled.svg";
import StarEmpty from "../../assets/StarEmpty.svg";
import Quote from "../../assets/Quote.svg";

const VideoVolunteer = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-secondary py-16 px-8 md:px-16 lg:px-32">
        <div className=" mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-brown mb-12 leading-tight">
            Ervaringen met deze video:
          </h1>

          {/* Video Section */}
          <div className="py-16 px-8 md:px-16 lg:px-32">
            <div className=" mx-auto">
              {/* Back Button */}
              <Link
                to="/volunteer"
                className="inline-flex items-center gap-3 text-brown hover:text-accent transition-colors mb-8"
              >
                <img src={BackArrow} alt="Back Arrow" />
                <span className="text-2xl font-semibold">Terug</span>
              </Link>

              {/* Video Title */}
              <h2 className="text-3xl font-semibold text-brown mb-8">
                Winterwandeling Boetelerveld
              </h2>

              {/* Video Player */}
              <div className="bg-black rounded-2xl overflow-hidden mb-8">
                <video
                  src={BgVideo}
                  controls
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <button className="p-3 bg-secondary rounded-full hover:bg-accent transition-colors">
                    <img src={Heart} alt="Heart" />
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-brown font-medium">
                    Winterwandeling Boetelerveld
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-border p-6 rounded-lg shadow-lg">
              <div className="text-xl font-semibold text-brown mb-2">Naam</div>
              <div className="text-brown font-medium mb-4">-</div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(4)].map((_, i) => (
                  <img key={i} src={StarFilled} alt="Star" />
                ))}
                <img src={StarEmpty} alt="Star" />
              </div>
              <div className="flex justify-center">
                <div className="bg-secondary p-3 rounded-full">
                  <img src={Quote} alt="Quote" />
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-border p-6 rounded-lg shadow-lg">
              <div className="text-xl font-semibold text-brown mb-2">Sanne</div>
              <div className="text-brown font-medium mb-4">
                Tijdens de boswandeling met herfstbladeren begon mevrouw De
                Vries spontaan te glimlachen. Ze wees naar het scherm.
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(4)].map((_, i) => (
                  <img key={i} src={StarFilled} alt="Star" />
                ))}
                <img src={StarEmpty} alt="Star" />
              </div>
              <div className="flex justify-center">
                <div className="bg-secondary p-3 rounded-full">
                  <img src={Quote} alt="Quote" />
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-border p-6 rounded-lg shadow-lg">
              <div className="text-xl font-semibold text-brown mb-2">
                Martijn
              </div>
              <div className="text-brown font-medium mb-4">
                Mijn vader herkende meteen de dijk in de video. Hij begon te
                vertellen over fietstochten met zijn broer. Ik had hem in tijden
                niet zo enthousiast gehoord.
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={StarFilled} alt="Star" />
                ))}
              </div>
              <div className="flex justify-center">
                <div className="bg-secondary p-3 rounded-full">
                  <img src={Quote} alt="Quote" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoVolunteer;
