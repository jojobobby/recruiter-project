import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const HALF_SECOND_MS = 500;

function Typewriter({text = "", perMS}) {
  const [pointer, setPointer] = useState(0);

  useEffect(() => {
    if (pointer >= text.length)
      return;

    const interval = setInterval(() => {
      setPointer(pointer + 1);
    }, perMS);

    return () => clearInterval(interval);
  }, [pointer, text])

  return (
    <>{text.slice(0, pointer)}</>
  )
}

function App() {
  const [flag, setFlag] = useState("");

  useEffect(() => {
    fetch('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/727562')
      .then(response => response.text())
      .then(text => setFlag(text))
      .catch(error => console.log("Hi recruiter! // for debugging :) "));
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!flag ? 'Loading...' : <Typewriter text={flag} perMS={HALF_SECOND_MS} />}
      </header>
    </div>
  );
}

export default App;

/*

------------------------------------URL SCRIPT-----------------------------------
let chars = [];
document.querySelectorAll('code').forEach(codeTag => {
    codeTag.querySelectorAll('div').forEach(divTag => {
        divTag.querySelectorAll('span').forEach(spanTag => {
            const ielement = spanTag.querySelector('i');
            if (ielement && ielement.hasAttribute("value")) {
                chars.push(ielement.getAttribute("value"));
            }
        });
    });
});

let hiddenUrl = chars.join('');
console.log("url:", hiddenUrl);

------------------------------------FINAL URL------------------------------------
https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/727562

*/
