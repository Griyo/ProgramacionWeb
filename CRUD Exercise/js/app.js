(function(){
    var people = [];
    var rangeAges = [{label:'15-20', value:'15-20'},{label:'21-30', value:'21-30'},{label:'31-40', value:'31-40'}];
    var btnSave;
    var btnUpdate;
    var txtFirstName;
    var txtLastName;
    var ddlAges;
    var tableBody;
    var expregString = /^[a-zA-Z]{1,25}$/;
    var expregNumber = /^[0-9]{1,10}$/;
    var expregAlpha = /^[a-zA-Z0-9]{1,30}$/;

    var app = {
        init:function(){
            txtFirstName = document.getElementById('txtFirstName');
            txtLastName = document.getElementById('txtLastName');
            ddlAges = document.getElementById('ddlAges');
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
            });
            btnUpdate = document.getElementById('btnUpdate');
            btnUpdate.addEventListener('click', function(e){
                app.update(this.value);
                btnSave.style.display='inline-block';
                btnUpdate.style.display='none';
            })
        },
        
        validarString:function(cadena){
            return(expregString.test(cadena));
        },
        
        validarNumber:function(cadena){
            return(expregNumber.test(cadena));
        },
        
        validarAlpha:function(cadena){
            return(expregAlpha.test(cadena));
        },
        
        create:function(person){
            people.push(person);
        },
        read:function(index){
            return people[index];
        },
        update:function(index){
            people[index].first_name = txtFirstName.value;
            people[index].last_name = txtLastName.value;
            people[index].age = ddlAges.value;     
            app.displayListOfPeopleCards();

        },
        delete:function(index){
            people.splice(index,1);
            //app.displayListOfPeople();
            app.displayListOfPeopleCards();
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
                    });
                }else{
                    btnDelete.attachEvent('onclick', function(e){
                        app.delete(index);
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
                var divView = app.createElement('div',{
                    className:'view'
                });
                var img = app.createElement('img',{
                    src:'img/1.jpg'
                });
                var divDelete = app.createElement('div',{
                    className:'btnCardDelete'
                });
                var divEdit = app.createElement('div',{
                    className:'btnCardEdit'
                });
                var divMask = app.createElement('div',{
                    className:'mask'
                });
                var h2Title = app.createElement('h2');
                h2Title.innerHTML = item.first_name;
                var pMensaje = app.createElement('p');
                var linkAge = app.createElement('a',{
                    href:'#',
                    className:'info'
                });
                
                divDelete.addEventListener('click', function(e){
                    app.delete(index); 
                });
                
                divEdit.addEventListener('click', function(e){
                    var person = app.read(index);
                    txtFirstName.value = person.first_name;
                    txtLastName.value = person.last_name;
                    btnSave.style.display='none';
                    btnUpdate.style.display='inline-block';
                    btnUpdate.value = index;
                });
                
                linkAge.innerHTML = item.age;
                divMask.appendChild(h2Title);
                divMask.appendChild(pMensaje);
                divMask.appendChild(linkAge);
                divView.appendChild(divDelete);
                divView.appendChild(divEdit);
                divView.appendChild(img);
                divView.appendChild(divMask);
                list.appendChild(divView);
            });
        },
        createCardView:function(item){
            return '<div class="view">'+
                '<img src="img/1.jpg" />'+
                '<div class="mask">'+
                '<h2>'+item.first_name+'</h2>'+
                '<p>hola que tal</p>'+
                '<a href="#" class="info">'+item.age+'</a>'+
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