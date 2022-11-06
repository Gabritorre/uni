let alg_lineare = ["Numeri complessi", "Vettori", "Sistemi lineari", "Matrici"];
let arch_elaboratori = ["Il computer", "Rappresentazione informazioni", "Algebra booleana", "Circuiti logici", "MIPS", "ALU"];
let calcolo1 = ["Insiemistica", "Insieme R", "Funzioni", "Funzioni elementari", "Limiti", "Funzioni continue", "Derivate"];
let int_program = ["Introduzione a C"];
let mat_base = ["Potenze e radici", "Grafici delle funzioni"];
let mat_discreta = ["Introduzione", "Calcolo combinatorio", "Logica", "Insiemi", "Relazioni", "Funzioni", "Principio di induzione"];

function prova(variable) {
	console.log(variable);
	let argument_list = document.getElementById("arguments");
	console.log(argument_list);
	let selected_subject;
	switch (variable) {
		case "alg_lineare":
			selected_subject = alg_lineare;
			break;
		case "arch_elaboratori":
			selected_subject = arch_elaboratori;
			break;
		case "calcolo1":
			selected_subject = calcolo1;
			break;
		case "int_program":
			selected_subject = int_program;
			break;
		case "mat_base":
			selected_subject = mat_base;
			break;
		case "mat_discreta":
			selected_subject = mat_discreta;
			break;
		default:
			break
	}
	
	for (let i = 0; i < selected_subject.length; i++){
		let el = document.createElement("li");
		argument_list.append(el);
		el.innerHTML = el.innerHTML + selected_subject[i];
	}
}