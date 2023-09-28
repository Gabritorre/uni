let algo_strut_dati1 = ["Fibonacci"];
let basi_dati1 = ["Introduzione", "Progettazione e modellazione"];
let prob_stat = ["Introduzione", "Probabilita elementare"];
let prog_ogg1 = ["Introduzione", "Classi"];
let sis_operativi1 = ["Introduzione"];

function show_arguments(subj) {
	clear_output();
	// console.log(subj);
	let argument_list = document.getElementById("arguments");
	// console.log(argument_list);
	let selected_subject;
	switch (subj) {
		case "algo_strut_dati1":
			selected_subject = algo_strut_dati1;
			break;
		case "basi_dati1":
			selected_subject = basi_dati1;
			break;
		case "prob_stat":
			selected_subject = prob_stat;
			break;
		case "prog_ogg1":
			selected_subject = prog_ogg1;
			break;
		case "sis_operativi1":
			selected_subject = sis_operativi1;
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

function clear_output(){
	try{	//rimuove gli output presenti
		let delete_list = document.getElementById("arguments");
		while (delete_list.firstChild) {
			delete_list.removeChild(delete_list.lastChild);
		}
	}catch(e){}
}