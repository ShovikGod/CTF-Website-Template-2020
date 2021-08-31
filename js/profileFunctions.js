let edit=false;
const editBtn=document.getElementById('edit-btn');
const discBtn=document.getElementById('discard-btn');
const fields=document.querySelectorAll('.form-control');
let preValues=[];

function storePrev(){
    for(let i=0; i<fields.length; i++){
        preValues[i]=fields[i].value;
    }
}

function disable(x){
    for(let i=0; i<fields.length; i++){
        fields[i].disabled=x;
    }
}

function isValid(){
    let mobile=fields[3].value;
    let email=fields[2].value;
    if(mobile.length!=10 || !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
        return false;
    return true;

}

function handleSave(){
    edit=!edit;
    if(edit){
        editBtn.innerHTML='<h4>Save</h4>';
        editBtn.className='btn btn-outline-success btn-shadow px-3 my-2 mr-3 ml-0 ml-sm-1 text-left';
        editBtn.disabled=true;
        discBtn.style.display="inline-block";
        disable(false);
        storePrev();
    }
    else{
        editBtn.innerHTML='<h4>Edit</h4>';
        editBtn.className='btn btn-outline-warning btn-shadow px-3 my-2 mr-3 ml-0 ml-sm-1 text-left';
        editBtn.disabled=false;
        discBtn.style.display="none";
        disable(true);
        storePrev();
    }
}

function handleDiscard(){
    edit=!edit;
    editBtn.innerHTML='<h4>Edit</h4>';
    editBtn.className='btn btn-outline-warning btn-shadow px-3 my-2 mr-3 ml-0 ml-sm-1 text-left';
    editBtn.disabled=false;
    discBtn.style.display="none";
    for(let i=0; i<fields.length; i++){
        fields[i].value=preValues[i];
    }
    disable(true);
}

function diff(){
    let diff=false;
    for(let i=0; i<fields.length; i++){
        if(fields[i].value!=preValues[i]){
            diff=true;
            break;
        }
    }
    if(diff && isValid()){
        editBtn.disabled=false;
    }
    else{
        editBtn.disabled=true;
    }
}