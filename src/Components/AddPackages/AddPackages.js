import React from 'react';
import { useForm } from "react-hook-form";

const AddPackages = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        // giving alert after successfully adding a package
        alert('package added successfully in Packages')

        // set the add package data to the database
        fetch('https://creepy-zombie-41639.herokuapp.com/addpackage', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }
    return (
        <div>
            <h1 style={{ color: 'green', fontSize: '35px', fontWeight: '600' }} className='mt-5 mb-3'>Please Provide these Information</h1>

            {/* react hook form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' className='p-2 m-2' {...register("name", { required: true })} placeholder='package name' />
                <br />
                <input type='text' className='p-2 m-2'  {...register("desc", { required: true })} placeholder='description' />
                <br />
                <input type='images' className='p-2 m-2'  {...register("img", { required: true })} placeholder='image url' />
                <br />
                <input type='number' className='p-2 m-2'  {...register("price", { required: true })} placeholder='price' />

                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className='btn btn-danger mt-3 mb-2' type="submit" />
            </form>
        </div>
    );
};

export default AddPackages;