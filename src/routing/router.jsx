import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import ClientLayout from "../pages/client/ClientLayout";
import VolunteerLayout from "../pages/volunteer/VolunteerLayout";
import OurApproach from "../pages/website/OurApproach";
import Login from "../pages/client/Login";
import PatientProfile from "../pages/client/PatientProfile";
import OrgLogin from "../pages/organization/Login";
import OrgSignup from "../pages/organization/Signup";
import RequestAQuoteForm from "../pages/website/RequestAQuoteForm";
import ManageClients from "../pages/organization/ManageClients";
import OrganizationProfile from "../pages/organization/OrganizationProfile";
import VolunteerLogin from "../pages/volunteer/VolunteerLogin";
import VolunteerSignup from "../pages/volunteer/VolunteerSignup";
import VolunteerProfile from "../pages/volunteer/VolunteerProfile";
import VolunteerCreateVideo from "../pages/volunteer/VolunteerCreateVideo";
import SelectVideo from "../pages/client/SelectVideo";
import Subscribe from "../pages/website/Subscribe";
import PaymentPageForIndividual from "../pages/website/PaymentPageForIndividual";
import Video from "../pages/client/video";
import Aran from "../pages/website/Aran";
import AllVideos from "../pages/organization/AllVideos";
import VolunteerHome from "../pages/volunteer/VolunteerHome";
import BecomeVolunteer from "../pages/website/BecomeVolunteer";
import OrganizationLayout from "../pages/organization/OrganizationLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import HowItWorks from "../pages/volunteer/HOwItWork";
import VideoTraining from "../pages/website/VideoTraning";
import CameraTips from "../pages/website/CameraTips";
import NatureWalking from "../pages/website/NatureWalking";
import VolunteerSignupForm from "../pages/website/VolunteerSignup";
import ChooseYourExperience from "../pages/website/ChoseYourExperience";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Aran />, // Landing page
      },
      {
        path: "ourapproach",
        element: <OurApproach />, // Our Approach page
      },
      {
        path: "become-volunteer",
        element: <BecomeVolunteer />,
      },
      {
        path: "subscribe",
        element: <Subscribe />,
      },
      {
        path: "payment",
        element: <PaymentPageForIndividual />,
      },
      {
        path: "video-training",
        element: <VideoTraining />,
      },
      {
        path: "camera-tips",
        element: <CameraTips />,
      },
      {
        path: "nature-walking",
        element: <NatureWalking />,
      },
      {
        path: "volunteer-signup",
        element: <VolunteerSignupForm />,
      },
      {
        path: "request-quote",
        element: <RequestAQuoteForm />,
      },
      {
        path: "/request-quote",
        element: <RequestAQuoteForm />,
      },
      {
        path: "/choose-experience",
        element: <ChooseYourExperience />,
      },
    ],
  },
  // Authentication routes without layouts (no headers)
  {
    path: "/client/login",
    element: <Login />,
  },
  {
    path: "/organization/login",
    element: <OrgLogin />,
  },
  {
    path: "/organization/signup",
    element: <OrgSignup />,
  },
  {
    path: "/volunteer/login",
    element: <VolunteerLogin />,
  },
  {
    path: "/volunteer/signup",
    element: <VolunteerSignup />,
  },
  // Protected client routes with layout
  {
    path: "/client",
    element: (
      <ProtectedRoute allowedRoles={["client"]}>
        <ClientLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "profile",
        element: <PatientProfile />,
      },
      {
        index: true,
        element: <SelectVideo />,
      },
      {
        path: "video",
        element: <Video />,
      },
    ],
  },
  // Organization routes (some with layout, some without)
  {
    path: "/organization",
    element: (
      <ProtectedRoute allowedRoles={["organization"]}>
        <OrganizationLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <ManageClients />,
      },
      {
        path: "profile",
        element: <OrganizationProfile />,
      },
      {
        path: "all-videos",
        element: <AllVideos />,
      },
    ],
  },
  // Protected volunteer routes with layout
  {
    path: "/volunteer",
    element: (
      <ProtectedRoute allowedRoles={["volunteer"]}>
        <VolunteerLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <VolunteerHome />,
      },
      {
        path: "profile",
        element: <VolunteerProfile />,
      },
      {
        path: "create-video",
        element: <VolunteerCreateVideo />,
      },
      {
        path: "/volunteer/how-it-works",
        element: <HowItWorks />,
      },
    ],
  },
  // Admin routes can be added here when needed
  // {
  //   path: 'admin',
  //   children: [
  //     // Admin routes
  //   ],
  // },
]);
