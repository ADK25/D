const seatData = {
    '교무실': [
        { name: '', x: 870, y: 150},
        { name: '권진하', x: 870, y: 90, subject: '드로잉, 디자인공예', class: '1-1'},
        { name: '서혜원', x: 870, y: 30, subject: '진로', class: '-'},
        { name: '박신혜', x: 750, y: 150, subject: '영어', class: '-'},
        { name: '김윤아', x: 750, y: 90, subject: '영어', class: '3-5' },
        { name: '구정혜', x: 750, y: 30, subject: '일본어', class: '2-7' },
        { name: '박민수', x: 660, y: 150, subject: '수학', class: '-'},
        { name: '서세림', x: 660, y: 90, subject: '디자인공예', class: '1-8'},
        { name: '장서영', x: 660, y: 30, subject: '국어', class: '-'},
        { name: '정성미', x: 540, y: 150},
        { name: '강경희', x: 540, y: 90, subject: '영상디자인, 조형', class: '-'},
        { name: '이용우', x: 540, y: 30, subject: '워크숍', class: '-'},
        { name: '조정혜', x: 360, y: 150, subject: '수학', class: '1-7'},
        { name: '김지현', x: 360, y: 90, subject: '국어', class: '-'},
        { name: '임설화', x: 360, y: 30, subject: '영어', class: '-'},
        { name: '박영신', x: 240, y: 150, subject: '국어', class: '-'},
        { name: '이혜진', x: 240, y: 90, subject: '수학', class: '2-5' },
        { name: '이은정', x: 240, y: 30, subject: '지구과학', class: '-'},
        { name: '박성국', x: 150, y: 150, subject: '화학', class: '-'},
        { name: '박신애', x: 150, y: 90, subject: '정보', class: '3-4' },
        { name: '김민희', x: 150, y: 30, subject: '생명과학', class: '-'},
        { name: '송지영', x: 30, y: 150},
        { name: '김영임', x: 30, y: 90, subject: '지리', class: '1-6'},
        { name: '민정희', x: 30, y: 30, subject: '사회문화', class: '-'},
        { name: '테이블', x: 480, y: 60, isTable: true},
        { name: '', x: 140, y: 230, isDoor: true},
        { name: '', x: 650, y: 230, isDoor: true},
    ],

    '1학년실': [
        { name: '김수미', x: 40, y: 40, subject: '영상디자인', class: '1-5'},
        { name: '박신희', x: 140, y: 40, subject: '미감비', class: '1-4'},
        { name: '김성숙', x: 140, y: 120},
        { name: '', x: 90, y: 230, isDoor: true }
    ],

    '2학년실': [
        { name: '신혜연', x: 40, y: 40, subject: '사회', class: '2-3'},
        { name: '김민지', x: 140, y: 40, subject: '드로잉, 디자인공예', class: '2-1' },
        { name: '안환', x: 140, y: 120},
        { name: '', x: 90, y: 230, isDoor: true }
    ],

    '3학년실': [
        { name: '김은희', x: 40, y: 40, subject: '영어', class: '-' },
        { name: '서용준', x: 140, y: 120, subject: '드로잉, 수채화', class: '3-1'},
        { name: '김굉미', x: 140, y: 40, subject: '한국사', class: '3-8'},
        { name: '', x: 90, y: 230, isDoor: true }
    ],

    '융합디자인교육부': [
        { name: '강현근', x: 220, y: 40, subject: '사진', class: '-'},
        { name: '이인성', x: 220, y: 100, subject: '조형, 워크숍, 시각디자인', class: '3-6'},
        { name: '김나해', x: 220, y: 160, subject: '디자인공예', class: '2-4'},
        { name: '김채라', x: 40, y: 100, subject: '드로잉, 미감비', class: '3-3' },
        { name: '김성진', x: 40, y: 160, subject: '목공예', class: '3-7'},
        { name: '', x: 180, y: 250, isDoor: true }
    ],
    '체육준비실': [
        { name: '박원달', x: 60, y: 40, subject: '체육', class: '2-2' },
        { name: '이상술', x: 160, y: 40, subject: '체육', class: '-'},
        { name: '임태우', x: 110, y: 100, subject: '체육', class: '-'},
        { name: '', x: 180, y: 230, isDoor: true }
    ],
    '조형예술교육부': [
        { name: '이나영', x: 220, y: 40, subject: '도자공예', class: '-'},
        { name: '이도아', x: 40, y: 40, subject: '드로잉', class: '1-3' },
        { name: '최수혁', x: 220, y: 220, subject: '조형, 기초디자인', class: '1-2'},
        { name: '박수진', x: 220, y: 100, subject: '미술', class: '2-6' },
        { name: '김소연', x: 220, y: 160, subject: '디자인공예, 조형', class: '2-8'},
        { name: '', x: 90, y: 230, isDoor: true }
    ],
     '생활교육부': [
        { name: '강영호', x: 220, y: 160, subject: '음악', class: '-'},
        { name: '이상준', x: 220, y: 100, subject: '조형, 디자인공예', class: '-'},
        { name: '조성배', x: 220, y: 40, subject: '국어', class: '-'},
        { name: '', x: 40, y: 100},
        { name: '안혜진', x: 40, y: 160, subject: '조형, 목공예', class: '3-2'},
        { name: '김종구', x: 40, y: 40, subject: '조소', class: '-'},
        { name: '', x: 230, y: 260, isDoor: true }
    ]
};

function showSeats(department, el){
    document.querySelectorAll('.subject-btn').forEach(btn => btn.classList.remove('active'));
    el.classList.add('active');

    const map = document.getElementById('mapContainer');
    map.innerHTML = '';

    const seats = seatData[department];

    const paddingX = 40;
    const paddingY = 10;
    const maxX = Math.max(...seats.map(s => s.x)) + 100 + paddingX;
    const maxY = Math.max(...seats.map(s => s.y)) + 50 + paddingY; 

    const room = document.createElement('div');
    room.className = 'room';
    room.style.width = `${maxX}px`;
    room.style.height = `${maxY}px`;
    map.appendChild(room);

    seats.forEach(({name, x, y, isTable, isDoor, subject, class: className}) => {
    const div = document.createElement('div');
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;

    if (isTable) {
        div.className = 'table';
        div.innerText = name;
        div.style.transform = 'translate(-50%, -30%)';
    } else if (isDoor) {
        div.className = 'door';
        div.innerText = '🔻';
    } else {
        div.className = 'seat';
        div.innerText = name;

        div.onclick = () => {
            div.classList.add('bounce');
            setTimeout(() => div.classList.remove('bounce'), 300);

            const popup = document.getElementById('popup');
            document.getElementById('popupName').innerText = name;

            if (subject || className) {
                document.getElementById('popupBody').innerText = `과목: ${subject || '-'}\n담임: ${className || '-'}`;
            } else {
                document.getElementById('popupBody').innerText = '선생님의 자리입니다.';
            }

            const rect = div.getBoundingClientRect();
            const containerRect = document.getElementById('mapContainer').getBoundingClientRect();

            popup.style.left = '120px';
            popup.style.top = '300px';
            popup.style.display = 'block';
        };
    }

    room.appendChild(div);
});

    hidePopup();
}

function hidePopup(){
    document.getElementById('popup').style.display = 'none';
}

window.onload = () => {
    const firstBtn = document.querySelector('.subject-btn');
    showSeats('교무실', firstBtn);
};