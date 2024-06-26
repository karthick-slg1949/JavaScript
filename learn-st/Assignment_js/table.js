let Users=[
{"id":1,"name":"Arleyne","salary":"$6.41"},
{"id":2,"name":"Florri","salary":"$2.95"},
{"id":3,"name":"Gerry","salary":"$6.37"},
{"id":4,"name":"Sidney","salary":"$6.71"},
{"id":5,"name":"Auberon","salary":"$9.09"},
{"id":6,"name":"Lexis","salary":"$2.26"},
{"id":7,"name":"Gary","salary":"$0.10"},
{"id":8,"name":"Krysta","salary":"$5.05"},
{"id":9,"name":"Remus","salary":"$9.51"},
{"id":10,"name":"Ambur","salary":"$6.95"},
{"id":11,"name":"Hobey","salary":"$9.32"},
{"id":12,"name":"Callida","salary":"$2.15"},
{"id":13,"name":"Ailene","salary":"$1.95"},
{"id":14,"name":"Morgun","salary":"$6.85"},
{"id":15,"name":"Wilbert","salary":"$1.01"},
{"id":16,"name":"Melodee","salary":"$4.52"},
{"id":17,"name":"Trev","salary":"$3.60"},
{"id":18,"name":"Kai","salary":"$0.50"},
{"id":19,"name":"Janeta","salary":"$1.21"},
{"id":20,"name":"Linet","salary":"$7.38"},
{"id":21,"name":"Tressa","salary":"$0.42"},
{"id":22,"name":"Aindrea","salary":"$0.58"},
{"id":23,"name":"Sylvia","salary":"$7.45"},
{"id":24,"name":"Brandy","salary":"$3.08"},
{"id":25,"name":"Kristyn","salary":"$8.05"},
{"id":26,"name":"Sue","salary":"$7.95"},
{"id":27,"name":"Robinia","salary":"$0.17"},
{"id":28,"name":"Willow","salary":"$1.71"},
{"id":29,"name":"Fairfax","salary":"$2.66"},
{"id":30,"name":"Chelsae","salary":"$6.26"},
{"id":31,"name":"Josiah","salary":"$5.60"},
{"id":32,"name":"Kahlil","salary":"$4.78"},
{"id":33,"name":"Reube","salary":"$5.55"},
{"id":34,"name":"Margy","salary":"$2.62"},
{"id":35,"name":"Florry","salary":"$2.85"},
{"id":36,"name":"Alfreda","salary":"$4.58"},
{"id":37,"name":"Philipa","salary":"$9.86"},
{"id":38,"name":"Ania","salary":"$9.20"},
{"id":39,"name":"Maggy","salary":"$0.95"},
{"id":40,"name":"Rycca","salary":"$1.79"},
{"id":41,"name":"Laurianne","salary":"$2.13"},
{"id":42,"name":"Godfry","salary":"$5.70"},
{"id":43,"name":"Gothart","salary":"$9.06"},
{"id":44,"name":"Alric","salary":"$1.86"},
{"id":45,"name":"Erena","salary":"$2.59"},
{"id":46,"name":"Ulric","salary":"$7.77"},
{"id":47,"name":"Coletta","salary":"$8.79"},
{"id":48,"name":"Alys","salary":"$5.56"},
{"id":49,"name":"Reginauld","salary":"$5.40"},
{"id":50,"name":"Melicent","salary":"$6.85"}

]
function DisplayData(){
    let rows="";
    for(let user of Users){
        rows=rows+ `<div>
        <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.salary}</td></tr>
        </div>`
    }
    document.getElementsByTagName("tbody")[0].innerHTML=rows

}
