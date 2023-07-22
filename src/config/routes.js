import Feed from "../pages/Feed/Feed";
import SearchResult from "../pages/SearchResult/SearchResult";
import VideoDetails from "../pages/VideoDetails/VideoDetails";
import my_pages from "../constants/pages";
import Signuppage from "../pages/Signup/Signuppage";
import Signinpage from "../pages/Signin/Signinpage";
import AuthGuard from "../Guard/AuthGuard";
import Error from "../components/Error/Error";
const routes = [
  {
    path: my_pages.HOME_PAGE,
    Component: Feed,
  },
  {
    path: my_pages.SEARCH_RESULT,
    Component: SearchResult,
    Guard: AuthGuard,
  },
  {
    path: my_pages.VIDEO_ID,
    Component: VideoDetails,
    Guard: AuthGuard,
  },
  {
    path: my_pages.SIGN_IN,
    Component: Signinpage,
  },
  {
    path: my_pages.REGISTER,
    Component: Signuppage,
  },
  {
    path: my_pages.ERROR,
    Component: Error,
  },
];

export default routes;
