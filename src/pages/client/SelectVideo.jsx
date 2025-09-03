import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Filter Button Component
const FilterButton = ({ label, onClick, isActive = false }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
      isActive
        ? "bg-[#381207] text-[#ede4dc] shadow-lg"
        : "bg-[#f8f5f0] text-[#381207] hover:bg-[#e6d9cd] border border-[#d4c4b7]"
    }`}
  >
    <span>{label}</span>
    <svg
      width={12}
      height={8}
      viewBox="0 0 12 8"
      fill="none"
      className={`transition-transform duration-200 ${
        isActive ? "rotate-180" : ""
      }`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.293 7.293a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L6 5.586 1.707.879A1 1 0 00.293 2.293l5 5z"
        fill="currentColor"
      />
    </svg>
  </button>
);

// Video Card Component
const VideoCard = ({ title, duration, location, thumbnail, onSelect }) => (
  <div
    className="bg-[#e6d9cd] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
    onClick={onSelect}
  >
    <div className="relative h-48 bg-gradient-to-br from-[#d4c4b7] to-[#c4b49a]">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-200">
        <div className="w-16 h-16 bg-[#381207] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M8 5v14l11-7z" fill="#ede4dc" />
          </svg>
        </div>
      </div>
      <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-sm">
        {duration}
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-[#381207] mb-2 line-clamp-2">
        {title}
      </h3>
      <p className="text-[#6b5b4a] text-sm">{location}</p>
    </div>
  </div>
);

// Filter Icon Component
const FilterIcon = () => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
    <path
      d="M5 10h10M2.5 5h15M7.5 15h5"
      stroke="#381207"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

// Heart Icon Component
const HeartIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <path
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      stroke="#381207"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Search Icon Component
const SearchIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <path
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      stroke="#381207"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SelectVideo = () => {
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filters = [
    "Lengte",
    "Locatie",
    "Seizoen",
    "Natuurtype",
    "Dieren",
    "Geluidsprikkels",
  ];

  const videos = [
    {
      id: 1,
      title: "Korte wandeling Holterberg",
      duration: "15 min",
      location: "Holterberg, Nederland",
      thumbnail: "/api/placeholder/300/200",
    },
    {
      id: 2,
      title: "Boswandeling met vogels",
      duration: "25 min",
      location: "Veluwe, Nederland",
      thumbnail: "/api/placeholder/300/200",
    },
    {
      id: 3,
      title: "Strandwandeling zonsondergang",
      duration: "30 min",
      location: "Noordzee kust",
      thumbnail: "/api/placeholder/300/200",
    },
    {
      id: 4,
      title: "Bergpad met uitzicht",
      duration: "20 min",
      location: "Drenthe, Nederland",
      thumbnail: "/api/placeholder/300/200",
    },
    {
      id: 5,
      title: "Rustige rivierwandeling",
      duration: "18 min",
      location: "IJssel, Nederland",
      thumbnail: "/api/placeholder/300/200",
    },
    {
      id: 6,
      title: "Herfstkleuren in het bos",
      duration: "22 min",
      location: "Utrechtse Heuvelrug",
      thumbnail: "/api/placeholder/300/200",
    },
  ];

  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const handleVideoSelect = (videoId) => {
    console.log("Selected video:", videoId);
    // Navigate to the video page
    navigate("/client/video");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f5f0] to-[#ede4dc] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#381207] mb-4">
            Select Your Video
          </h1>
          <p className="text-lg text-[#6b5b4a] max-w-2xl">
            Discover the perfect nature walk video for your relaxation and
            mindfulness journey.
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FilterIcon />
            <h2 className="text-2xl font-semibold text-[#381207]">Filters</h2>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            {filters.map((filter) => (
              <FilterButton
                key={filter}
                label={filter}
                onClick={() => toggleFilter(filter)}
                isActive={activeFilters.includes(filter)}
              />
            ))}
          </div>

          {/* Search and Favorites */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-[#d4c4b7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#381207] focus:border-transparent w-64"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <SearchIcon />
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 px-6 py-3 bg-[#381207] text-[#ede4dc] rounded-lg hover:bg-[#2a1510] transition-colors duration-200">
              <HeartIcon />
              <span>Favorites</span>
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              duration={video.duration}
              location={video.location}
              thumbnail={video.thumbnail}
              onSelect={() => handleVideoSelect(video.id)}
            />
          ))}
        </div>

        {/* Footer Section */}
        <div className="bg-[#381207] rounded-2xl p-8 text-center text-[#ede4dc]">
          <h3 className="text-2xl font-semibold mb-4 text-[#dd9219]">
            Your Favorite Videos
          </h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Easily find and enjoy the videos you love most, anytime. Build your
            personal collection of nature walks that bring you peace and
            tranquility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectVideo;
