document.(function(){
    var people = [];
    var rangeAges = [{label:'15-20', value:'15-20'},{label:'21-30', value:'21-30'},{label:'31-40', value:'31-40'}];
    var btnSave;
    var btnUpdate;
    var txtFirstName;
    var txtLastName;
    var ddlAges;
    var tableBody;
    var app = {
        init:function(){
            txtFirstName = document.getElementById('txtFirstName');
            txtLastName = document.getElementById('txtLastName');
            ddlAges = document.getElementById('ddlAges');
            console.log(ddlAges.options);
            rangeAges.forEach(function(item, index){
                ddlAges.options.add(app.createElement('option',item));
            });
            tableBody = document.getElementById('table-body');
            btnSave = document.getElementById('btnSave');
            btnSave.addEventListener('click', function(e){
                app.create({
                    'first_name':txtFirstName.value,
                    'last_name':txtLastName.value,
                    'age':ddlAges.options[ddlAges.selectedIndex].value
                });
                //app.displayListOfPeople();
                app.displayListOfPeopleCards();
                
                txtFirstName.value='';
                txtLastName.value='';
            });
            btnUpdate = document.getElementById('btnUpdate');
            
            btnUpdate.addEventListener('click', function(e){
                app.update(this.value);
                btnUpdate.style.display='none';
                btnSave.style.display='inline-block';
            })
        },
        create:function(person){
            people.push(person);
        },
        read:function(index){
            return people[index];
        },
        update:function(index){
                people[index].age=ddlAges.value;
                people[index].first_name=txtFirstName.value;
                people[index].last_name=txtLastName.value;
            app.displayListOfPeople();
        },
        delete:function(index){
            people.splice(index,1);
            app.displayListOfPeople();
        },
        displayListOfPeople:function(){
            tableBody.innerHTML = '';
            people.forEach(function(item, index){
                var tr = tableBody.insertRow(-1);
                for(property in item){
                    tr.insertCell(-1).innerHTML = item[property];
                };
                var btnDelete = app.createElement('button',{
                    id:'person_' + index,
                    className:'btn-delete',
                    value:index,
                });
                btnDelete.innerHTML = "Eliminar";
                var btnEdit = app.createElement('button',{
                    id:'person_'+index,
                    className:'btn-edit',
                    value:index,
                });
                btnEdit.innerHTML = "Editar"
                if(btnDelete.addEventListener){
                    btnDelete.addEventListener('click', function(e){
                        app.delete(index);
                    });
                    btnEdit.addEventListener('click', function(e){
                        var person = app.read(index);
                        txtFirstName.value = person.first_name;
                        txtLastName.value = person.last_name;
                        btnUpdate.style.display ='inline-block';
                        btnUpdate.value = index;
                        btnSave.style.display = 'none';
                    });
                }else{
                    btnDelete.attachEvent('onclick', function(e){
                        app.delete(index);
                    });
                    btnEdit.attachEvent('onclick', function(e){
                        var person = app.read(index);
                        txtFirstName.value = person.first_name;
                        txtLastName.value = person.last_name;
                        btnUpdate.style.display ='inline-block';
                        btnUpdate.value = index;
                    });
                }
                tr.insertCell(-1).appendChild(btnDelete);
                tr.insertCell(-1).appendChild(btnEdit);
            });
        },
        
        displayListOfPeopleCards:function(){
            var list = document.getElementById('people-cards');
            list.innerHTML = '';
            people.forEach(function(item, index){

                var btnDeleteCard = app.createElement('button',{
                    id:'card_'+index,
                    className:'btn-deleteCard',
                    value:index,
                });


                console.log(btnDeleteCard);

                list.innerHTML+=app.createCardView(item,btnDeleteCard);
            });
        },
        
        createCardView:function(item,btnDeleteCard){
            return '<div class="view">'+
                '<img src="img/1.jpg" />'+
                '<div class="mask">'+
                '<h2>'+item.first_name+'</h2>'+
                '<p>hola que tal</p>'+
                '<a href="#" class="info">'+item.age+'</a>'+
                '<div class="botones"> '+
                '<a href="app.delete('+btnDeleteCard.value+')"><img src="img/delete.png"></a>'+
                '<a href="javascript:update('+btnDeleteCard.value+')"><img src="img/edit.png"></a>'+
                '</div>'+
                '</div>'+
                '</div>';
        },
        
        createElement:function(type, attrs){
            var element = document.createElement(type);
            for(property in attrs){
                element[property] = attrs[property];
            };
            return element;
        }
    }
    return app;
})().init();
