import React from 'react';

function Greetings(props) {
  function lang() {
      if (props.lang === "de") {
      return "Guten Tag,"
    } else if (props.lang === "fr") {
      return "Bonjour,"
    }
  }
  
  return (
      <div>
          <p> {lang()} {props.children}</p> 
      </div>
  );
}

export default Greetings;