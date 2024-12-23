import { baseRender,html} from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const headerElement=document.querySelector('#wrapper > header')
const template=(isAuthenticated)=>html`
<!-- Navigation -->
<a id="logo" href="/"
          ><img id="logo-img" src="./images/logo2.png" alt="logo"/>
        </a>
        <nav>
          <div>
            <a href="/dashboard">Solutions</a>
          </div>

          <!-- Logged-in users -->
           ${isAuthenticated
            ? html `
            <div class="user">
            <a href="/create">Add Solution</a>
            <a href="/logout">Logout</a>
          </div>
          `
          : html`
          <!-- Guest users -->
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
          `
           }
          
        </nav>
`


export default async function navigationView(ctx) {
    const userData=getUserData()
    const isAuthenticated=!!userData.accessToken
    baseRender(template(isAuthenticated),headerElement )
}