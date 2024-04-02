import {html, page, render} from "../lib.js";
import { deleteItem, getItemDetails } from "../data/marketItems.js";
import { getUserData } from "../util.js";

let detailsTemplate = (data, isOwner, onDelete) => html`<section id="details">
<div id="details-wrapper">
  <div>
    <img id="details-img" src=${data.imgUrl} alt="example1" />
    <p id="details-title">${data.name}</p>
  </div>
  <div id="info-wrapper">
    <div id="details-description">
      <p class="details-price">${data.price}</p>
      <p class="details-availability">
        ${data.availability}
      </p>
      <p class="type">${data.type}</p>
      <p id="item-description">
        ${data.description}
      </p>
    </div>
    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">)
    ${isOwner ? html`<a href="/edit/${data._id}" id="edit-btn">Edit</a>
    <a href="/" id="delete-btn" @click=${onDelete}>Delete</a>` : null}
    </div>
  </div>
</div>
</section>`;

export async function showDetails(ctx) {
    let id = ctx.params.id;
    let item = await getItemDetails(id);

    let user = getUserData();
    let hasUser = !!user;
    let isOwner = hasUser && user._id == item._ownerId

    render(detailsTemplate(item, isOwner, onDelete));

    async function onDelete() {
      let choice = confirm('Are you sure?');

      if (choice) {
        await deleteItem(id);
        page.redirect('/dashboard')
      }
    }
}

