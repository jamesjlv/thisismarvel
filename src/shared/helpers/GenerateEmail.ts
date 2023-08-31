export const GenerateForgotPasswordEmail = (code: number) => ({
  html: `<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body class="bg-light"><div class="container"><div class="card my-10"><div class="card-body"><h3>Esqueceu sua senha?</h3><p>Aqui está o código para você recuperar o seu acesso, informe ele no aplicativo.</p><br><div><p>Código: ${code}</p><br></div></div></div></div></body></html>
`,
  subject: `Código de recuperação - ${code}`,
  text: `Código de recuperação - ${code}`,
});
