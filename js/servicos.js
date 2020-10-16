var users = [];

var indexEdit=-1;

function addUser(){
  var obj = MobileUI.objectByForm('formCadaster');
  if(!obj.nome_servico || !obj.dia || !obj.info || !obj.custo) {
    MobileUI.show('messageValidation');
    return false;
  }
  if(indexEdit>=0){
    users[indexEdit] = obj;
    indexEdit=-1;
  } else {
    users.push(obj);
  }
  MobileUI.clsearForm('formCadaster');
}

function editUser(index){
  indexEdit = index;
  MobileUI.formByObject('formCadaster', users[index]);
}

function deleteUser(index){
  delete users[index];
}