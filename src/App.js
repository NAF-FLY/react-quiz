import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'Какой безалкогольный напиток первым был взят в космос?',
    variants: ['Пепси', 'Фанта', 'Кока-Кола'],
    correct: 2,
  },
  {
    title: 'Из чего сделан самый крепкий дом в “Трех поросятах”?',
    variants: ['Кирпич', 'Палочки', 'Солома'],
    correct: 0,
  },
  {
    title: 'Как называется маленький пластмассовый кусочек на конце шнурка?',
    variants: [
      'Строка',
      'Кружево',
      'Аглет',
    ],
    correct: 2,
  },
  {
    title: 'Сколько длится мгновение?',
    variants: ['60 секунд', '90 секунд', '120 секунд'],
    correct: 1,
  },
  {
    title: 'Как назывался батончик “Сникерс” до его смены названия в 1990 году?',
    variants: ['Marathon', 'Sprint', 'Race'],
    correct: 0,
  },
  {
    title: 'Какая игрушка была первой, которую рекламировали по телевидению?',
    variants: [
      'Барби',
      'Мистер Картофельная Голова',
      'Ракетный Гонщик',
    ],
    correct: 1,
  },
  {
    title: 'Какого цвета была таблетка, которую принимает Нео в фильме “Матрица”?',
    variants: ['Красный', 'Синий', 'Зеленый'],
    correct: 0,
  },
  {
    title: 'Какие животные воспитывали Маугли в “Книге джунглей”?',
    variants: ['Лисы', 'Волки', 'Медведи'],
    correct: 1,
  },
  {
    title: 'Олимпийские игры проводятся каждые сколько лет?',
    variants: [
      'Четыре года',
      'Пять лет',
      'Шесть лет',
    ],
    correct: 0,
  },
  {
    title: 'В какой вид спорта, который играют на метлах в Гарри Поттере?',
    variants: ['Взрывающийся щелчок', 'КвадПод', 'Квиддич'],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({step, question, onClickVariant}) {
  let percentage = Math.round(step / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
          {
            question.variants.map((text, index) => 
            <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
          )}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1)

    if (index === question.correct) {
      setCorrect(correct + 1);
    } 
  }

  return (
    <div className="App">
      {
        step != questions.length ? (<Game step={step} question={question} onClickVariant={onClickVariant}/>
        ) : (
          <Result correct={correct}/>
        )
      }
    </div>
  );
}

export default App;