let courses = {
	calc_e_ling_form : ["Note complete"],
 	diritto_info : ["Note complete"],
 	ing_software : ["Note complete", "Introduzione", "Ingegneria di sistema", "Piano di progetto", "Stima dei costi", "Ingegneria dei requisiti", "Documento dei requisiti", "Testing"],
	ling_per_rete : ["Note complete", "Introduzione a JavaScript"],
	reti_calc : ["Note complete"],
	ric_operativa : ["Note complete"],
	sicurezza : ["Note complete"],
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