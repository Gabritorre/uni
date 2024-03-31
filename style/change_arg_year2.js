let courses = {
	algo_strut_dati1 : ["Fibonacci", "Classi asintotiche", "Calcolo della complessità", "Ricorrenze", "Esercizi ricorrenze", "Grafi", "Grado nei grafi", "Isomorfismo", "Condizioni di connettività e ciclicità", "Minimum Spanning Tree"],
 	algo_strut_dati2 : ["Le strutture dati", "Dizionari", "Esercizi calcolo delle complessità", "Alberi", "Esercizi alberi", "Alberi binari di ricerca", "Esercizi alberi binari di ricerca", "Alberi di ricerca particolari", "Ordinamento", "Quick sort", "Heap sort", "Code di priorità", "Esercizi ordinamento", "Ordinamenti lineari", "Tabelle hash", "Indirizzamento aperto", "Programmazione dinamica", "Longest Common Subsequence"],
 	basi_dati1 : ["Introduzione", "Progettazione e modellazione", "Progettazione logica", "Algebra relazionale", "Calcolo relazionale", "Linguaggio SQL DML", "Linguaggio SQL DDL"],
	prob_stat : ["Introduzione", "Probabilità elementare", "Esercizi Probabilità elementare", "Esercizi Probabilità elementare 2", "Probabilità condizionata e indipendenza", "Esercizi Probabilità condizionata", "Variabili casuali",  "Esercizi variabili casuali", "Esercizi costanti caratteristiche", "Variabili aleatorie discrete", "Esercizi quantili", "Variabili aleatorie continue", "Esercizi Discrete e continue", "Esercizi Discrete e continue 2", "Variabili congiunte", "Esercizi Variabili congiunte", "Catene di Markov", "Esercizi somme e catene di Markov"],
	prog_ogg1 : ["Introduzione", "Classi", "Incapsulamento", "Javadoc", "Ereditarietà", "Subtyping", "Interfacce", "Dispatch dei metodi", "Tipi generici", "Object e tipi nativi", "Eccezioni", "Annotazioni", "Reflection", "Library management"],
	sis_operativi1 : ["Introduzione", "Esercizi introduzione", "Processi e thread", "Scheduling","Esercizi Processi thread e scheduling", "Gestione della memoria", "Memoria virtuale", "Segmentazione", "File system", "Memoria secondaria", "Caso di studio Linux", "Caso di studio Windows"],
	basi_dati2 : ["Anomalie e Dipendenze funzionali", "Chiavi e coperture canoniche", "Esercizi dipendenze", "Decomposizione", "Forme normali", "Esercizi normalizzazione", "Vincoli di integrità", "Trigger", "Funzioni e procedure", "Sicurezza", "Indici e viste materializzate", "Transazioni"],
	int_uomo_macchina : ["L'uomo", "La memoria", "Il pensiero", "Il computer", "Stili di interazione", "Gestures"],
	prog_ogg2 : ["Note generali", "Classi innestate", "programmazione pseudo funzionale"],
	sis_operativi2 : ["Comunicazione tra processi e thread", "Creazione di processi", "Esecuzione e terminazione", "Segnali", "Pipe", "Thread", "Sezione critica", "Thread in POSIX", "Semafori"]
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