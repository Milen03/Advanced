
import page from "./lib/page.js";
import { navigationMiddleware } from "./middlewares/navigationMiddleware.js";
import createView from "./view/createView.js";
import dashboardView from "./view/dashboardView.js";
import deleteView from "./view/deleteView.js";
import detailsView from "./view/detailsView.js";
import editView from "./view/editView.js";
import homeView from "./view/homeView.js";
import loginView from "./view/loginView.js";
import logoutView from "./view/logoutView.js";
import registerView from "./view/registerView.js";

page(navigationMiddleware)
page('/login',loginView)
page('/register',registerView)
page('/logout',logoutView)
page('/create',createView)
page('/dashboard',dashboardView)
page('/dashboard/:itemId/details',detailsView)
page('/',homeView)
page('/dashboard/:itemId/delete',deleteView)
page('/dashboard/:itemId/edit',editView)
page()