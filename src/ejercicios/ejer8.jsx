export function Ejer8(){
    
    var comentarios = [
        {
            id: 1,
            setup: "What's the best thing about a Boolean?",
            punchline: "Even if you're wrong, you're only off by a bit"
        },
        {
            id: 2,
            setup: "Why do programmers wear glasses?",
            punchline: "Because they need to C#"
        }
    ]
    
    var divs = comentarios.map(joke => 
      <>
      <div>
      <h2>{joke.setup}</h2>
      <p>{joke.punchline}</p>
      </div>
      </>

    );
    return (
      <>
      {divs}
  </>
);
}