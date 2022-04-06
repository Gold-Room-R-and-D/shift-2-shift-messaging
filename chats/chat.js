import { getUser, sendMessage, checkAuth, getProfile, incrementRating, decrementRating, logout } from '../fetch-utils.js';

import { renderMessages, renderRating } from '../render-utils.js';

checkAuth();

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const return2ProfilesButton = document.getElementById('back-to-profiles');
const profileContainer = document.querySelector('.profile-container');
const usernameHeader = document.querySelector('.username-header');
const usernameEl = document.querySelector('.username');

const logoutButton = document.getElementById('logout');

window.addEventListener('load', async ()=>{

    await fetchAndDisplay(); //write this!

});

return2ProfilesButton.addEventListener('click', ()=>{
    window.location.href = '../employees';
});


export async function fetchAndDisplay(){
    profileContainer.textContent = '';

    const profile = await getProfile(id);
    usernameHeader.textContent = profile.email;
    usernameEl.textContent = profile.email;

    const profileRatingEl = renderRating(profile);
    const messagesEl = renderMessages(profile);

    profileContainer.append(messagesEl, profileRatingEl);

}

logoutButton.addEventListener('click', () => {
    logout();
});