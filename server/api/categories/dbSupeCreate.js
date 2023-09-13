import {createClient} from '@supabase/supabase-js';

export default defineEventHandler(async (event)=>{


  const config = useRuntimeConfig();
  
  const supabase = createClient(config.secret.supabaseUrl, config.secret.supabaseKey)
  const { data, error } = await supabase  .from('categories')
  .insert([
    { id: 6, title: 'Trabalho' },
  ])
  .select()
return{
  data, error
}
  
})