let courses = {
	calc_e_ling_form : ["Note complete", "Automi a stati finiti deterministici", "Automi a stati finiti non deterministici", "Espressioni regolari", "Linguaggi non regolari", "Linguaggi context-free", "Automi a pila", "Linguaggi non context free", "Macchine di Turing", "Decidibilità", "Indecidibilità", "Esercizi decidibilità", "Riducibilità", "Storie di computazione accettanti", "Mapping-riducibilità", "Turing-riducibilità", "Teorema di Rice", "Esercizi conclusivi"],
 	diritto_info : ["Note complete", "Ordinamento giuridico italiano", "Principio di neutralità", "Documenti informatici", "Monete virtuali", "Privacy", "Il commercio elettronico", "Servizi digitali", "Contratto nei social network", "Intelligenza artificiale", "Reati", "Diritto d'autore", "Telecomunicazioni", "Codice di condotta social network"],
 	ing_software : ["Note complete", "Introduzione", "Ingegneria di sistema", "Piano di progetto", "Stima dei costi", "Ingegneria dei requisiti", "Documento dei requisiti", "Testing", "Progettazione architetturale", "UML e progettazione software", "Progettazione di interfacce utenti"],
	ling_per_rete : ["Note complete", "Introduzione a JavaScript", "Tipi di dato e valori", "Espressioni", "Operatori", "Statement", "Oggetti", "Array", "Funzioni"],
	reti_calc : ["Note complete", "Introduzione", "Livello fisico", "Livello di collegamento", "Gestione degli errori", "Condivisione delle risorse", "Livello di rete", "Count-to-Infinity", "Link-State routing", "Livello di trasporto", "Livello applicativo", "Sicurezza della rete", "HMAC, MD5 e cifratura a chiave simmetrica", "Cifratura a chiave pubblica", "Public key infrastructure", "DNS", "Posta elettronica", "Tecniche anti-spam", "HTTP", "UDP e TCP", "Controllo della congestione", "TLS", "IPv4", "Esercizi IPv4", "IPv6", "Routing interno ad un dominio", "Routing tra domini"],
	ric_operativa : ["Note complete", "Spazi vettoriali", "Funzioni lineari, continuità e derivabilità", "Esercizi derivata direzionale", "Programmazione matematica", "Esercizi programmazione matematica", "Problemi convessi", "Esercizi convessità", "Programmazione lineare", "Poliedri", "Costi fissi e vincoli disgiunti", "Metodo Branch & Bound"],
	sicurezza : ["Note complete", "Unix shell", "Stream editor ed espressioni regolari", "Assembly", "Analisi dei programmi", "Buffer overflow", "Stack overflow", "format strings", "Secure coding", "Identificazione", "Controllo degli accessi", "Firewall", "Attacchi web server side", "Side channels", "Attacchi web client side"],
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
			arg_link.classList.add("exercise");
		}
		else if (selected_subject[i] == "Note complete"){
			arg_link.classList.add("full_notes");
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