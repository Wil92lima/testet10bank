function fetchApi(){
    
    fetch('http://t10teste.herokuapp.com/operacoesTeste/selectAll')
    .then((response)=>response.json())
    .then((data)=>{
        const list =document.querySelector('#lista')
        data.map((item)=>{
            const li = document.createElement('li');
            li.setAttribute('guid',item.guid);
            li.innerHTML = item.descricao;
            list.appendChild;
        })
    })
}
