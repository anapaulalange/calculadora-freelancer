var inputValorHora = document.querySelector('#valor-hora')
var inputHorasProjeto = document.querySelector('#horas-projeto')

var resultado = document.querySelector('#resposta')

function calcular() {

	var valor_hora = inputValorHora.valueAsNumber
	var horas_projeto = inputHorasProjeto.valueAsNumber
	
	var calculoProjeto = (valor_hora * horas_projeto).toFixed(2)
	
    resultado.textContent = 'R$'  +calculoProjeto
    
}

