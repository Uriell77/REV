import { supabase } from "$lib/supabaseClient";



  import { supabase } from "$lib/supabaseClient";

  export async function load() {
    const { data } = await supabase.from("unidos").select();
    return {
      unidos: data ?? [],
    };
  }





/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const nombre = data.get('nombre');
        const pago = data.get('pagado');

        console.log(nombre);
        console.log(pago);

        try{
            const { date, error } = await supabase
                .from('unidos')
                .update({ estado: pago })
                .eq('esposo', nombre)

            return {regAnswer: "Registro exitoso"}

        }
        catch{
            console.log(error)
            return {regAnswer: error}

        }


    }
};
