import React, { useState } from "react";

const VolunteerCreateVideo = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    location: "",
    season: "",
    natureType: "",
    soundStimuli: "",
    animals: "",
    tags: "",
  });

  const [coverImage, setCoverImage] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCoverImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
    }
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with backend API
    console.log("Creating video:", { ...formData, coverImage, videoFile });
    // Example: const formDataObj = new FormData();
    // formDataObj.append('coverImage', coverImage);
    // formDataObj.append('videoFile', videoFile);
    // formDataObj.append('metadata', JSON.stringify(formData));
    // fetch('/api/volunteer/create-video', { method: 'POST', body: formDataObj });
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      description: "",
      duration: "",
      location: "",
      season: "",
      natureType: "",
      soundStimuli: "",
      animals: "",
      tags: "",
    });
    setCoverImage(null);
    setVideoFile(null);
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-medium text-[#381207] text-center mb-8">
          Create Video
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Cover Page Upload */}
          <div className="bg-[#f7f6f4] rounded-2xl p-6">
            <h2 className="text-lg font-medium text-[#381207] mb-4">
              Cover page
            </h2>
            <div className="border-2 border-dashed border-[#e5e3df] rounded-lg p-8 h-64 flex flex-col items-center justify-center bg-[#f7f6f4]">
              {coverImage ? (
                <div className="text-center">
                  <img
                    src={URL.createObjectURL(coverImage)}
                    alt="Cover preview"
                    className="max-w-full max-h-32 mx-auto mb-4 rounded"
                  />
                  <p className="text-[#381207] text-sm">{coverImage.name}</p>
                  <button
                    onClick={() => setCoverImage(null)}
                    className="mt-2 text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCoverImageUpload}
                    className="hidden"
                    id="cover-upload"
                  />
                  <label
                    htmlFor="cover-upload"
                    className="cursor-pointer bg-[#a6a643] text-white px-4 py-2 rounded-lg hover:bg-[#8b8b3a] transition font-medium"
                  >
                    Upload Image
                  </label>
                </>
              )}
            </div>
          </div>

          {/* Video Upload */}
          <div className="bg-[#f7f6f4] rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-[#381207]">Video</h2>
              <div className="bg-[#a6a643] text-white px-3 py-1 rounded text-sm font-medium flex items-center gap-1">
                Add
                <svg width={12} height={12} viewBox="0 0 16 16" fill="none">
                  <path
                    d="M12.6654 6L7.9987 10.6667L3.33203 6"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="border-2 border-dashed border-[#e5e3df] rounded-lg p-8 h-64 flex flex-col items-center justify-center bg-[#f7f6f4]">
              {videoFile ? (
                <div className="text-center">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mx-auto mb-4 text-[#a6a643]"
                  >
                    <path
                      d="M14.828 14.828a4 4 0 0 1-5.656 0M9 10h1.586a1 1 0 0 1 .707.293l.707.707A1 1 0 0 0 12.414 11H15m-3-3h1.586a1 1 0 0 1 .707.293l.707.707A1 1 0 0 0 15.414 9H18m-3-3h1.586a1 1 0 0 1 .707.293l.707.707A1 1 0 0 0 17.414 7H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[#381207] text-sm">{videoFile.name}</p>
                  <button
                    onClick={() => setVideoFile(null)}
                    className="mt-2 text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    className="hidden"
                    id="video-upload"
                  />
                  <label
                    htmlFor="video-upload"
                    className="cursor-pointer bg-[#a6a643] text-white px-4 py-2 rounded-lg hover:bg-[#8b8b3a] transition font-medium mb-4 block"
                  >
                    Upload Video
                  </label>

                  {/* Upload Options */}
                  <div className="bg-[#ede4dc] rounded-lg p-2 shadow-sm">
                    <div className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-100">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 2V10M8 2L11.3333 5.33333M8 2L4.66667 5.33333M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
                          stroke="#4B4741"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-[#4b4741] text-sm">
                        Upload from computer
                      </span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-100">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6.66526 11.6994L5.48526 12.8461C5.17584 13.1555 4.75617 13.3293 4.31859 13.3293C3.881 13.3293 3.46134 13.1555 3.15192 12.8461C2.8425 12.5367 2.66867 12.117 2.66867 11.6794C2.66867 11.2418 2.8425 10.8222 3.15192 10.5127L6.17859 7.47941C6.47566 7.18137 6.87594 7.00893 7.2966 6.99776C7.71726 6.98659 8.12612 7.13756 8.43859 7.41941L8.51859 7.48608C8.64501 7.60985 8.81542 7.67833 8.99233 7.67645C9.16924 7.67457 9.33815 7.6025 9.46192 7.47608C9.58569 7.34966 9.65417 7.17925 9.65229 7.00234C9.65042 6.82543 9.57834 6.65651 9.45192 6.53275C9.4141 6.48426 9.37405 6.43754 9.33192 6.39275C8.76282 5.89762 8.02681 5.63731 7.27297 5.66454C6.51912 5.69177 5.80381 6.00451 5.27192 6.53941L2.20526 9.57275C1.68416 10.1399 1.40234 10.8865 1.41864 11.6566C1.43494 12.4266 1.74811 13.1606 2.29274 13.7053C2.83738 14.2499 3.57136 14.5631 4.34142 14.5794C5.11148 14.5957 5.85806 14.3138 6.42526 13.7927L7.57859 12.6661C7.69247 12.5418 7.75507 12.3791 7.7538 12.2106C7.75252 12.042 7.68747 11.8803 7.57173 11.7578C7.45599 11.6353 7.29815 11.5611 7.12997 11.5503C6.96179 11.5395 6.79575 11.5928 6.66526 11.6994ZM13.7919 2.20608C13.2311 1.64875 12.4726 1.33594 11.6819 1.33594C10.8913 1.33594 10.1327 1.64875 9.57192 2.20608L8.41859 3.33275C8.30471 3.45698 8.24211 3.61973 8.24338 3.78826C8.24466 3.95678 8.30971 4.11857 8.42545 4.24107C8.54119 4.36357 8.69903 4.43769 8.86721 4.44851C9.03539 4.45934 9.20143 4.40606 9.33192 4.29941L10.4853 3.15275C10.7947 2.84333 11.2143 2.6695 11.6519 2.6695C12.0895 2.6695 12.5092 2.84333 12.8186 3.15275C13.128 3.46216 13.3018 3.88183 13.3018 4.31941C13.3018 4.757 13.128 5.17666 12.8186 5.48608L9.79192 8.51941C9.49485 8.81745 9.09457 8.98989 8.67391 9.00106C8.25325 9.01223 7.84439 8.86127 7.53192 8.57941L7.45192 8.51275C7.3255 8.38898 7.15509 8.3205 6.97819 8.32237C6.80128 8.32425 6.63236 8.39633 6.50859 8.52275C6.38482 8.64917 6.31634 8.81957 6.31822 8.99648C6.32009 9.17339 6.39217 9.34231 6.51859 9.46608C6.56724 9.51537 6.61842 9.5621 6.67192 9.60608C7.24171 10.0997 7.97741 10.359 8.73079 10.3318C9.48417 10.3046 10.1992 9.99287 10.7319 9.45941L13.7653 6.42608C14.3261 5.8688 14.6438 5.11223 14.6488 4.32158C14.6538 3.53092 14.3457 2.77041 13.7919 2.20608Z"
                          fill="#381207"
                        />
                      </svg>
                      <span className="text-[#381207] text-sm font-medium">
                        Add link
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Video Info Form */}
        <div className="bg-[#f7f6f4] rounded-2xl p-8">
          <h2 className="text-lg font-medium text-[#381207] mb-6">
            Video Info
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-[#381207] font-medium mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-[#b3b1ac] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
                placeholder="Enter a clear and concise title"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-[#381207] font-medium mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-3 border border-[#b3b1ac] bg-white rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
                placeholder="What's this video about? Share key highlights or purpose..."
              />
            </div>

            {/* Duration and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#381207] font-medium mb-2">
                  Video duration
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#b3b1ac] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f] appearance-none"
                >
                  <option value="">-Select an option-</option>
                  <option value="short">Short (0-5 min)</option>
                  <option value="medium">Medium (5-15 min)</option>
                  <option value="long">Long (15+ min)</option>
                </select>
              </div>
              <div>
                <label className="block text-[#381207] font-medium mb-2">
                  Location
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#b3b1ac] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f] appearance-none"
                >
                  <option value="">-Select an option-</option>
                  <option value="forest">Forest</option>
                  <option value="beach">Beach</option>
                  <option value="mountain">Mountain</option>
                  <option value="park">Park</option>
                  <option value="garden">Garden</option>
                </select>
              </div>
            </div>

            {/* Season and Nature Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#381207] font-medium mb-2">
                  Season
                </label>
                <select
                  name="season"
                  value={formData.season}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#b3b1ac] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f] appearance-none"
                >
                  <option value="">-Select an option-</option>
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                  <option value="autumn">Autumn</option>
                  <option value="winter">Winter</option>
                </select>
              </div>
              <div>
                <label className="block text-[#381207] font-medium mb-2">
                  Nature Type
                </label>
                <select
                  name="natureType"
                  value={formData.natureType}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#b3b1ac] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f] appearance-none"
                >
                  <option value="">-Select an option-</option>
                  <option value="woodland">Woodland</option>
                  <option value="wetland">Wetland</option>
                  <option value="grassland">Grassland</option>
                  <option value="aquatic">Aquatic</option>
                </select>
              </div>
            </div>

            {/* Sound Stimuli and Animals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#381207] font-medium mb-2">
                  Sound Stimuli
                </label>
                <select
                  name="soundStimuli"
                  value={formData.soundStimuli}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#b3b1ac] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f] appearance-none"
                >
                  <option value="">-Select an option-</option>
                  <option value="birds">Birds</option>
                  <option value="water">Water</option>
                  <option value="wind">Wind</option>
                  <option value="forest">Forest Sounds</option>
                </select>
              </div>
              <div>
                <label className="block text-[#381207] font-medium mb-2">
                  Animals
                </label>
                <select
                  name="animals"
                  value={formData.animals}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#b3b1ac] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f] appearance-none"
                >
                  <option value="">-Select an option-</option>
                  <option value="birds">Birds</option>
                  <option value="mammals">Mammals</option>
                  <option value="insects">Insects</option>
                  <option value="fish">Fish</option>
                </select>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-[#381207] font-medium mb-2">
                Tags
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="w-full p-3 border border-[#b3b1ac] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
                placeholder="Add keywords to help users discover this video"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 bg-[#e5e3df] text-[#4b4741] rounded-lg hover:bg-gray-300 transition font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#a6a643] text-white rounded-lg hover:bg-[#8b8b3a] transition font-medium"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCreateVideo;
