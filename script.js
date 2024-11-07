let minutes = 0; 
let hours = 0; 
let intervalmin; 

const poem1 = []; 
const topoem1 = [
    'The ', 'moon ', 'is ', 'no ', 'door. <br>',
    'It ', 'is ', 'a ', 'face ', 'in ', 'its ', 'own ', 'right, <br>',
    'White ', 'as ', 'a ', 'knuckle, ', 'and ', 'horrid <br>',
    'With ', 'a ', 'stare ', 'like ', 'the ', 'face ', 'of ', 'a ', 'goddess, <br>',
    'The ', 'yew ', 'tree ', 'points ', 'up, ', 'its ', 'black ', 'fingers <br>',
    'Like ', 'a ', 'child’s ', 'hand, ', 'opening <br>',
    'To ', 'the ', 'night, ', 'that ', 'is ', 'not ', 'the ', 'night <br>',
    'Of ', 'simple ', 'time ', 'and ', 'memory. <br>',
    'I ', 'do ', 'not ', 'know ', 'who ', 'will ', 'come ', 'to ', 'me <br>',
    'Or ', 'how ', 'far ', 'the ', "moon’s ", 'quiet <br>',
    'Is ', 'from ', 'the ', 'yew ', "tree’s ", 'thought. <br><br>',
    'The ', 'moon ', 'is ', 'a ', 'relic, <br>',
    'The ', 'yew ', 'tree ', 'a ', 'point ', 'of ', 'pain, <br>',
    'A ', 'knot ', 'of ', 'memories ', 'strung <br>',
    'Like ', 'the ', 'light ', 'that ', 'lingers <br>',
    'And ', 'flees ', 'at ', 'the ', 'same ', 'time. <br>',
    'My ', 'heart ', 'is ', 'heavy ', 'with ', 'the ', 'weight <br>',
    'Of ', 'those ', 'memories, ', 'and ', 'they ', 'pull ', 'me <br>',
    'Back ', 'to ', 'where ', 'I ', 'was, ', 'where ', 'I ', 'had ', 'been. <br><br>',
    '—Sylvia Plath', '', '', ''
];

const poem3 = []; 
const topoem3 = [
    'In ', 'the ', "attic’s ", 'quiet ', 'sigh, <br>',
    'Dust ', 'dances ', 'with ', 'fading ', 'light, <br>',
    'Childhood ', 'dreams ', 'in ', 'creased ', 'letters, <br>',
    'Lavender ', 'scents ', 'the ', 'air, <br>',
    'Familiar ', 'laughter ', 'echoes, <br>',
    'Binding ', 'me ', 'to ', 'their ', 'warmth. <br><br>',
    'Each ', 'wrinkle ', 'whispers ', 'stories, <br>',
    'Time ', 'slips ', 'through ', 'fingers, <br>',
    'Yet ', 'I ', 'gather ', 'these ', 'fragments, <br>',
    'Stitching ', 'shadows ', 'into ', 'light, <br>',
    'A ', 'quilt ', 'of ', 'memories, <br>',
    'Heavy, ', 'yet ', 'so ', 'very ', 'light. <br> <br> ',
    '—Sylvia Plath'
];

const poem2 = []; 
const topoem2 = [
    '尋', '尋', '覓', '覓, ', '冷', '冷', '清', '清, <br>', 
    '淒', '淒', '慘', '慘', '戚', '戚。<br>',
    '乍', '暖', '還', '寒', '時', '候, ', '最', '難', '將', '息。<br>',
    '三', '杯', '兩', '盞', '淡', '酒, ', '怎', '敵', '他', '晚', '來', '風', '急? <br>',
    '雁', '過', '也, ', '正', '傷', '心, ', '卻', '是', '舊', '時', '相', '識。<br><br>',
    '滿', '地', '黃', '花', '堆', '積', '。 ', '憔', '悴', '損, ', '如', '今', '有', '誰', '堪', '摘? <br>',
    '守', '著', '窗', '兒, ', '獨', '自', '怎', '生', '得', '黑? <br>',
    '梧', '桐', '更', '兼', '細', '雨, ', '到', '黃', '昏,', '點', '點', '滴', '滴。 <br>',
    '這', '次', '第, ', '怎', '一', '個', '愁', '字', '了', '得! <br> <br> ',
    '—李清照'
];

const poem4 = []; 
const topoem4 = [
    '寂', '寂', '長', '夜, ', '寒', '風', '吹', '拂, <br>',
    '花', '落', '無', '聲, ', '影', '消。<br>',
    '遙', '望', '星', '河', '如', '夢, ', '舊', '日', '難', '尋。<br>',
    '心', '隨', '秋', '葉', '飄', '落, ', '何', '處', '寄, ', '滿', '腹', '愁', '思？<br>',
    '舊', '庭', '院, ', '空', '留', '月', '色, ', '憶', '當', '年', '歡', '笑', '成', '淚。<br><br>',
    '黃', '昏', '又', '至, ', '燈', '火', '微', '微, ', '誰', '共', '剪', '燭', '語？<br>',
    '思', '君', '幾', '何, ', '風', '雨', '聲', '裡', '更', '添', '寂', '寞。<br>',
    '孤', '鴻', '遠', '飛, ', '雲', '外', '不', '知', '何', '往, <br>',
    '對', '此', '景, ', '淚', '眼', '凝', '望, ', '難', '釋', '心', '頭', '苦。<br> <br>',
    '—李清照'
]; 

const poem5 = []; 
const topoem5 = [
    '古', '池', 'や <br>', 
    '蛙', '飛', 'び', '込', 'む <br>', 
    '水', 'の', '音 <br> <br>', 
    '—松尾 芭蕉' 
]; 

const poem6 = []; 
const topoem6 = [
    'Le ', 'soleil ', 'décline, ', 'et ', 'déjà ', "l'ombre ", 'avance, <br>',
    'Sur ', 'nos ', 'fronts ', 'fatigués, ', 'elle ', 'danse ', 'en ', 'secret, <br>',
    "Égrainant ", 'les ', 'secondes ', "d'une ", 'lente ', 'cadence— <br>',
    'Chaque ', 'heure ', 'efface ', 'un ', 'rêve, ', 'un ', 'désir, ', 'un ', 'regret. <br><br>',
    "L'éclat ", 'de ', 'la ', 'jeunesse ', "s'éteint ", 'comme ', 'un ', 'feu, <br>',
    'Et ', 'le ', 'rire ', 'des ', 'jours ', "s'effondre ", 'dans ', "l'oubli. <br>",
    'Nos ', 'amours ', 'sont ', 'des ', 'cendres ', 'balayées ', 'par ', 'le ', 'jeu <br>',
    "D'un ", 'vent ', 'impitoyable, ', 'qui ', 'siffle ', 'et ', 'nous ', 'détruit. <br><br>',
    'La ', 'rose ', 'la ', 'plus ', 'belle ', "s'effeuillera ", 'demain, <br>',
    'Comme ', 'un ', 'cri ', 'dans ', 'la ', 'nuit ', 'qui ', 'meurt ', 'sans ', 'écho. <br>',
    'Le ', 'temps, ', 'ce ', 'vieux ', 'tyran, ', 'nous ', 'guide ', 'par ', 'la ', 'main, <br>',
    'Et ', 'dans ', 'sa ', 'marche ', 'lente, ', 'tout ', 'devient ', 'fardeau. <br><br>',
    'Souviens-toi, ', 'voyageur, ', 'que ', 'le ', 'bonheur ', "s'efface— <br>",
    'Que ', 'la ', 'clarté ', 'des ', 'jours ', 'est ', 'un ', 'leurre ', 'cruel. <br>',
    'Sous ', "l'étoile ", 'du ', 'soir, ', 'tout ', "s'enroule ", 'et ', 'se ', 'casse, <br>',
    'Et ', 'dans ', "l'ombre ", 'qui ', 'vient, ', 'la ', 'vie ', "n'est ", "qu'un ", 'appel. <br><br>', 
    '—Charles Baudelaire'
];  

const poem7 = []; 
const topoem7 = [
    '秋', '風', 'に <br>', 
    '散', 'る', '葉', 'の', '舞', 'い', 'は <br> ', 
    '時', 'の', '声 <br> <br>', 
    '—松尾 芭蕉' 
];

const poem8 = []; 
const topoem8 = [
    'Because ', 'I ', 'could ', 'not ', 'stop ', 'for ', 'Death— <br>',
    'He ', 'kindly ', 'stopped ', 'for ', 'me— <br>',
    'The ', 'Carriage ', 'held ', 'but ', 'just ', 'Ourselves— <br>',
    'And ', 'Immortality. <br><br>',
    'We ', 'slowly ', 'drove— ', 'He ', 'knew ', 'no ', 'haste <br>',
    'And ', 'I ', 'had ', 'put ', 'away <br>',
    'My ', 'labor ', 'and ', 'my ', 'leisure ', 'too, <br>',
    'For ', 'His ', 'Civility— <br><br>',
    'We ', 'passed ', 'the ', 'School, ', 'where ', 'Children ', 'strove <br>',
    'At ', 'Recess— ', 'in ', 'the ', 'Ring— <br>',
    'We ', 'passed ', 'the ', 'Fields ', 'of ', 'Gazing ', 'Grain— <br>',
    'We ', 'passed ', 'the ', 'Setting ', 'Sun— <br>',
    'Or ', 'rather— ', 'He ', 'passed ', 'Us— <br>',
    'The ', 'Dews ', 'drew ', 'quivering ', 'and ', 'Chill— <br>',
    'For ', 'only ', 'Gossamer, ', 'my ', 'Gown— <br>',
    'My ', 'Tippet— ', 'only ', 'Tulle— <br><br>',
    'We ', 'paused ', 'before ', 'a ', 'House ', 'that ', 'seemed <br>',
    'A ', 'Swelling ', 'of ', 'the ', 'Ground— <br>',
    'The ', 'Roof ', 'was ', 'scarcely ', 'visible— <br>',
    'The ', 'Cornice— ', 'in ', 'the ', 'Ground— <br><br>',
    'Since ', 'then— ', "'tis ", 'Centuries— ', 'and ', 'yet <br>',
    'Feels ', 'shorter ', 'than ', 'the ', 'Day <br>',
    'I ', 'first ', 'surmised ', 'the ', 'Horses\' ', 'Heads <br>',
    'Were ', 'toward ', 'Eternity— <br> <br> ', 
    '—Emily Dickinson'
];

const poem9 = []; 
const topoem9 = [
    'Horloge ! ', 'dieu ', 'sinistre, ', 'effrayant, ', 'impassible, <br>',
    'Dont ', 'le ', 'doigt ', 'nous ', 'menace ', 'et ', 'nous ', 'dit : "Souviens-toi ! <br>',
    'Les ', 'vibrantes ', 'Douleurs ', 'dans ', 'ton ', 'cœur ', 'plein ', 'd\'effroi <br>',
    'Se ', 'planteront ', 'bientôt ', 'comme ', 'dans ', 'une ', 'cible ; <br><br>',
    'Le ', 'Plaisir ', 'vaporeux ', 'fuira ', 'vers ', 'l\'horizon <br>',
    'Ainsi ', 'qu\'une ', 'sylphide ', 'au ', 'fond ', 'de ', 'la ', 'coulisse ; <br>',
    'Chaque ', 'instant ', 'te ', 'dévore ', 'un ', 'morceau ', 'du ', 'délice <br>',
    'À ', 'chaque ', 'homme ', 'accordé ', 'pour ', 'toute ', 'sa ', 'saison. <br><br>',
    'Trois ', 'mille ', 'six ', 'cents ', 'fois ', 'par ', 'heure, ', 'la ', 'Seconde <br>',
    'Chuchote : ', 'Souviens-toi ! — ', 'Rapide, ', 'avec ', 'sa ', 'voix <br>',
    'D\'insecte, ', 'Maintenant ', 'dit : ', 'Je ', 'suis ', 'Autrefois, <br>',
    'Et ', 'j\'ai ', 'pompé ', 'ta ', 'vie ', 'avec ', 'ma ', 'trompe ', 'immonde ! <br><br>',
    'Souviens-toi ', 'que ', 'le ', 'Temps ', 'est ', 'un ', 'joueur ', 'avide <br>',
    'Qui ', 'gagne ', 'sans ', 'tricher, ', 'à ', 'tout ', 'coup ! ', 'c\'est ', 'la ', 'loi. <br>',
    'Le ', 'jour ', 'décroît ; ', 'la ', 'nuit ', 'augmente ; ', 'souviens-toi ! <br>',
    'Le ', 'gouffre ', 'a ', 'toujours ', 'soif ; ', 'la ', 'clepsydre ', 'se ', 'vide. <br><br>',
    'Bientôt ', 'sonnera ', 'l\'heure ', 'où ', 'le ', 'divin ', 'Hasard, <br>',
    'Où ', 'l\'auguste ', 'Vertu, ', 'ton ', 'épouse ', 'encor ', 'vierge, <br>',
    'Où ', 'le ', 'Repentir ', 'même (oh ! ', 'la ', 'dernière ', 'auberge !), <br>',
    'Où ', 'tout ', 'te ', 'dira : ', 'Meurs, ', 'vieux ', 'lâche ! ', 'il ', 'est ', 'trop ', 'tard ! <br> <br>', 
    '—Charles Baudelaire'
]; 

const poem10 = [];
const topoem10 = [
    'The ', 'Clock ', 'has ', 'ticked ', 'its ', 'final ', 'chime— <br>',
    'The ', 'Hours ', 'ceased ', 'to ', 'be— <br>',
    'And ', 'all ', 'the ', 'World—stood ', 'still—beside <br>',
    'Eternity’s ', 'decree. <br><br>',
    'The ', 'Sun ', 'no ', 'longer ', 'marks ', 'the ', 'Day— <br>',
    'Nor ', 'Moon—declares ', 'the ', 'Night— <br>',
    'But ', 'in ', 'the ', 'shadows—softly ', 'falls <br>',
    'An ', 'everlasting ', 'Light. <br><br>',
    'The ', 'Seasons ', 'folded—like ', 'a ', 'Quilt— <br>',
    'And ', 'Time, ', 'a ', 'distant ', 'Name— <br>',
    'Yet ', 'Memory—like ', 'Autumn ', 'leaves— <br>',
    'Still ', 'flickers ', 'in ', 'the ', 'Flame. <br><br>',
    'The ', 'hands ', 'that ', 'once ', 'did ', 'trace ', 'the ', 'sky— <br>',
    'Are ', 'resting—folded ', 'tight— <br>',
    'And ', 'every ', 'Tick—a ', 'whispered ', 'breath— <br>',
    'Of ', 'Days—slipped ', 'out ', 'of ', 'sight. <br> <br>',
    '—Emily Dickinson'
];

const totalToppoems = [topoem1, topoem2, topoem3, topoem4, topoem5, topoem6, topoem7, topoem8, topoem9, topoem10];
const totalPoems = [poem1, poem2, poem3, poem4, poem5, poem6, poem7, poem8, poem9, poem10];

let index = 0; 

const hoverElement = document.querySelector('.infobutton');
const hoverTarget = document.querySelector('.info');

const leftSide = document.querySelector('.leftpanel2'); 
const rightSide = document.querySelector('.rightpanel2');
const theLine = document.querySelector('.line');  

hoverElement.addEventListener('mouseover', () => {
    hoverTarget.style.opacity = "1";
    leftSide.classList.add('addblur2'); 
    rightSide.classList.add('addblur1'); 
    theLine.classList.add('addblur1'); 
  });

hoverElement.addEventListener('mouseout', () => {
    hoverTarget.style.opacity = "0";
    leftSide.classList.remove('addblur2'); 
    rightSide.classList.remove('addblur1'); 
    theLine.classList.remove('addblur1'); 
    });

// Function to start displaying the poem and timer
function startMinute() { 
    const poemDiv = document.querySelector(".poem");
    poemDiv.innerHTML = poem1.join(' ');

    const minuteDisplay = document.querySelector(".minute"); 
    const hourDisplay = document.querySelector(".hour"); 
    console.log('Timer and poem display started'); 

    intervalmin = setInterval(() => { 
        // Loop through the poems and display them sequentially
        for (let i = 0; i < totalToppoems.length; i++) {
            const cumulativeLength = totalToppoems.slice(0, i).reduce((sum, topoem) => sum + topoem.length, 0);
            const currentLength = totalToppoems[i].length;

            if (index >= cumulativeLength && index < cumulativeLength + currentLength) {

                if (index >= cumulativeLength + currentLength - 5 && index < cumulativeLength + currentLength) {
                    poemDiv.classList.add('shiny'); 
                } else {
                    poemDiv.classList.remove('shiny');
                }

                if (index === cumulativeLength) {
                    // Reset timer at the beginning of each new poem
                    minutes = 0;
                    hours = 0;
                    minuteDisplay.textContent = String(minutes).padStart(2, '0');
                    hourDisplay.textContent = String(hours).padStart(2, '0');
                } 

                totalPoems[i].push(totalToppoems[i][index - cumulativeLength]);
                poemDiv.innerHTML = totalPoems[i].join(''); 
                index++;
                break; 
            }
        }

        // Reset to the beginning after the last poem
        const totalLength = totalToppoems.reduce((sum, topoem) => sum + topoem.length, 0);
        if (index >= totalLength) {
            index = 0; // Reset to start from poem1
            totalPoems.forEach(poem => poem.length = 0); // Clear all displayed poems
            poemDiv.innerHTML = ''; // Clear the poem display
        }

        // Increment minutes and handle hours increment
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++; 
            hourDisplay.textContent = String(hours).padStart(2, '0'); 
        }

        minuteDisplay.textContent = String(minutes).padStart(2, '0');
    }, 1000); // Adjust this value to change the speed of the display
}

window.onload = startMinute;

