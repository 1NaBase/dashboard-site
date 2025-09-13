const { data, error } = await supabase.from("leads").select("*");
const hoje = data.filter(l => new Date(l.created_at).toDateString() === new Date().toDateString()).length;
const semana = data.filter(l => {
  const d = new Date(l.created_at);
  const diff = (new Date() - d) / (1000*60*60*24);
  return diff <= 7;
}).length;

return res.status(200).json({ leadsHoje: hoje, leadsSemana: semana });
