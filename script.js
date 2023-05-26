function Contar(){
    var ini = window.document.getElementById('txtini')
    var fi = window.document.getElementById('txtfim')
    var pas = window.document.getElementById('txtpas')
    var res = window.document.getElementById('res')
console.log(ini)
if (
  (ini.value === "") || (fi.value == "" ) || (pas.value == "" )
) {
  window.alert("Existem valores vazios ou numeros negativos");
} 
else if (ini.value > fi.value) {
  window.alert("O valor inicial não pode ser maior que o valor final");
} 
else {
  const emoji = "\u{1F449}";
  const emojib = "\u{1F3C1}";
  res.innerHTML = "Contando...\n";
  for (
    var cont = Number(ini.value);
    cont <= Number(fi.value);
    cont += Number(pas.value)
  ) {
    res.innerHTML += `${emoji} ${cont}`;
  }
  res.innerHTML += `${emojib}`;
}
}
