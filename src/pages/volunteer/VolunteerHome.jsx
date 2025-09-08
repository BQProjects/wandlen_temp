import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BgVideo from "../../assets/BgVideo.mp4";

// Helper function to get tag icon based on tag content
const getTagIcon = (tag) => {
  const lowerTag = tag.toLowerCase();
  if (lowerTag.includes("zon") || lowerTag.includes("opkomende")) {
    return (
      <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 13.2507C8.18372 13.2507 8.36104 13.3182 8.49833 13.4403C8.63563 13.5623 8.72334 13.7305 8.74483 13.913L8.75008 14.0007V14.7508C8.74987 14.942 8.67667 14.1258 8.54542 14.2648C8.41418 14.4039 8.23481 14.4875 8.04396 14.4987C7.85311 14.5099 7.66518 14.4478 7.51857 14.3251C7.37197 14.2024 7.27775 14.0284 7.25517 13.8385L7.24992 13.7508V14.0007C7.24992 13.8018 7.32894 13.611 7.46961 13.4704C7.61028 13.3297 7.80107 13.2507 8 13.2507ZM12.7353 11.6831L12.8058 11.7454L13.3308 12.2704C13.4654 12.4054 13.5435 12.5865 13.5493 12.777C13.5551 12.9674 13.4882 13.153 13.3622 13.2959C13.2361 13.4388 13.0604 13.5285 12.8707 13.5465C12.681 13.5646 12.4915 13.5098 12.3407 13.3932L12.2702 13.331L11.7452 12.8059C11.6157 12.6767 11.538 12.5047 11.5265 12.3222C11.515 12.1396 11.5706 11.9592 11.6829 11.8148C11.7951 11.6704 11.9562 11.572 12.136 11.5381C12.3157 11.5042 12.5016 11.5371 12.6588 11.6306L12.7353 11.6831ZM4.25484 11.7454C4.38398 11.8745 4.46156 12.0464 4.47303 12.2286C4.48449 12.4109 4.42904 12.5911 4.31709 12.7354L4.25484 12.8059L3.72978 13.331C3.59479 13.4655 3.41367 13.5436 3.22318 13.5494C3.0327 13.5552 2.84714 13.4883 2.7042 13.3623C2.56126 13.2362 2.47166 13.0605 2.45359 12.8708C2.43551 12.6811 2.49033 12.4917 2.6069 12.3409L2.66916 12.2704L3.19422 11.7454C3.33488 11.6048 3.52563 11.5258 3.72453 11.5258C3.92342 11.5258 4.11417 11.6048 4.25484 11.7454ZM1.99934 7.25037C2.19052 7.25059 2.3744 7.32379 2.51342 7.45502C2.65244 7.58626 2.73609 7.76562 2.7473 7.95646C2.7585 8.1473 2.69641 8.33522 2.5737 8.48182C2.45099 8.62841 2.27694 8.72263 2.0871 8.74521L1.99934 8.75046H1.24925C1.05807 8.75025 0.874186 8.67704 0.735169 8.54581C0.596151 8.41458 0.512494 8.23521 0.50129 8.04437C0.490086 7.85353 0.552181 7.66561 0.674887 7.51901C0.797593 7.37242 0.971649 7.2782 1.16149 7.25562L1.24925 7.25037H1.99934ZM14.7507 7.25037C14.9419 7.25059 15.1258 7.32379 15.2648 7.45502C15.4038 7.58626 15.4875 7.76562 15.4987 7.95646C15.5099 8.1473 15.4478 8.33522 15.3251 8.48182C15.2024 8.62841 15.0284 8.72263 14.8385 8.74521L14.7507 8.75046H14.0007C13.8095 8.75025 13.6256 8.67704 13.4866 8.54581C13.3476 8.41458 13.2639 8.23521 13.2527 8.04437C13.2415 7.85353 13.3036 7.66561 13.4263 7.51901C13.549 7.37242 13.7231 7.2782 13.9129 7.25562L14.0007 7.25037H14.7507ZM3.65927 2.60762L3.72978 2.66987L4.25484 3.1949C4.38936 3.32987 4.46746 3.51099 4.47328 3.70147C4.4791 3.89194 4.41219 4.07748 4.28615 4.22041C4.16011 4.36335 3.98439 4.45295 3.79468 4.47102C3.60497 4.48909 3.41549 4.43428 3.26473 4.31771L3.19422 4.25546L2.66916 3.73043C2.54021 3.60118 2.46284 3.42934 2.45153 3.24713C2.44023 3.06491 2.49579 2.88483 2.60777 2.74064C2.71976 2.59645 2.8805 2.49806 3.05985 2.4639C3.23921 2.42975 3.42486 2.46218 3.58201 2.55511L3.65927 2.60762ZM13.3308 2.66987C13.46 2.79902 13.5376 2.97086 13.549 3.15314C13.5605 3.33542 13.505 3.51561 13.3931 3.65992L13.3308 3.73043L12.8058 4.25546C12.6708 4.38998 12.4897 4.46808 12.2992 4.47389C12.1087 4.47971 11.9232 4.41281 11.7802 4.28677C11.6373 4.16074 11.5477 3.98503 11.5296 3.79533C11.5115 3.60562 11.5663 3.41616 11.6829 3.2654L11.7452 3.1949L12.2702 2.66987C12.4109 2.52926 12.6016 2.45027 12.8005 2.45027C12.9994 2.45027 13.1902 2.52926 13.3308 2.66987ZM8 0.5C8.18372 0.500024 8.36104 0.567471 8.49833 0.689547C8.63563 0.811623 8.72334 0.979838 8.74483 1.16229L8.75008 1.25004V2.00008C8.74987 2.19125 8.67667 2.37513 8.54542 2.51414C8.41418 2.65315 8.23481 2.7368 8.04396 2.748C7.85311 2.75921 7.66518 2.69712 7.51857 2.57442C7.37197 2.45172 7.27775 2.27767 7.25517 2.08784L7.24992 2.00008V1.25004C7.24992 1.05112 7.32894 0.860342 7.46961 0.719682C7.61028 0.579022 7.80107 0.5 8 0.5Z"
          fill="#381207"
        />
      </svg>
    );
  } else if (lowerTag.includes("winter") || lowerTag.includes("sneeuw")) {
    return (
      <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 2L10 6H14L11 9L12 13L8 10L4 13L5 9L2 6H6L8 2Z"
          fill="#381207"
        />
      </svg>
    );
  } else if (lowerTag.includes("vogels") || lowerTag.includes("dieren")) {
    return (
      <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 4C9.1 4 10 3.1 10 2S9.1 0 8 0 6 0.9 6 2 6.9 4 8 4ZM8 6C6.9 6 6 6.9 6 8S6.9 10 8 10 10 9.1 10 8 9.1 6 8 6ZM8 12C6.9 12 6 12.9 6 14S6.9 16 8 16 10 15.1 10 14 9.1 12 8 12Z"
          fill="#381207"
        />
      </svg>
    );
  }
  // Default icon
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="7" stroke="#381207" strokeWidth="2" />
    </svg>
  );
};

// Heart Icon Component (simple SVG)
const HeartIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 17.5L8.75 16.375C4.25 12.375 1.25 9.75 1.25 6.875C1.25 4.625 2.875 3 5.125 3C6.625 3 8.0625 3.8125 8.75 4.9375C9.4375 3.8125 10.875 3 12.375 3C14.625 3 16.25 4.625 16.25 6.875C16.25 9.75 13.25 12.375 8.75 16.375L10 17.5Z"
      fill="#381207"
    />
  </svg>
);
// Filter Button Component (updated for Figma style)
const FilterButton = ({ label, onClick, isActive = false }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-5 pt-[0.6875rem] pb-[0.6875rem] px-5 h-[3.125rem] rounded-lg font-medium transition-all duration-200 ${
      isActive
        ? "bg-[#381207] text-[#ede4dc] shadow-lg"
        : "bg-[#f8f5f0] text-[#381207] hover:bg-[#e6d9cd] border border-[#d4c4b7]"
    }`}
  >
    <span className="body text-[#ede4dc] font-['Poppins'] font-medium leading-[136%]">
      {label}
    </span>
    <svg
      width={13}
      height={8}
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.65556 7.38741L-0.00143814 1.73041L1.41256 0.316406L6.36256 5.26641L11.3126 0.316406L12.7266 1.73041L7.06956 7.38741C6.88203 7.57488 6.62773 7.68019 6.36256 7.68019C6.0974 7.68019 5.84309 7.57488 5.65556 7.38741Z"
        fill="currentColor"
      />
    </svg>
  </button>
);

// Video Card Component (updated for Figma style)
const VideoCard = ({
  title,
  duration,
  location,
  thumbnail,
  tags,
  views,
  likes,
  onSelect,
}) => (
  <div
    className="bg-[#e6d9cd] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group max-w-sm"
    onClick={onSelect}
  >
    <div className="relative h-48 bg-gradient-to-br from-[#d4c4b7] to-[#c4b49a]">
      <video
        src={thumbnail}
        alt={title}
        className="w-full h-full object-cover"
        muted
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
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#d9bbaa] hover:bg-[#c4b49a] transition-colors"
          >
            {getTagIcon(tag)}
            <span className="text-[#381207] font-['Poppins'] text-xs font-medium leading-[136%]">
              {tag}
            </span>
          </div>
        ))}
      </div>
      <h3 className="font-semibold text-[#381207] mb-2 line-clamp-2">
        {title}
      </h3>
      <p className="text-[#6b5b4a] text-sm mb-2">{location}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4698 7.83C14.8817 6.30882 13.8608 4.99331 12.5332 4.04604C11.2056 3.09878 9.62953 2.56129 7.99979 2.5C6.37005 2.56129 4.79398 3.09878 3.46639 4.04604C2.1388 4.99331 1.11787 6.30882 0.529787 7.83C0.490071 7.93985 0.490071 8.06015 0.529787 8.17C1.11787 9.69118 2.1388 11.0067 3.46639 11.954C4.79398 12.9012 6.37005 13.4387 7.99979 13.5C9.62953 13.4387 11.2056 12.9012 12.5332 11.954C13.8608 11.0067 14.8817 9.69118 15.4698 8.17C15.5095 8.06015 15.5095 7.93985 15.4698 7.83ZM7.99979 12.5C5.34979 12.5 2.54979 10.535 1.53479 8C2.54979 5.465 5.34979 3.5 7.99979 3.5C10.6498 3.5 13.4498 5.465 14.4648 8C13.4498 10.535 10.6498 12.5 7.99979 12.5Z"
                fill="#5B6502"
              />
            </svg>
            <span className="text-[#5b6502] font-['Poppins'] text-sm font-medium">
              {views} weergaven
            </span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.50001 1.71875C5.96672 1.71875 4.49624 2.32784 3.41205 3.41204C2.32785 4.49623 1.71876 5.96672 1.71876 7.5C1.71876 8.42562 1.93626 9.29937 2.32188 10.0737C2.47688 10.385 2.53626 10.7563 2.43876 11.1219L2.06626 12.5125C2.05062 12.5708 2.05058 12.6321 2.06616 12.6904C2.08174 12.7487 2.11238 12.8018 2.155 12.8445C2.19763 12.8872 2.25074 12.9179 2.30899 12.9336C2.36725 12.9492 2.4286 12.9493 2.48688 12.9338L3.87876 12.5612C4.23048 12.4711 4.60306 12.5126 4.92626 12.6781C5.72569 13.0763 6.60689 13.2828 7.50001 13.2812C9.03329 13.2812 10.5038 12.6722 11.588 11.588C12.6722 10.5038 13.2813 9.03328 13.2813 7.5C13.2813 5.96672 12.6722 4.49623 11.588 3.41204C10.5038 2.32784 9.03329 1.71875 7.50001 1.71875ZM0.781257 7.5C0.781257 3.78938 3.78938 0.78125 7.50001 0.78125C11.2106 0.78125 14.2188 3.78938 14.2188 7.5C14.2188 11.2106 11.2106 14.2188 7.50001 14.2188C6.42626 14.2188 5.41001 13.9663 4.50813 13.5175C4.38909 13.4551 4.25162 13.4373 4.12063 13.4675L2.72938 13.8394C1.77688 14.0944 0.905632 13.2231 1.16063 12.2706L1.53313 10.8794C1.5633 10.7484 1.54556 10.6109 1.48313 10.4919C1.0201 9.56259 0.779794 8.53825 0.781257 7.5ZM9.54501 4.88875C10.3169 5.1775 10.7813 5.96187 10.7813 6.9425C10.7813 7.515 10.5094 8.05125 10.1844 8.49688C9.85376 8.94938 9.42813 9.36187 9.03563 9.69562L8.97751 9.74563C8.51688 10.1381 8.13376 10.4644 7.50001 10.4644C6.86563 10.4644 6.48313 10.1381 6.02251 9.74563L5.96438 9.69562C5.57126 9.36187 5.14626 8.94938 4.81563 8.49688C4.49063 8.05125 4.21876 7.51562 4.21876 6.9425C4.21876 5.96187 4.68313 5.1775 5.45501 4.88875C6.10688 4.645 6.84876 4.80313 7.50001 5.31C8.15188 4.80375 8.89376 4.645 9.54501 4.88875ZM9.21688 5.76688C8.89313 5.64625 8.37813 5.71063 7.83501 6.265C7.79136 6.3096 7.73924 6.34503 7.68171 6.36922C7.62419 6.39341 7.56241 6.40588 7.50001 6.40588C7.4376 6.40588 7.37582 6.39341 7.3183 6.36922C7.26077 6.34503 7.20866 6.3096 7.16501 6.265C6.62188 5.71063 6.10688 5.64625 5.78376 5.76688C5.46501 5.88563 5.15626 6.25062 5.15626 6.9425C5.15626 7.22563 5.29688 7.56563 5.57251 7.94375C5.84313 8.31437 6.20813 8.6725 6.57126 8.98125C7.11438 9.44375 7.24126 9.52687 7.50001 9.52687C7.75876 9.52687 7.88563 9.44312 8.42876 8.98125C8.79188 8.6725 9.15688 8.31437 9.42751 7.94375C9.70313 7.56563 9.84376 7.22563 9.84376 6.9425C9.84376 6.25062 9.53438 5.88563 9.21688 5.76688Z"
                  fill="#5B6502"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width={15} height={15} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-[#5b6502] font-['Poppins'] text-sm font-medium">
              {likes} likes
            </span>
          </div>
        </div>
        <HeartIcon />
      </div>
    </div>
  </div>
);

// VideoGridWithFilters Component
const VideoGridWithFilters = ({ videos, onVideoSelect }) => {
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="filtersysteem flex flex-col justify-end items-start pb-24 p-6 w-full">
      <div className="filters flex flex-wrap items-center gap-4 mb-8">
        {[
          "Lengte",
          "Locatie",
          "Seizoen",
          "Natuurtype",
          "Dieren",
          "Geluidsprikkels",
        ].map((filter) => (
          <FilterButton
            key={filter}
            label={filter}
            onClick={() => toggleFilter(filter)}
            isActive={activeFilters.includes(filter)}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            duration={video.duration}
            location={video.location}
            thumbnail={video.thumbnail}
            tags={video.tags || []}
            views={video.views || 320}
            likes={video.likes || 123}
            onSelect={() => onVideoSelect(video.id)}
          />
        ))}
      </div>
    </div>
  );
};

const VolunteerHome = () => {
  const navigate = useNavigate();

  const videos = [
    {
      id: 1,
      title: "Korte wandeling Holterberg",
      duration: "15 min",
      location: "Holterberg, Nederland",
      thumbnail: BgVideo,
      tags: ["Opkomende zon", "Kinderen", "Wilde dieren"],
      views: 320,
      likes: 123,
    },
    {
      id: 2,
      title: "Boswandeling met vogels",
      duration: "25 min",
      location: "Veluwe, Nederland",
      thumbnail: BgVideo,
      tags: ["Winter", "Sneeuw", "Gouden gras"],
      views: 450,
      likes: 89,
    },
    {
      id: 3,
      title: "Strandwandeling zonsondergang",
      duration: "30 min",
      location: "Noordzee kust",
      thumbnail: BgVideo,
      tags: ["Winter", "Koeien", "Rustig briesje"],
      views: 200,
      likes: 67,
    },
    {
      id: 4,
      title: "Bergpad met uitzicht",
      duration: "20 min",
      location: "Drenthe, Nederland",
      thumbnail: BgVideo,
      tags: ["Vogels", "Opkomende zon"],
      views: 300,
      likes: 150,
    },
    {
      id: 5,
      title: "Rustige rivierwandeling",
      duration: "18 min",
      location: "IJssel, Nederland",
      thumbnail: BgVideo,
      tags: ["Kinderen", "Wilde dieren"],
      views: 280,
      likes: 95,
    },
    {
      id: 6,
      title: "Herfstkleuren in het bos",
      duration: "22 min",
      location: "Utrechtse Heuvelrug",
      thumbnail: BgVideo,
      tags: ["Sneeuw", "Gouden gras"],
      views: 400,
      likes: 110,
    },
  ];

  const handleVideoSelect = (id) => {
    navigate(`video/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f5f0] to-[#ede4dc]">
      {/* Existing header and other sections remain unchanged */}
      <div className="flex flex-col h-full items-center gap-1.5 pt-[6.25rem] pb-[6.25rem] bg-accent">
        <div className="bring_nature_to_those_who_can_t_walk text-[#ede4dc] font-['Poppins'] text-5xl font-medium leading-[136%]">
          Bring nature to those who can’t walk
        </div>
        <div className="record_or_upload_videos_of_nature_and_share_them_with_clients__ask_questions_or_leave_a_message_anytime_ self-stretch text-[#ede4dc] text-center font-['Poppins'] text-xl font-medium leading-[136%]">
          Record or upload videos of nature and share them with clients. Ask
          questions or leave a message anytime!
        </div>
        <div className="how_to_help_as_a_volunteer text-[#dd9219] font-['Poppins'] text-2xl font-semibold leading-[136%]">
          How to help as a Volunteer
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="recently_created_by_you self-stretch h-[1.8125rem] text-[#dd9219] font-['Poppins'] text-2xl font-semibold leading-[136%]">
            Recently Created by You
          </div>
          <div className="view__edit__and_track_the_impact_of_your_videos_ w-[621px] text-[#381207] font-['Poppins'] text-5xl font-medium leading-[136%]">
            View, edit, and track the impact of your videos.
          </div>
        </div>

        {/* Updated Video Grid with Filters */}
        <VideoGridWithFilters
          videos={videos}
          onVideoSelect={handleVideoSelect}
        />
      </div>
      {/* Existing section remains unchanged */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="location_request_form text-[#381207] font-['Poppins'] text-3xl md:text-4xl font-medium leading-normal mb-4">
              Location Request Form
            </h2>
            <p className="select_and_add_members_from_this_quote_request_ text-[#381207] font-['Poppins'] text-lg leading-normal">
              Select and add members from this quote request.
            </p>
            <p className="all_patient text-[#381207] font-['Poppins'] text-lg leading-normal">
              All Patient
            </p>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-[#a6a643]/[.2] border-b border-[#d9bbaa]">
                  <th className="px-6 py-4 text-left text-[#2a341f] font-['Poppins'] text-lg font-medium">
                    Email
                    <svg
                      width={11}
                      height={12}
                      viewBox="0 0 11 12"
                      fill="none"
                      className="inline ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.66667 1.33203V10.6654M5.66667 10.6654L10.3333 5.9987M5.66667 10.6654L1 5.9987"
                        stroke="#2A341F"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </th>
                  <th className="px-6 py-4 text-left text-[#2a341f] font-['Poppins'] text-lg font-medium">
                    Location Details
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      className="inline ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.9987 1.33203V10.6654M5.9987 10.6654L10.6654 5.9987M5.9987 10.6654L1.33203 5.9987"
                        stroke="#2A341F"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </th>
                  <th className="px-6 py-4 text-left text-[#2a341f] font-['Poppins'] text-lg font-medium hidden md:table-cell">
                    Google Maps Link
                    <svg
                      width={11}
                      height={12}
                      viewBox="0 0 11 12"
                      fill="none"
                      className="inline ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.33464 1.33203V10.6654M5.33464 10.6654L10.0013 5.9987M5.33464 10.6654L0.667969 5.9987"
                        stroke="#2A341F"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </th>
                  <th className="px-6 py-4 text-center text-[#2a341f] font-['Poppins'] text-lg font-medium">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="border-b border-[#d9bbaa] bg-[#ede4dc]">
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base">
                    name@example.com
                  </td>
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base">
                    Dalfsen
                  </td>
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base underline hidden md:table-cell">
                    <a
                      href="https://maps.app.goo.gl/M2dmycCvDJEW1hGv8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://maps.app.goo.gl/M2dmycCvDJEW1hGv8
                    </a>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="px-4 py-2 bg-[#dd9219] text-white font-['Poppins'] text-base rounded hover:bg-[#c47a15] transition-colors">
                      Create Video
                    </button>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="border-b border-[#d9bbaa]">
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base">
                    name@example.com
                  </td>
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base">
                    Deventer
                  </td>
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base underline hidden md:table-cell">
                    <a
                      href="https://maps.app.goo.gl/21ZC1HqYdW4zJBqr9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://maps.app.goo.gl/21ZC1HqYdW4zJBqr9
                    </a>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="px-4 py-2 bg-[#dd9219] text-white font-['Poppins'] text-base rounded hover:bg-[#c47a15] transition-colors">
                      Create Video
                    </button>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="border-b border-[#d9bbaa] bg-[#ede4dc]">
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base">
                    name@example.com
                  </td>
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base">
                    Haaksbergen
                  </td>
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base underline hidden md:table-cell">
                    <a
                      href="https://maps.app.goo.gl/eipgo4m27JpeSbx39"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://maps.app.goo.gl/eipgo4m27JpeSbx39
                    </a>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="px-4 py-2 bg-[#dd9219] text-white font-['Poppins'] text-base rounded hover:bg-[#c47a15] transition-colors">
                      Create Video
                    </button>
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="border-b border-[#d9bbaa]">
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base">
                    name@example.com
                  </td>
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base">
                    Hellendoorn
                  </td>
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base underline hidden md:table-cell">
                    <a
                      href="https://maps.app.goo.gl/D4WMqAFz73jtzdsVA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://maps.app.goo.gl/D4WMqAFz73jtzdsVA
                    </a>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="px-4 py-2 bg-[#dd9219] text-white font-['Poppins'] text-base rounded hover:bg-[#c47a15] transition-colors">
                      Create Video
                    </button>
                  </td>
                </tr>
                {/* Row 5 */}
                <tr className="border-b border-[#d9bbaa] bg-[#ede4dc]">
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base">
                    name@example.com
                  </td>
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base">
                    Hof van Twente
                  </td>
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base underline hidden md:table-cell">
                    <a
                      href="https://maps.app.goo.gl/zwF5ExxCu45pWQpu5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://maps.app.goo.gl/zwF5ExxCu45pWQpu5
                    </a>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="px-4 py-2 bg-[#dd9219] text-white font-['Poppins'] text-base rounded hover:bg-[#c47a15] transition-colors">
                      Create Video
                    </button>
                  </td>
                </tr>
                {/* Row 6 */}
                <tr className="border-b border-[#d9bbaa]">
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base">
                    name@example.com
                  </td>
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base">
                    Olst-Wijhe
                  </td>
                  <td className="px-6 py-4 text-[#381207] font-['Poppins'] text-base underline hidden md:table-cell">
                    <a
                      href="https://maps.app.goo.gl/8GaPAncNxdc8NU7r8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://maps.app.goo.gl/8GaPAncNxdc8NU7r8
                    </a>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="px-4 py-2 bg-[#dd9219] text-white font-['Poppins'] text-base rounded hover:bg-[#c47a15] transition-colors">
                      Create Video
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerHome;
