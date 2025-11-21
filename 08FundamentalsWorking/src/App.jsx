import { useState } from "react";

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function handleclick(){
  
  alert("i am clicked");
}





export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'Green' : 'magenta'
      }}
    >
      {product.title}
    </li>
    
  );

  return (
    <>
    <ul>{listItems}</ul>

    <button onClick={handleclick}>click me </button>  { /*Notice how onClick={handleClick} has no parentheses at the end! Do not call the event handler function: you only need to pass it down. React will call your event handler when the user clicks the button. */}


    </>
  );
}


// import { useState } from 'react';

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton />
//       <MyButton />
     
//     </div>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times           { /* Notice how each button “remembers” its own count state and doesn’t affect other buttons. */}
//     </button>
//   );
// }





// export default function MyApp() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }
//    return (
//     <div>
//       <h1>Counters that update together</h1>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </div>
//   );
// }

// function MyButton({ count, onClick }) {
//   return (
//     <button onClick={onClick}>
//       Clicked {count} times
//     </button>
//   );
// }