let alg_lineare = ["Numeri complessi", "Vettori", "Sistemi lineari", "Matrici", "Grafi", "Spazi vettoriali"];
let arch_elaboratori = ["Il computer", "Rappresentazione informazioni", "Algebra booleana", "Circuiti logici", "MIPS", "ALU", "Moltiplicazione e divisione tra interi", "Circuiti sequenziali"];
let calcolo1 = ["Insiemistica", "Insieme R", "Funzioni", "Funzioni elementari", "Limiti", "Funzioni continue", "Derivate", "Infiniti e infinitesimi", "Serie"];
let int_program = ["Introduzione a C"];
let mat_base = ["Potenze e radici", "Grafici delle funzioni"];
let mat_discreta = ["Introduzione", "Calcolo combinatorio", "Logica", "Insiemi", "Relazioni", "Funzioni", "Principio di induzione", "Aritmetica modulare"];

function show_arguments(subj) {
	console.log(subj);
	let argument_list = document.getElementById("arguments");
	console.log(argument_list);
	let selected_subject;
	switch (subj) {
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
		let arg_link = document.createElement("a");
		var link_text = document.createTextNode(selected_subject[i]);
		let elem = document.createElement("li");
		arg_link.appendChild(link_text);
		arg_link.href = subj + "/web_notes/" + selected_subject[i] + ".html";
		arg_link.target = "_blank";

		
		elem.appendChild(arg_link);
		argument_list.append(elem);
	}
}