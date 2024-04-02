import { logout } from './data/users.js';
import {page} from './lib.js';
import { updateNav } from './util.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showDashboard } from './views/dashboard.js';
import { showSell } from './views/sell.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';

updateNav();

page('/', showHome);
page('/login', showLogin);
page('/register', showRegister)
page('/dashboard', showDashboard);
page('/sell', showSell);
page('/dashboard/:id', showDetails);
page('/edit/:id', showEdit);

page.start();

let logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', onLogout);

function onLogout(){
    logout();
    updateNav();
    page.redirect('/');
}


