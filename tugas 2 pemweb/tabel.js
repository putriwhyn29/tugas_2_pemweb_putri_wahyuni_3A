const form = document.getElementById('dataForm');
        const nameInput = document.getElementById('name');
        const nimInput = document.getElementById('nim');
        const kelasInput = document.getElementById('kelas');
        const alamatInput = document.getElementById('alamat');
        const output = document.getElementById('output');

        // 1. Event focus pada Nama input
        nameInput.addEventListener('focus', function() {
            nameInput.style.borderColor = '#007bff';
        });
        nameInput.addEventListener('blur', function() {
            nameInput.style.borderColor = '#90c9ff';
        });

        // 2. Event input pada NIM input
        nimInput.addEventListener('input', function() {
            nimInput.style.borderColor = '#007bff';
        });

        // 3. Event focus dan blur pada Kelas input
        kelasInput.addEventListener('focus', function() {
            kelasInput.style.borderColor = '#007bff';
        });
        kelasInput.addEventListener('blur', function() {
            kelasInput.style.borderColor = '#90c9ff';
        });

        // 4. Event focus dan blur pada Alamat textarea
        alamatInput.addEventListener('focus', function() {
            alamatInput.style.borderColor = '#007bff';
        });
        alamatInput.addEventListener('blur', function() {
            alamatInput.style.borderColor = '#90c9ff';
        });

        // 5. Event submit pada form
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = nameInput.value;
            const nim = nimInput.value;
            const kelas = kelasInput.value;
            const alamat = alamatInput.value;

            output.innerHTML = `
                <h3>Data yang Dimasukkan:</h3>
                <p><strong>Nama:</strong> ${name}</p>
                <p><strong>NIM:</strong> ${nim}</p>
                <p><strong>Kelas:</strong> ${kelas}</p>
                <p><strong>Alamat:</strong> ${alamat}</p>
            `;
        });