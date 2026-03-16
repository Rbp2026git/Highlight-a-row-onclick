let table = document.getElementsByClassName("myTable")[0];
for(let row of table.rows){
    //console.log(row);
    row.onclick = function(){
        //remove color from all
        for(let r of table.rows){
            r.style.backgroundColor = "";
        };
        //Highlight a row onclick
        this.style.backgroundColor = "pink";
    };
}