import React, { useState } from 'react'
import {motion} from 'framer-motion'

export const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finished React Series',
      isComplete: false,
    },

    {
      id: 2,
      title: 'Go Grocery',
      isComplete: true,
    },

    {
      id: 3,
      title: 'Take over world', 
      isComplete: false,
    }
  ]);

  const [todoInput, setTodoInput] = useState('');
  const [idForTodo, setIdForTodo] = useState(4);


  const addTodo = (event) => {
    event.preventDefault();

      if(todoInput.trim().length === 0){
        return;
      }

    setTodos([...todos, {
      id: idForTodo,
      title: todoInput,
      isComplete: false
    }]);

    setTodoInput('');

    setIdForTodo(prevIdForTodo => prevIdForTodo + 1);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  } 

  
  function handleInput(event) {
    setTodoInput(event.target.value)
  }

  return (
    <div className=' h-full w-full absolute'>

      <div className='max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-12 border px-8 py-10 bg-indigo-500'>
        <div className="">
          <h1 className='mb-3 text-white font-bold text-2xl'>Todo App</h1>
          <form action="#" onSubmit={addTodo}>
            <motion.input type="text" className=' px-1 py-1 border w-full outline-none shadow-lg' placeholder='What do you need to do?' 
              whileHover={{ scale: 1.06 }}
              value={todoInput}
              onChange={handleInput}
            />  
          </form>  
        </div>

       { todos.map((todo, index) => (
        
        <div key={todo.id} className="flex justify-between mt-6">
          <div className='flex justify-between gap-4'>
              <motion.input type="checkbox" className='w-5 '
                 whileHover={{ scale: 1.3 }}
                 whileTap={{ scale: 0.97 }}
              /> 
              <label htmlFor="" className='text-white'>{todo.title}</label>
                    
            </div>

            <motion.button className='border px-2 text-white hover:border-3'
               whileHover={{ scale: 1.3 }}
               whileTap={{ scale: 0.97 }}
               onClick={() => deleteTodo(todo.id)} 
            
            >X</motion.button> 
        
        </div>  ))}


        <hr className='mt-4'/>

        <div className='flex justify-between text-white mt-3 items-center'>
          <motion.button className='px-3 py-1 border border-white text-sm hover:shadow-lg'
             whileHover={{ scale: 1.2 }}
             whileTap={{ scale: 0.97 }}
          
          >Check All</motion.button>
          <p>3 items remaining</p>
        </div>

        <hr className='mt-3'/>

        <div className='mt-3 flex justify-between items-center  '>
          <div className='flex  gap-2'>
                
              <motion.button className='text-white  px-1 border'
                 whileHover={{ scale: 1.2 }}
                 whileTap={{ scale: 0.97 }}
              
              >All</motion.button>
             <motion.button className='text-white  px-1 '
                 whileHover={{ scale: 1.2 }}
                 whileTap={{ scale: 0.97 }}
              
              >Active</motion.button>
              <motion.button className='text-white  px-1 '
                 whileHover={{ scale: 1.2 }}
                 whileTap={{ scale: 0.97 }}
              
              >Completed</motion.button>
          </div>
          
          <motion.button className='border text-white px-1'
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.97 }}
          
          >Clear completed</motion.button>
        </div>


      </div>

    </div>
  )
}


export default App;