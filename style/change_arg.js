let alg_lineare = ["Numeri complessi", "Vettori", "Rette e piani", "Sistemi lineari", "Matrici", "Grafi", "Spazi vettoriali", "Trasformazioni lineari", "Autovalori e autovettori"];
let arch_elaboratori = ["Il computer", "Rappresentazione informazioni", "Algebra booleana", "Circuiti logici", "MIPS", "ALU", "Moltiplicazione e divisione tra interi", "Circuiti sequenziali", "CPU Mips-like singolo ciclo", "CPU Mips-like multi ciclo", "Valutazione prestazioni"];
let calcolo1 = ["Insiemistica", "Insieme R", "Funzioni", "Funzioni elementari", "Limiti", "Funzioni continue", "Derivate", "Infiniti e infinitesimi", "Serie", "Integrali"];
let int_program = ["Progetto Snake Labyrinth"];
let mat_base = ["Potenze radici", "Grafici delle funzioni"];
let mat_discreta = ["Introduzione", "Logica", "Insiemi", "Relazioni", "Funzioni", "Principio di induzione", "Ricorsione e sommatorie", "Aritmetica modulare", "Numeri primi", "Calcolo combinatorio"];

let arch_elaboratori2 = ["Nozioni introduttive", "CPU pipeline", "Memoria cache", "Memoria virtuale", "ARM ISA"];
let calcolo2 = ["Equazioni differenziali", "Curve parametriche", "Funzioni a più variabili"];
let prog_lab = ["Note varie", "Compilatore", "Automatizzazioni", "Debug", "Classi", "Streams", "Templates"];

function show_arguments(subj) {
	clear_output();
	// console.log(subj);
	let argument_list = document.getElementById("arguments");
	// console.log(argument_list);
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
		case "arch_elaboratori2":
			selected_subject = arch_elaboratori2;
			break;
		case "calcolo2":
			selected_subject = calcolo2;
			break;
		case "prog_lab":
			selected_subject = prog_lab;
			break;

		default:
			break
	}

	for (let i = 0; i < selected_subject.length; i++){
		let arg_link = document.createElement("a");
		var link_text = document.createTextNode(selected_subject[i]);
		let elem = document.createElement("li");
		arg_link.appendChild(link_text);
		if(selected_subject[i] == "Progetto Snake Labyrinth") {
			arg_link.href = "https://github.com/Gabritorre/labyrinth";
			arg_link.target = "_blank";
		}
		else{
			arg_link.href = subj + "/web_notes/" + selected_subject[i] + ".html";
			arg_link.target = "_blank";
		}
		
		elem.appendChild(arg_link);
		argument_list.append(elem);
	}
}

function clear_output(){
	try{	//rimuove gli output presenti
		let delete_list = document.getElementById("arguments");
		while (delete_list.firstChild) {
			delete_list.removeChild(delete_list.lastChild);
		}
	}catch(e){}
}