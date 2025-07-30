import { useForm } from "react-hook-form";

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white rounded shadow">
            <input
                {...register("nombre", { required: true })}
                placeholder="Nombre"
                className="border p-2 mb-2 w-full"
            />
            {errors.nombre && <span className="text-red-500">Este campo es requerido</span>}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Enviar
            </button>
        </form>
    );
}

