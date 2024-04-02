import { getAllItems } from "../data/marketItems.js";
import {html, render} from "../lib.js";


let dashboardTemplate = (items) => html`
<h3 class="heading">Market</h3>
<section id="dashboard">
  ${items.length ? items.map(itemTemplate) : html`<h3 class="empty">No Items Yet</h3>`};
</section>`;

let itemTemplate = (item) => html`
<div class="item">
    <img src=${item.imageUrl} alt="example1" />
    <h3 class="model">${item.item}</h3>
    <div class="item-info">
      <p class="price">${item.price}</p>
      <p class="availability">${item.availability}</p>
      <p class="type">${item.type}</p>
    </div>
    <a class="details-btn" href="/dashboard/${item._id}">Uncover More</a>
  </div>
`;

export async function showDashboard() {
    let items = await getAllItems();
    render(dashboardTemplate(items))
}
