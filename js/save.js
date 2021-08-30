let edit=false;
const button=document.getElementById('d-btn-1');
const fields=document.querySelectorAll('.form-control');
function handleSave(){
    console.log(fields);
    edit=!edit;
    if(edit){
        button.innerHTML='<h4>Save</h4>';
        button.className='btn btn-outline-success btn-shadow px-3 my-2 mr-3 ml-0 ml-sm-1 text-left';
        for(let i=0; i<fields.length; i++){
            fields[i].disabled=false;
        }
    }
    else{
        button.innerHTML='<h4>Edit</h4>';
        button.className='btn btn-outline-warning btn-shadow px-3 my-2 mr-3 ml-0 ml-sm-1 text-left';
        for(let i=0; i<fields.length; i++){
            fields[i].disabled=true;
        }
    }
}