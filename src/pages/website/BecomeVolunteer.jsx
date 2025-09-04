import React, { useState } from "react";
import {
  Check,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import FaqQuestions from "../../components/common/FaqQuestions";
import Testimonial from "../../components/common/TestimonialScroll";

const BecomeVolunteer = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    notes: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#ede4dc]">
      {/* Hero Section */}
      <section className="bg-[#2a341f] text-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#a6a643] mb-6 font-['Poppins']">
              Become a Volunteer with Virtual Walking
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
              For many - from seniors in care to those with limited mobility -
              nature can feel far away. Virtual Walking brings Overijssel's
              beauty indoors with calming walking videos that inspire relaxation
              and connection. And we can't do it without you.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#2a341f] text-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-[#a6a643] text-2xl font-semibold mb-2">
                  Positive Benefits
                </p>
                <h2 className="text-4xl md:text-5xl font-semibold mb-8">
                  Why Virtual Walking?
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  "Brings nature safely indoors - gives people the chance to enjoy nature without risks, especially for those unable to walk outside.",
                  "Stimulates memories - familiar sounds and views can trigger recognition and joyful moments.",
                  "Encourages social connection - creates shared experiences with family, caregivers, or fellow residents — and can also be enjoyed alone.",
                  "Reduces anxiety and stress - soothing natural sights and sounds help ease restlessness and bring calm.",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 py-3 border-b border-[#e5e3df]/20"
                  >
                    <Check
                      className="text-[#a6a643] mt-1 flex-shrink-0"
                      size={24}
                    />
                    <p className="text-lg leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  className="bg-[#a6a643] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#959837] transition-colors"
                  onClick={() => (window.location.href = "/volunteer/signup")}
                >
                  Join as Volunteer
                </button>
                <button
                  className="bg-[#a6a643] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#959837] transition-colors"
                  onClick={() => (window.location.href = "/volunteer/login")}
                >
                  Already a Volunteer
                </button>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-gray-300 rounded-2xl h-96 lg:h-[500px] bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center">
                <span className="text-gray-600 text-lg">
                  Nature Walk Video Preview
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#ede4dc] px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[#a6a643] text-2xl font-semibold mb-2">
                How it works
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#381207]">
                Joining is easy — just follow these steps
              </h2>
            </div>
            <button className="bg-[#a6a643] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#959837] transition-colors hidden lg:block">
              Know More
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Sign up as a volunteer",
                description:
                  "Show your interest through our simple form or reach out directly. We'll be happy to connect and welcome you.",
              },
              {
                number: "2",
                title: "Introduction and short training",
                description:
                  "We'll schedule a short session to explain how to film walks and guide you in using the equipment with confidence.",
              },
              {
                number: "3",
                title: "Explore with your camera",
                description:
                  "Head outdoors to capture beautiful nature walks on your own. No professional skills are needed, just your enthusiasm.",
              },
              {
                number: "4",
                title: "Share on the platform",
                description:
                  "Upload your videos easily through our platform. We'll edit them and make sure they reach people who will enjoy them.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="bg-[#f7f6f4] rounded-2xl p-8 space-y-6"
              >
                <div className="w-16 h-16 bg-[#ede4dc] rounded-full flex items-center justify-center">
                  <span className="text-[#381207] text-3xl font-semibold">
                    {step.number}
                  </span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[#381207] text-2xl font-medium">
                    {step.title}
                  </h3>
                  <p className="text-[#381207] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-[#ede4dc] px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {[
              {
                date: "19",
                month: "Sep",
                title: "Video Training",
                description:
                  "Learn how to get started as a volunteer. We'll introduce you to Virtual Walking, explain the basics, and guide you through the first steps.",
                link: "/video-training",
              },
              {
                date: "24",
                month: "Sep",
                title: "Camera Tips & Introduction",
                description:
                  "Join a short hands-on session where you'll discover how to film calming nature walks and use the provided equipment with ease.",
                link: "/camera-tips",
              },
              {
                date: "03",
                month: "Oct",
                title: "Nature Walk Filming Practice",
                description:
                  "Head outdoors with your camera and practice capturing beautiful nature walks. Enthusiasm counts more than experience!",
                link: "/nature-walking",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="bg-[#381207] text-[#ede4dc] rounded-lg p-4 text-center min-w-[110px]">
                  <div className="text-4xl font-bold">{event.date}</div>
                  <div className="text-xl font-medium">{event.month}</div>
                </div>

                <div className="bg-gray-300 w-full md:w-60 h-48 md:h-40 rounded-lg bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600">Event Image</span>
                </div>

                <div className="flex-1 space-y-4">
                  <h3 className="text-[#dd9219] text-2xl font-semibold">
                    {event.title}
                  </h3>
                  <p className="text-[#381207] text-lg leading-relaxed">
                    {event.description}
                  </p>
                  <Link to={event.link}>
                    <button className="bg-[#a6a643] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#959837] transition-colors">
                      More Information
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonial />

      <FaqQuestions />
      {/* Why Volunteers Section */}
      <section className="bg-[#1f1915] text-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl h-96 lg:h-[500px] flex items-center justify-center">
              <span className="text-white text-lg">Volunteer in Action</span>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-[#a6a643] text-2xl font-semibold mb-2">
                  Want to help?
                </p>
                <h2 className="text-4xl md:text-5xl font-semibold text-[#ede4dc]">
                  Why Volunteers Are Essential
                </h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: "Nature & Filming Passion",
                    description:
                      "Love being in nature and enjoy filming? Combine both to create relaxing virtual walk videos.",
                  },
                  {
                    title: "Guidance & Tips",
                    description:
                      "Get a short hands-on session with practical tips & tricks for making calming nature videos.",
                  },
                  {
                    title: "Tools Provided",
                    description:
                      "Enjoy free use of our camera to capture your walk in high quality.",
                  },
                  {
                    title: "Constructive Feedback",
                    description:
                      "Receive helpful feedback to make your videos even more engaging and soothing.",
                  },
                  {
                    title: "Share Your Work",
                    description:
                      "Your video will be shared on our platform with a large, appreciative audience.",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="w-full h-px bg-[#d9bbaa] mb-6"></div>
                    <div className="flex items-start gap-3">
                      <Check
                        className="text-[#a6a643] mt-1 flex-shrink-0"
                        size={24}
                      />
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[#b3b1ac] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="w-full h-px bg-[#d9bbaa]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#ede4dc] px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-[#381207] text-2xl font-medium mb-8">
                  Stay Inspired
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="block text-[#381207] font-medium mb-2">
                      Email address
                    </div>
                    <div className="w-full p-3 rounded-lg border border-[#cbcbcb] bg-white cursor-text">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email address"
                        className="w-full outline-none text-[#8d8d8d]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="block text-[#381207] font-medium mb-2">
                        First name
                      </div>
                      <div className="w-full p-3 rounded-lg border border-[#cbcbcb] bg-white cursor-text">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="First name"
                          className="w-full outline-none text-[#8d8d8d]"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="block text-[#381207] font-medium mb-2">
                        Last name
                      </div>
                      <div className="w-full p-3 rounded-lg border border-[#cbcbcb] bg-white cursor-text">
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Last name"
                          className="w-full outline-none text-[#8d8d8d]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="block text-[#381207] font-medium mb-2">
                      Notes
                    </div>
                    <div className="w-full p-3 rounded-lg border border-[#cbcbcb] bg-white cursor-text">
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="E.g. Add special billing instructions"
                        rows="4"
                        className="w-full outline-none text-[#8d8d8d] resize-none"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="bg-[#5b6502] text-white py-3 px-8 rounded-lg font-medium hover:bg-[#4a5302] transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="bg-[#39442c]/20 rounded-xl h-64 lg:h-full flex items-center justify-center">
                <span className="text-[#39442c] text-lg">Newsletter Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeVolunteer;
