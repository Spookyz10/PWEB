let aura = Number(prompt("Digite sua aura"));

let div = document.querySelector(".center");

if (aura >= 7) {
  div.innerHTML = `
    <p>Farmouuu</p>
`;
} else if (aura >= 5) {
  div.innerHTML = `
    <p>No aura</p>
`;
} else {
  div.innerHTML = `
    <p>aura -- bro</p>
`;
}
