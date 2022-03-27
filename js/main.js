function mostrarProductos() {
    fetch('http://127.0.0.1:5000/productos')
    .then(response => response.json())
    .then(data => {
        for (d in data) {
            document.getElementById("productos").insertAdjacentHTML("beforeend", `
            <tr>
                <td>${data[d].id}</td>
                <td>${data[d].nombre}</td>
                <td>${data[d].categoria}</td>
                <td>${data[d].precio}</td>
            </tr>`)
            console.log(data[d].id)
        }
    })
}
