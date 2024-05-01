document.getElementById('pesquisa').addEventListener('submit', async function(event) {
    event.preventDefault();

    const cityName = document.getElementById('city_name').value;

    const apiKey = '799b9b8775fd3ffa38fdca0c61a15355';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const results = await fetch(apiUrl);
        const json = await results.json();

        if (json.cod === 200) {
            showInfo({
                city: json.name,
                country: json.sys.country,
                temp: json.main.temp,
            });
        } else {
            document.querySelector('#weather').classList.remove('show');
            showAlert(`
            Não foi possível localizar...
            
            <img src="src/images/404.svg" alt="Erro de localização" />
            `);
        }
    } catch (error) {
        console.error('Erro ao obter dados: ', error);
        showAlert('Ocorreu um erro ao tentar buscar as informações. Por favor, tente novamente.');
    }
});

function showInfo(json) {
    showAlert('');

    document.querySelector("#weather").classList.add('show');

    document.querySelector('#title').innerHTML = `${json.city}, ${json.country}`;

    document.querySelector('#temp_value').innerHTML = `${json.temp.toFixed(1).toString().replace('.', ',')} <sup>C°</sup>`;
}

function showAlert(msg) {
    document.querySelector('.alert').innerHTML = msg;
}
