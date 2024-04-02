import { getItemDetails, updateItem } from "../data/marketItems.js";
import {html, page, render} from "../lib.js";
import { createSubmitHandler } from "../util.js";

let ediTemplate = (item, onSubmit) => html`
<section id="edit">
          <div class="form form-item">
            <h2>Edit Your Item</h2>
            <form class="edit-form" @submit=${onSubmit}>
              <input
              type="text" name="item" id="item" placeholder="Item"
              .value=${item.item}
              />
              <input
                type="text"
                name="imageUrl"
                id="item-image"
                placeholder="Your item Image URL"
                .value=${item.imageUrl}
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
                .value=${item.price}
              />
              <input
                type="text"
                name="availability"
                id="availability"
                placeholder="Availability Information"
                .value=${item.availability}
              />
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Item Type"
                .value=${item.type}
              />
              <textarea
                id="description"
                name="description"
                placeholder="More About The Item"
                .value=${item.description}
                rows="10"
                cols="50"
              ></textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>`;

export async function showEdit(ctx) {
    let id = ctx.params.id;
    let item = await getItemDetails(id);

    render(ediTemplate(item, createSubmitHandler(onSubmit)));

    async function onSubmit({item, imageUrl, price, availability, type, description}, form) {
        if (!item || !imageUrl || !price || !availability || !type || !description) {
            return alert('All fields are required!');
        }
    
    
        await updateItem(id, {item, imageUrl, price, availability, type, description});
        page.redirect('/dashboard/' + id)
       
    }
}
