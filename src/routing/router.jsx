import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import ClientLayout from "../pages/client/ClientLayout";
import VolunteerLayout from "../pages/volunteer/VolunteerLayout";
import OurApproach from "../OurApproach";
import Login from "../pages/client/Login";
import PatientProfile from "../pages/client/PatientProfile";
import OrgLogin from "../pages/organization/Login";
import OrgSignup from "../pages/organization/Signup";
import RequestAQuoteForm from "../pages/organization/RequestAQuoteForm";
import ManageClients from "../pages/organization/ManageClients";
import OrganizationProfile from "../pages/organization/OrganizationProfile";
import VolunteerLogin from "../pages/volunteer/VolunteerLogin";
import VolunteerSignup from "../pages/volunteer/VolunteerSignup";
import VolunteerProfile from "../pages/volunteer/VolunteerProfile";
import VolunteerCreateVideo from "../pages/volunteer/VolunteerCreateVideo";
import SelectVideo from "../pages/client/SelectVideo";
import Subscribe from "../pages/client/Subscribe";
import PaymentPageForIndividual from "../pages/client/PaymentPageForIndividual";
import Video from "../pages/client/video";
import Aran from "../Aran";
import AllVideos from "../pages/organization/AllVideos";
import VolunteerHome from "../pages/volunteer/VolunteerHome";
import BecomeVolunteer from "../BecomeVolunteer";

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
      }
    ],
  },
  {
    path: "/client",
    element: <ClientLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <PatientProfile />,
      },
      {
        path: "select-video",
        element: <SelectVideo />,
      },
      {
        path: "video",
        element: <Video />,
      },
      {
        path: "subscribe",
        element: <Subscribe />,
      },
      {
        path: "payment",
        element: <PaymentPageForIndividual />,
      },
    ],
  },
  {
    path: "/organization",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ManageClients />,
      },
      {
        path: "login",
        element: <OrgLogin />,
      },
      {
        path: "signup",
        element: <OrgSignup />,
      },
      {
        path: "request-quote",
        element: <RequestAQuoteForm />,
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
  {
    path: "/volunteer",
    element: <VolunteerLayout />,
    children: [
      {
        index: true,
        element: <VolunteerHome />,
      },
      {
        path: "login",
        element: <VolunteerLogin />,
      },
      {
        path: "signup",
        element: <VolunteerSignup />,
      },
      {
        path: "profile",
        element: <VolunteerProfile />,
      },
      {
        path: "create-video",
        element: <VolunteerCreateVideo />,
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
