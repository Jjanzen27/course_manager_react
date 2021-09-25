import React from 'react';

const Header = ({ course }) => (
  <>
    <h1>{course}</h1>
  </>
);

const Content = ({ parts }) => {
    console.log(parts)
  return (
    <div>
      <Part part={parts[0]}/>
      <Part part={parts[1]}/>
      <Part part={parts[2]}/>
    </div>
  )
}

const Part = ({ part }) => {
  return <p>{part.name} {part.exercises}</p>
}

const Total = ({ parts }) => {
  console.log(parts)
  return <p>Total: {parts.reduce((a, c) => a + c.exercises, 0)}</p>
}

const App = () => {
  const course = {
    name: 'Ladders 101',
    parts: [
      {
        name: 'First steps',
        exercises: 10,
      },
      {
        name: 'Rails',
        exercises: 7,
      },
      {
        name: 'Stairmastery',
        exercises: 14,
      },
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App;
