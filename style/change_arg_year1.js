let courses = {
	alg_lineare : ["Numeri complessi", "Vettori", "Rette e piani", "Sistemi lineari", "Matrici", "Grafi", "Spazi vettoriali", "Trasformazioni lineari", "Autovalori e autovettori"],
	arch_elaboratori : ["Il computer", "Rappresentazione informazioni", "Algebra booleana", "Circuiti logici", "MIPS", "ALU", "Moltiplicazione e divisione tra interi", "Circuiti sequenziali", "CPU Mips-like singolo ciclo", "CPU Mips-like multi ciclo", "Valutazione prestazioni"],
	calcolo1 : ["Insiemistica", "Insieme R", "Funzioni", "Funzioni elementari", "Limiti", "Funzioni continue", "Derivate", "Infiniti e infinitesimi", "Serie", "Integrali"],
	int_program : ["Progetto Snake Labyrinth"],
	mat_base : ["Potenze radici", "Grafici delle funzioni"],
	mat_discreta : ["Introduzione", "Logica", "Insiemi", "Relazioni", "Funzioni", "Principio di induzione", "Ricorsione e sommatorie", "Aritmetica modulare", "Numeri primi", "Calcolo combinatorio"],
	arch_elaboratori2 : ["Nozioni introduttive", "CPU pipeline", "Memoria cache", "Memoria virtuale", "ARM ISA", "Assembly", "Input e output"],
	calcolo2 : ["Equazioni differenziali", "Curve parametriche", "Funzioni a più variabili", "Integrali doppi"],
	prog_lab : ["Note varie", "Compilatore", "Automatizzazioni", "Debug", "Classi", "Streams", "Templates", "Move semantics", "Iteratori", "Progetto JSON parser"]
};

function show_arguments(subj) {
	clear_output();
	let argument_list = document.getElementById("arguments");
	let selected_subject = courses[subj];

	for (let i = 0; i < selected_subject.length; i++){
		let arg_link = document.createElement("a");
		var link_text = document.createTextNode(selected_subject[i]);
		let elem = document.createElement("li");
		arg_link.appendChild(link_text);
		if (selected_subject[i] == "Progetto Snake Labyrinth") {
			arg_link.href = "https://github.com/Gabritorre/labyrinth";
			arg_link.target = "_blank";
			arg_link.classList.add("special");
		}
		else if (selected_subject[i] == "Progetto JSON parser") {
			arg_link.href = "https://github.com/Gabritorre/json_parser";
			arg_link.target = "_blank";
			arg_link.classList.add("special");
		}
		else {
			arg_link.href = subj + "/web_notes/" + selected_subject[i] + ".html";
			arg_link.target = "_blank";
		}
		
		elem.appendChild(arg_link);
		argument_list.append(elem);
	}
}

function clear_output(){
	try {	//rimuove gli output presenti
		let delete_list = document.getElementById("arguments");
		while (delete_list.firstChild) {
			delete_list.removeChild(delete_list.lastChild);
		}
	} catch(e){}
}