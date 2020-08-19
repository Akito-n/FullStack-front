import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const Button = ({ handleClick, text }) => {
//   return <button onClick={handleClick}>{text}</button>;
// };

// const Result = ({ clickCount, good, bad, neutral }) => {
//   if (clickCount !== 0) {
//     return (
//       <div>
//         <p>good{good}</p> <p>neutral{neutral}</p> <p>bad{bad}</p>
//       </div>
//     );
//   }
//   return <div>No Result</div>;
// };

// const Average = ({ average }) => {
//   if (average) {
//   return <div>average {average}</div>
//   }
//   return <></>
// };

// const Positive = ({ positive }) => {
//   if(positive) {
//   return <div>{positive || 0}%</div>}
//   return <></>
// };

// const App = (props) => {
//   const [ good, setGood ] = useState(0);
//   const [ neutral, setNeutral ] = useState(0);
//   const [ bad, setBad ] = useState(0);
//   const [ clickCount, setClickount ] = useState(0);

//   const incrementGood = () => {
//     setClickount(clickCount + 1);
//     setGood(good + 1);
//   };

//   const incrementNeutral = () => {
//     setClickount(clickCount + 1);
//     setNeutral(neutral + 1);
//   };
//   const incrementBad = () => {
//     setClickount(clickCount + 1);
//     setBad(bad + 1);
//   };

//   const average = good - bad / clickCount;

//   const positive = good / clickCount;
//   return (
//     <div>
//       <h1>give feedback</h1>
//       <Button handleClick={incrementGood} text="good" />
//       <Button handleClick={incrementNeutral} text="nutoral" />
//       <Button handleClick={incrementBad} text="bod" />
//       <Result good={good} bad={bad} neutral={neutral} clickCount={clickCount} />
//       <Average average={average} />
//       <Positive positive={positive} />
//     </div>
//   );
// };

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
