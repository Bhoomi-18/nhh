const url = 'https://detect-skin-disease.p.rapidapi.com/facebody/analysis/detect-skin-disease';

const options = {
    method: 'POST',
    headers: {
        'x-rapidapi-key': 'f6a519d3ffmsh8b742de37c9902ep158e24jsn1427861b0ee4',//past api key edharrrr (10 bar ki validity 1 api key ki) soo try new id for getting new api.
        'x-rapidapi-host': 'detect-skin-disease.p.rapidapi.com'
    }
};

async function fetchSkinDiseaseData() {
    const imageFileInput = document.getElementById('imageFileInput');
    const file = imageFileInput.files[0];
    
    if (!file) {
        document.getElementById('result').textContent = "Please select an image file.";
        return;
    }

    const data = new FormData();
    data.append('image', file);

    options.body = data;

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result); 
        document.getElementById('result').textContent = result;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').textContent = "Error fetching data: " + error.message;
    }
}

document.getElementById('analyzeButton').addEventListener('click', fetchSkinDiseaseData);
