var hamburguer = document.querySelector("div.hamburguer");

hamburguer.addEventListener("click", ()=>{
	document.querySelector(".container").classList.toggle("show-menu");
});
document.querySelector("#qtde").addEventListener("change", atualizarPreco);
document.querySelector("#js").addEventListener("change", atualizarPreco);
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco);
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco);
document.querySelector("#prazo").addEventListener("change", ()=>{
	const prazo = document.querySelector("#prazo").value;
	document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`;
	atualizarPreco();
});

function atualizarPreco(){
	const qtde = document.querySelector("#qtde").value;
	const temJs = document.querySelector("#js").checked;
	const layout = document.querySelector("#layout-sim").checked;
	const prazo = document.querySelector("#prazo").value;
	var preco = qtde * 100;

	if(temJs) preco *= 1.10;
	if(layout) preco += 500;

	let taxaUrgencia = 1-prazo*0.1;
	preco *= 1 + taxaUrgencia;

	document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`;
}
