let courses = {
	algo_strut_dati1 : ["Note complete", "Fibonacci", "Classi asintotiche", "Calcolo della complessità", "Ricorrenze", "Esercizi ricorrenze", "<Algoritmi e strutture dati mod.2>", "Grafi", "Grado nei grafi", "Isomorfismo", "Condizioni di connettività e ciclicità", "Minimum Spanning Tree", "Trovare un MST di un grafo", "Cammini minimi", "Dijkstra", "Bellman-ford", "Floyd-Warshall", "Esercizi cammini minimi", "Algoritmi greedy", "NP completezza"],
 	algo_strut_dati2 : ["Note complete", "Le strutture dati", "Dizionari", "Esercizi calcolo delle complessità", "Alberi", "Esercizi alberi", "Alberi binari di ricerca", "Esercizi alberi binari di ricerca", "Alberi di ricerca particolari", "Ordinamento", "Quick sort", "Heap sort", "Code di priorità", "Esercizi ordinamento", "Ordinamenti lineari", "Tabelle hash", "Indirizzamento aperto", "Programmazione dinamica", "Longest Common Subsequence"],
 	basi_dati1 : ["Note complete", "Introduzione", "Progettazione e modellazione", "Progettazione logica", "Algebra relazionale", "Calcolo relazionale", "Linguaggio SQL DML", "Linguaggio SQL DDL"],
	prob_stat : ["Note complete", "Introduzione", "Probabilità elementare", "Esercizi Probabilità elementare", "Esercizi Probabilità elementare 2", "Probabilità condizionata e indipendenza", "Esercizi Probabilità condizionata", "Variabili casuali",  "Esercizi variabili casuali", "Esercizi costanti caratteristiche", "Variabili aleatorie discrete", "Esercizi quantili", "Variabili aleatorie continue", "Esercizi Discrete e continue", "Esercizi Discrete e continue 2", "Variabili congiunte", "Esercizi Variabili congiunte", "Catene di Markov", "Esercizi somme e catene di Markov"],
	prog_ogg1 : ["Note complete", "Introduzione", "Classi", "Incapsulamento", "Javadoc", "Ereditarietà", "Subtyping", "Interfacce", "Dispatch dei metodi", "Tipi generici", "Object e tipi nativi", "Eccezioni", "Annotazioni", "Reflection", "Library management"],
	sis_operativi1 : ["Note complete", "Introduzione", "Esercizi introduzione", "Processi e thread", "Scheduling","Esercizi Processi thread e scheduling", "Gestione della memoria", "Memoria virtuale", "Segmentazione", "File system", "Memoria secondaria", "Caso di studio Linux", "Caso di studio Windows"],
	basi_dati2 : ["Note complete", "Anomalie e Dipendenze funzionali", "Chiavi e coperture canoniche", "Esercizi dipendenze", "Decomposizione", "Forme normali", "Esercizi normalizzazione", "Vincoli di integrità", "Trigger", "Funzioni e procedure", "Sicurezza", "Indici e viste materializzate", "Transazioni", "Applicazioni di SQL", "Applicazioni web", "NoSQL", "Progetto Bonfire"],
	int_uomo_macchina : ["Note complete", "L'uomo", "La memoria", "Il pensiero", "Il computer", "Stili di interazione", "Gestures", "Interfaccia mobile", "Creazione interfaccia mobile", "User experience", "Modelli di interazione", "Ubiquitous computing", "Engagement", "Interfacce tangibili", "Realtà mista"],
	prog_ogg2 : ["Note complete", "Note generali", "Classi innestate", "programmazione pseudo funzionale", "Thread", "Covarianza e controvarianza", "Programmazione ad oggetti in C++"],
	sis_operativi2 : ["Note complete", "Comunicazione tra processi e thread", "Creazione di processi", "Esecuzione e terminazione", "Segnali", "Pipe", "Thread", "Sezione critica", "Thread in POSIX", "Semafori", "Problemi risolubili con semafori", "Monitor",  "Thread in Java", "Deadlock"]
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

		
		if (selected_subject[i] == "<Algoritmi e strutture dati mod.2>") {
			arg_link = document.createElement("p");
			link_text = document.createTextNode(selected_subject[i]);
			arg_link.appendChild(link_text);
			argument_list.append(arg_link);
			continue;
		}
		else if (selected_subject[i] == "Progetto Bonfire") {
			arg_link.href = "https://github.com/Gabritorre/bonfire";
			arg_link.target = "_blank";
			arg_link.classList.add("exercise");
		}
		else {
			if (selected_subject[i].includes("Esercizi")){
				arg_link.classList.add("exercise");
			}
			else if (selected_subject[i] == "Note complete"){
				arg_link.classList.add("full_notes");
			}
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