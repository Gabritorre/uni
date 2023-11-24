let courses = {
	algo_strut_dati1 : ["Fibonacci", "Classi asintotiche", "Calcolo della complessità", "Ricorrenze"],
 	algo_strut_dati2 : ["Le strutture dati", "Dizionari", "Esercizi calcolo delle complessità", "Alberi", "Esercizi alberi", "Alberi binari di ricerca"],
 	basi_dati1 : ["Introduzione", "Progettazione e modellazione", "Progettazione logica", "Algebra relazionale", "Calcolo relazionale", "Linguaggio SQL"],
	prob_stat : ["Introduzione", "Probabilità elementare", "Esercizi Probabilità elementare", "Esercizi Probabilità elementare 2", "Probabilità condizionata e indipendenza", "Esercizi Probabilità condizionata", "Variabili casuali",  "Esercizi variabili casuali", "Esercizi costanti caratteristiche", "Variabili aleatorie discrete", "Variabili aleatorie continue"],
	prog_ogg1 : ["Introduzione", "Classi", "Incapsulamento", "Javadoc", "Ereditarietà", "Subtyping", "Interfacce", "Dispatch dei metodi", "Tipi generici"],
	sis_operativi1 : ["Introduzione", "Esercizi introduzione", "Processi e thread", "Scheduling","Esercizi Processi thread e scheduling", "Gestione della memoria", "Memoria virtuale", "Segmentazione", "File system"]
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
		if (selected_subject[i].includes("Esercizi")){
			arg_link.classList.add("special");
		}
		arg_link.href = subj + "/web_notes/" + selected_subject[i] + ".html";
		arg_link.target = "_blank";
		
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