
//Alert BTN

// var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// var alertTrigger = document.getElementById('liveAlertBtn')

// function alert(message, type) {
//   var wrapper = document.createElement('div')
//   wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

//   alertPlaceholder.append(wrapper)
// }



//  if (alertTrigger){
//    alertTrigger.addEventListener('click', function () { 
//      alert('Pedido registrado com sucesso!', 'success') 
//    }) 
// }





// //Fetchs (API)

// document.addEventListener('DOMContentLoaded', () => {
//    updatePosts();
// })

// function updatePosts(){
//     fetch("http://192.168.0.106:3000/api/all").then(res => {
//         return res.json();
//     }).then(json => {
//         let postElements = '';

//         let posts = JSON.parse(json);
//         posts.forEach((post) => {
//             let postElement = `                     <tr>
//                                                         <th scope="row">${post.nome}</th>
//                                                         <td>${post.sabor}</td>
//                                                         <td>${post.quantidade}</td>
//                                                         <td>${post.data}</td>
//                                                         <td onclick="delClick()" class="btn-close"></td>
//                                                     </tr>
//                                                     `
//           postElements += postElement;
//         })

//         document.getElementById("comming").innerHTML = postElements;
//     })
// };


// // New Posts

// function nPosts(){

//     let nome = document.getElementById('nome').value;
//     let sabor = document.getElementById('sabor').value;
//     let quantidade = document.getElementById('quantidade').value;

//     let formatData = new Date(document.getElementById('data').value);
//     let data = ((formatData.getDate() + 1 )) + "/" + ((formatData.getMonth() + 1)) + "/" + formatData.getFullYear(); 

//     // let data = document.getElementById('data').value;
        

//     let post = {nome, sabor, quantidade, data };

//     const options = 
//         {
//             method:"POST", 
//             headers: new Headers({'content-type': 'application/json'}),
//             body: JSON.stringify(post)
//         };
    
//     fetch("http://192.168.0.106:3000/api/new", options).then(res => {
//         console.log(res);
//             updatePosts();
//             document.getElementById('nome').value = "";
//             document.getElementById('sabor').value = "";
//             document.getElementById('quantidade').value = "";
//             document.getElementById('data').value = "";
//         });
//     window.location.href = "/registros";


// };


function delClick(id) {
    fetch('/' + id, {method: 'DELETE'}).then(res => {

        if (res.status == 200){
            res.text().then(postId => {
                document.getElementById(postId).remove();
                alert('Encomenda APAGADA com Sucesso')
            })
        }
        else{
            res.json().then(err => {
                console.log(err.message);
                alert(err.message);
            })
        }

    })
}


function enviarAlerta(){
    let nome = document.getElementById('nome').value;
    let sabor = document.getElementById('sabor').value;
    let quantidade = document.getElementById('quantidade').value;

    let enviar = document.querySelector('.send-order');

    if( nome != 0 && sabor != 0 && quantidade != 0){
        alert('A RBPizzas agradece a sua preferência')
    }else{
        alert('Preencha todos os campos por favor!')
    }

}


function encomendas(){
    window.location.href = "/encomendas";
}
