// import React, { useState, useEffect } from 'react';
// import { Form }  from "../form/form"
// import './style.css';

// export default function App() {
//   const [form, setForm] = useState({
//     name: '',
//     surname: '',
//     age: '',
//     email: ''
//   });
//   const [isDisabledButton, setIsDisabledButton] = useState(true);



//   const handleForm = (id, value) => {
//     const newForm = { ...form, [id]: value };
//     setForm(newForm);
//   };

//   const handleSubmit = () => {
//     alert(
//       `Your name is ${form.name} ${form.surname} and you have ${form.age} years`
//     );
//   };

//   useEffect(() => {
//     // CHECK EMPTYS
//     //  const formFieldsValue = Object.values(form);
//     //  const isSomeFieldEmpty = formFieldsValue.some(field => !field);
//     //  setIsDisabledButton(isSomeFieldEmpty);

//     // CHECK REQUIREDS
//     const requiredFields = formFields.filter(({ required }) => required);
//     const isSomeRequiredFieldEmpty = requiredFields.some(({ value }) => !value);
//     setIsDisabledButton(isSomeRequiredFieldEmpty);
//   }, [form]);
//   console.log(formFields)
  

//   return (
//     <div>
//       {formFields.map(({ id, label, value, required }) => (
//         <Form
//           key={id}
//           id={id}
//           label={label}
//           value={value}
//           onChange={handleForm}
//           required={required}
//         />
//       ))}
//       <p>Los campos marcados con * son obligatorios</p>
//       {
//         <button disabled={isDisabledButton} onClick={handleSubmit}>
//           Crear orden
//         </button>
//       }
//     </div>
//   );
// }