// import React, {useState} from "react";

// function ToDoEditForm({ editToDo, ToDoItem }) {



//   const [formData, setFormData] = useState(INITIAL_STATE);

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     addToDo(formData);
//     setFormData(INITIAL_STATE);
//   };

//   const handleChange = evt => {
//     const { name, value } = evt.target;
//     setFormData(data => ({
//       ...data, 
//       [name]: value
//     }));
//   };

//   return (
//     <form onSubmit={ handleSubmit }>
//       <label htmlFor="text">To do: </label>
//       <input
//         id="text"
//         name="text"
//         value={formData.text}
//         onChange={handleChange}
//       />

//       <button>Add a new to do!</button>
//     </form>
//   );

// }

// export default ToDoEditForm;
