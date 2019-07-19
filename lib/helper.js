 // screen message
 function tempAlert(msg,duration){
    var el = document.createElement("div");
    el.setAttribute("id","successMessage");
    el.setAttribute("class","align-middle")
    el.innerHTML = "<h4>"+ msg + "</h4>";
    setTimeout(function(){
    el.parentNode.removeChild(el);
    },duration);
    document.body.appendChild(el);
}

let action = new URL(location.href).searchParams.get("action"),
    ref  = new URL(location.href).searchParams.get("ref");

if (action == "updated"){
    document.getElementById(ref).scrollIntoView();
    tempAlert("Редакцията извършена успешно!", 3000);
} else if (action == "add") {
    setTimeout('window.location.replace(window.location.href + "ed")', 200)();
} else if (action == "added"){
    document.getElementById("buttonAdd").scrollIntoView();
    tempAlert("Добавянето премина успешно!", 3000);
} else if (action == "existing"){
    tempAlert("Вече има създаден такъв запис!! Добавянето Прекратено!", 3000);
}

function add(type){
    if (type == "clinic"){
        window.location.replace('/clinics/add');
    } else {
        window.location.replace('/people/add');
    }
}

function edit(type, id){
    if (type == "clinic"){
        window.location.replace('/clinics/edit/' + id);
    } else {
        window.location.replace('/people/edit/' + id);
    }
}

function del(type, id){

    if (type == "clinic"){
        if (confirm('Сигурни ли сте, че искате да изтриете това здравно заведение?')){
            window.location.replace('/clinics/delete/' + id);
        }
    } else {
        if(confirm('Сигурни ли сте, че искате да изтриете този човек?')){
            window.location.replace('/people/delete/' + id);
        }
    }
}