import { supabase } from "$lib/supabaseClient";


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const esposo = data.get('esposo');
        const esposa = data.get('esposa');
        const iglesia = data.get('iglesia');
        const referencia = data.get('ref');

        console.log(esposo);
        console.log(esposa);
        console.log(referencia);

        try{
        const { date, error } = await supabase
            .from('unidos')
            .insert([
                { esposo: esposo, esposa: esposa, iglesia:iglesia, transferencia: referencia},
            ])
            .select()

            return {regAnswer: "Registro exitoso"}
    
        }
        catch{
            console.log(error)
            return {regAnswer: error}

        }

    },
};
