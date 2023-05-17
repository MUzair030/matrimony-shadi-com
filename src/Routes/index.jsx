/* eslint-disable no-unused-vars */
import HomePage from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ProfileCreation from "../Pages/ProfileCreation/ProfileCreation"
import Matches from "../Pages/Matches/Matches";
import NewMatches from "../Pages/Matches/NewMatches/NewMatches";
import MatchesView from "../Pages/Matches/MatchesView/MatchesView";
import MyMatches from "../Pages/Matches/MyMatches/MyMatches";
import NearMe from "../Pages/Matches/NearMe/NearMe";
import RecentlyViewed from "../Pages/Matches/RecentlyViewed/RecentlyViewed";
import MoreMatches from "../Pages/Matches/MoreMatches/MoreMatches";
import Dashboard from "../Pages/MyShadi/Dashboard/Dashboard";
import Dashboard2 from "../Pages/MyShadi/Dashboard2";
import PartnerPreferenceFormPage from "../Pages/ProfileCreation/PartnerPreferenceFormPage"
import CustomerCare from "../Components/Customer-Care/CustomerCare";
import CustomerCareDetail from "../Components/Customer-Care/CustomerCareDetail";
import Settings from "../Components/Settings/Settings";
import Preferences from "../Components/Preferences/Preferences"
import PrivacyPolicy from "../Pages/FooterPages/PrivacyPolicy";
import TermsAndConditions from "../Pages/FooterPages/TermsAndConditions";
import InboxPage from "../Pages/InboxPage/InboxPage";

export const routes = [
  { path: "/", Component: HomePage },
  { path: "/about", Component: About },
  { path: "/profile-creation", Component: ProfileCreation },
  { path: "/partner-preference", Component: PartnerPreferenceFormPage },
  // { path: "/matches", Component: Matches },
  { path: "/new-matches", Component: NewMatches },
  { path: "/today-matches", Component: MatchesView },
  { path: "/my-matches", Component: MyMatches },
  { path: "/near-me", Component: NearMe },
  { path: "/viewed", Component: RecentlyViewed },
  { path: "/more-matches", Component: MoreMatches },
  { path: "/dashboard", Component: Dashboard },
  { path: "/dashboard2", Component: Dashboard2 },
  { path: '/preferences', Component: Preferences },
  { path: '/customer-care', Component: CustomerCare },
  { path: '/customer-care-detail', Component: CustomerCareDetail },
  { path: '/inbox', Component: InboxPage },
  { path: '/settings', Component: Settings },
  { path: '/privacy-policy', Component: PrivacyPolicy },
  { path: '/terms-conditions', Component: TermsAndConditions },
];



