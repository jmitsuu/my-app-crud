import {createClient} from '@supabase/supabase-js';

export default defineEventHandler(async (event)=>{

  const rId = Math.random() * (5614654125 - 20516) + 4256;
  const config = useRuntimeConfig();
  const title = await readBody(event)
  
  const supabase = createClient(config.secret.supabaseUrl, config.secret.supabaseKey)
  const { data, error } = await supabase  .from('categories')
  .insert([
    { id:rId.toFixed(0),  title },
  ])
  .select();
return{
  data, error
}
  
})