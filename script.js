const product = {
  name: "Premium Cotton Tee",
  currency: "€",
  variants: [
    { id: "s",  label: "Small",  price: 18.99, inStock: true  },
    { id: "m",  label: "Medium", price: 18.99, inStock: true  },
    { id: "l",  label: "Large",  price: 18.99, inStock: false },
    { id: "xl", label: "XL",     price: 19.99, inStock: true  }
  ]
};

const $sel   = document.getElementById("variant");
const $price = document.getElementById("p-price");
const $stat  = document.getElementById("p-status");
const $btn   = document.getElementById("addBtn");

// FOR the  dropdown
product.variants.forEach(v => {
  const opt = document.createElement("option");
  opt.value = v.id; opt.textContent = v.label;
  $sel.appendChild(opt);
});

const fmt = n => `${product.currency}${n.toFixed(2)}`;

function render(){
  const v = product.variants.find(x => x.id === $sel.value);
  $price.textContent = fmt(v.price);

  if (v.inStock){
    $stat.textContent = "In stock";
    $stat.classList.remove("status--out");
    $btn.disabled = false;
    $btn.setAttribute("aria-disabled","false");
    $btn.textContent = "Add to cart";
  } else {
    $stat.textContent = "Out of stock";
    $stat.classList.add("status--out");
    $btn.disabled = true;
    $btn.setAttribute("aria-disabled","true");
    $btn.textContent = "Out of stock";
  }
}

$sel.addEventListener("change", render);
$btn.addEventListener("click", () => {
  const label = product.variants.find(x => x.id === $sel.value).label;
  alert(`${product.name} - ${label} added to cart`);
});

$sel.value = product.variants[0].id;
render();

