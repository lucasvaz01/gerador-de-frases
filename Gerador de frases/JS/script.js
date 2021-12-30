let frases = ['Nunca deixe ninguém te dizer que não pode fazer alguma coisa. Se você tem um sonho tem que correr atrás dele. As pessoas não conseguem vencer e dizem que você também não vai vencer. Se você quer uma coisa corre atrás. - À Procura da Felicidade',
'As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente. - Zig Ziglar',
'Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer. - Dwight Eisenhower',
'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação. - Dalai Lama',
'A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento. - Frederick Herzberg',
'A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor. - Joseph Addison']

function gerarFrase(){
    let frase = frases[
        Math.floor(Math.random() * frases.length)
    ];

    document.querySelector('#frase-gerada').textContent=frase;
}