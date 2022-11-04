function addRow() {
    let table = document.getElementById('isiTabel')
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let nama = document.getElementById('exampleInputNama1').value;
    let umur = document.getElementById('exampleInputPassword1').value;
    cell1.innerHTML = nama;
    cell2.innerHTML = umur;
}

function deleteRow() {
    document.getElementById('isiTabel').deleteRow(0)

}

fetch('https://kipi.covid19.go.id/api/get-faskes-vaksinasi')
    .then((response) => response.json())
    .then((data) => bacaDataVaksin(data));

function bacaDataVaksin(data) {
    console.log(data['data']);
    let table = document.getElementById('isiTabelcovid')
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let nama_kode = data['data'][0]['kode'];
    let nama_kecamatan = data['data'][0]['nama'];
    let nama_kota = data['data'][0]['kota'];
    let nama_provinsi = data['data'][0]['provinsi'];
    let status = data['data'][0]['status'];

    cell1.innerHTML = nama_kode;
    cell2.innerHTML = nama_kecamatan;
    cell3.innerHTML = nama_kota;
    cell4.innerHTML = nama_provinsi;
    cell5.innerHTML = status;

}