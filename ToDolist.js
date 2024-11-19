document.write("<div class='container'>");
        document.write("<div id='frame' class='frame'>")
        document.write("<div class=note-head>");
        document.write("<h3>To Do List</h3> <i onclick='addNote()' class='material-icons'>add</i>");
        document.write("</div>")
        
        document.write("<div id='note-body' class='note-body'>")
            // document.write("<div  id='box' class='box'>")
            // document.write("<div class='title'><h2>Hello</h2></div>")
            // document.write("<div class='btns'> <span class='material-symbols-outlined'>delete</span> <span class='material-symbols-outlined'>edit</span>")
            // document.write("</div>")
        document.write("</div>")
        
        
        var title;
        var content=[]
        var elem;

        var data = localStorage.getItem('notes')
        document.getElementById('note-body').innerHTML=JSON.parse(data)


        function addNote (){

            var clr1 = Math.random()*255
            var clr3 = Math.random()*255
            var clr2 = Math.random()*255

            title = prompt("Give it a Title:", "Your List")
             elem = `<div id="box"  class='box'  style='border-bottom:2px solid rgb(${clr1}, ${clr2}, ${clr3});'>
                                <div class='title'>
                                    <h2 style='color: rgb(${clr1}, ${clr2}, ${clr3})'>${title}</h2>
                                    <h2 style='display:none;'>Done</h2>
                                </div>
                                <div class='btns'> 
                                    
                                    <span class='material-symbols-outlined' onclick='taskCheck(this)'>radio_button_unchecked</span>
                                    <span class='material-symbols-outlined' onclick='deleteNote(this)'>delete</span>
                                    <span class='material-symbols-outlined' onclick='editNotes(this)'>Edit</span>
                            </div>
                         `

            content.push(elem)
            document.getElementById("note-body").innerHTML+=elem  

            settingLocalstorage()

        }

        

        function settingLocalstorage(){
                var dom = document.getElementById('box').parentNode.innerHTML
                localStorage.setItem('notes',JSON.stringify(dom))
        }

        
        function deleteNote(){    

            var td = event.target.parentNode; 
            var tr = td.parentNode;
            var dd = tr.childNodes[1].innerText
            tr.parentNode.removeChild(tr)

            settingLocalstorage()

        }
        

        function editNotes(obj){
            var btns = obj.parentNode

            var tit = btns.parentNode.childNodes[1]
            var h2 = tit.childNodes[1].innerHTML

            var newTitle = prompt("edit your list", h2) 

            tit.childNodes[1].innerHTML=newTitle

            settingLocalstorage()


        }

        
        function taskCheck(obj){

            var btns = obj.parentNode
            var box = btns.parentNode

            var noteTitle = box.childNodes[1]

            
            if (obj.innerHTML == 'radio_button_unchecked' ){
                obj.innerHTML = "check_circle"

                box.style.backgroundColor = "rgb(193, 233, 213)"

                noteTitle.childNodes[1].style.display = "none"
                btns.childNodes[5].style.display = "none"
                noteTitle.childNodes[3].style.display = ""
                noteTitle.childNodes[3].style.color = "#4A628A"

                settingLocalstorage()
                return
            }
            if(obj.innerHTML == 'check_circle'){
                obj.innerHTML = "radio_button_unchecked"

                box.style.backgroundColor = "rgb(231, 231, 224)"

                btns.childNodes[5].style.display = ""
                noteTitle.childNodes[1].style.display = ''
                noteTitle.childNodes[3].style.display = "none"

                settingLocalstorage()
                return   
            }   
            
        }