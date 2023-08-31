function replaceName () {
    let name = prompt("Siapakah Anda", "");
    document.getElementById("name").innerHTML = name;
}

document.getElementById('tombol').addEventListener("click", function() {
    replaceName();
} )