import { getCSS, tickConfig } from "./common.js";



async function quantidadeUsuariosPorRede() {

    // Dados fictícios dos usuários na escola, incluindo YouTube

    const dadosEscola = {

        "Facebook": 300,

        "Instagram": 1168,

        "Twitter": 584,

        "TikTok": 909,

        "WhatsApp": 1233,

        "YouTube": 779,

     }



    // Ordenar os dados pela quantidade de usuários em ordem decrescente

    const ordenados = Object.entries(dadosEscola).sort((a, b) => b[1] - a[1]);

    const nomeDasRedes = ordenados.map(item => item[0]);

    const quantidadeDeUsuarios = ordenados.map(item => item[1]);



    // Adicionar texto explicativo

    const textoExplicativo = document.createElement('p');

    textoExplicativo.classList.add('graficos-container__texto');

    textoExplicativo.innerHTML = `

       

           Você sabia que a nossa escola possui aproximadamente <span style="font-weight: bold; color: ${getCSS('--secondary-color')}">1.950 alunos?</span>

 Aproximadamente <span style="font-weight: bold; color: ${getCSS('--secondary-color')}">1.920 estudantes</span> estão conectados em alguma rede social e, em média, passam cerca de <span style="font-weight: bold; color: ${getCSS('--secondary-color')}">4 horas</span> por dia nessas plataformas. Isso significa que uma grande parte dos alunos está ativa nas redes sociais.

        <br><br>

        Abaixo, você pode ver o gráfico que mostra as redes sociais mais utilizadas entre nossos alunos.

    `;



    const container = document.getElementById('graficos-container');

    container.appendChild(textoExplicativo);



    const data = [

        {

            x: nomeDasRedes, 

            y: quantidadeDeUsuarios, 

            type: 'bar',

            marker: {

                color: ['#3a3a3a', '#545454', '#6f6f6f', '#8c8c8c', '#a9a9a9', '#c5c5c5'] // Cores para cada coluna

            }

        }

    ];



    const layout = {

        plot_bgcolor: getCSS('--bg-color'),

        paper_bgcolor: getCSS('--bg-color'),

        title: {

            text: 'Redes sociais com mais usuários entre alunos',

            x: 0,

            font: {

                color: getCSS('--primary-color'),

                size: 30,

                family: getCSS('--font')

            }

        },

        xaxis: {

            tickfont: tickConfig,

            title: {

                text: 'Nome das redes',

                font: {

                    color: getCSS('--secondary-color')

                }

            }

        },

        yaxis: {

            tickfont: tickConfig,

            title: {

                text: 'Número de usuários',

                font: {

                    color: getCSS('--secondary-color')

                }

            },

            range: [0, 2000] // Definindo o range do eixo Y para ir de 0 a 1800

        }

    };



    const grafico = document.createElement('div');

    grafico.className = 'grafico';

    container.appendChild(grafico);

    Plotly.newPlot(grafico, data, layout);

}



quantidadeUsuariosPorRede();
