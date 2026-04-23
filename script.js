let members = JSON.parse(localStorage.getItem('techCommunityMembers')) || [
    { nama: "Bimo Fadhlurrahman", email: "bimo@example.com", minat: "Cyber Security" },
    { nama: "Haffi", email: "haffi@example.com", minat: "Web Development" }
];

function saveMembers() {
    localStorage.setItem('techCommunityMembers', JSON.stringify(members));
}

function populateMemberTable() {
    const memberTable = document.getElementById('memberTable');
    if (memberTable) {
        memberTable.innerHTML = '';
        members.forEach(member => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${member.nama}</td>
                <td>${member.email}</td>
                <td>${member.minat}</td>
            `;
            memberTable.appendChild(row);
        });
    }
}

const memberForm = document.getElementById('memberForm');
if (memberForm) {
    memberForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const namaInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;
        const minatInput = document.getElementById('interest').value;

        const newMember = {
            nama: namaInput,
            email: emailInput,
            minat: minatInput
        };
        members.push(newMember);
        saveMembers(); 

        alert("Selamat Datang di Tech Community, " + namaInput + "!");

        const resultDiv = document.getElementById('result');
        const displayText = document.getElementById('displayText');
        
        if (resultDiv && displayText) {
            resultDiv.classList.remove('d-none');
            displayText.innerText = `Nama: ${namaInput}, Email: ${emailInput}, Minat: ${minatInput}`;
        }

        memberForm.reset();
        console.log("Data Anggota Saat Ini:", members); 
    });
}

if (document.getElementById('memberTable')) {
    populateMemberTable();
}

const mainAudio = document.getElementById('myAudio');
const mainImg = document.getElementById('mainImg');

function playAudio() {
    if (mainAudio) {
        mainAudio.play();
        console.log("Audio sedang diputar...");
    }
}

function pauseAudio() {
    if (mainAudio) {
        mainAudio.pause();
        console.log("Audio dihentikan.");
    }
}

function changeImg() {
    if (mainImg) {
        if (mainImg.src.includes('Perunggu.jpeg')) {
            mainImg.src = '_.jpeg';
        } else {
            mainImg.src = 'Perunggu.jpeg';
        }
        alert("Gambar Galeri telah diperbarui!");
    }
}

function showInfo(mediaName) {
    alert("Ini adalah konten " + mediaName + " dari Tech Community.");
}