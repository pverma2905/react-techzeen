import './App.css';
import { useForm } from "react-hook-form";
function App() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  function onSubmit(data){
     console.log("submitting the form data", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input className={errors.firstName? 'input-error':''}
         {...register('firstName',
           { required: {value: true, message: "First name is required"},
            minLength: {value:3, message:'Min Length at least 3'},
           maxLength:{value:6, message:'Max Length at atmost 6'},
           pattern:{value:/^[A-Za-z]+$/i, message:"First name is not valid"}
           
           })}/>
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>

      <div>
        <label>Middle Name:</label>
        <input {...register('middleName',{ required: true })}/>
      </div>

      <div>
        <label>Last Name:</label>
        <input className={errors.lastName? 'input-error':''} 
        {...register('lastName',{ 
          required: {value: true, message: "Last name is required"},
            minLength: {value:3, message:'Min Length at least 3'},
           maxLength:{value:6, message:'Max Length at atmost 6'},
           pattern:{value:/^[A-Za-z]+$/i, message:"Last name is not valid"}
         })}/>
         {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br/>
      <input type='submit' disabled={isSubmitting}/>
    </form>
  );
}

export default App;
