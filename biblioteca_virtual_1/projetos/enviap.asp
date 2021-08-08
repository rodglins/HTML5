<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title>Biblioteca Virtual - Programas e Projetos Sociais</title>
<link href="estilos.css" rel="stylesheet" type="text/css">
</head>

<body>
<table width="760" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <th height="110" valign="top" background="imgs/imghome/barra-superior.jpg" scope="col">
	<iframe id="foo" frameborder="0" height="28" width="760" scrolling="no" src="http://www.cqgp.sp.gov.br/barra/barra.htm"></iframe>
	<table width="100%" height="90"  border="0" align="center" cellpadding="0" cellspacing="0">
        <tr valign="middle">
          <td align="left" valign="middle" scope="col"><p class="pagetitle">&nbsp;<img src="imgs/logo1.jpg"></p></td>
          <td width="121" align="center" valign="middle" scope="col"><img src="imgs/logo_bvpq.gif" width="101" height="28"></td>
          <td width="100" align="center" valign="middle" scope="col"><a href="http://www.saopaulo.sp.gov.br" target="_blank"><img src="imgs/logo_sp.gif" width="80" height="18" border="0"></a></td>
        </tr>
    </table></th>
  </tr>
  <tr>
    <td height="1" bgcolor="#336600"></td>
  </tr>
  <tr>
    <td><table width="100%"  border="0" cellspacing="0" cellpadding="0">
      <tr valign="top">
        <td rowspan="2" id="lateral">          <p class="lateral_titulo">PROGRAMAS POR PERFIL</p>          <p><a href="../cgi-bin/wxis.exe?IsisScript=/projetos/bv/cds.xis&cds=cds&PUBLICO=crian$&format=1&QTDREG=05">Crian&ccedil;as e Adolescentes</a></p>          
          <p>            <a href="../cgi-bin/wxis.exe?IsisScript=/projetos/bv/cds.xis&cds=cds&PUBLICO=desempre$&format=1&QTDREG=05">Desempregados</a></p>          
          <p><a href="../cgi-bin/wxis.exe?IsisScript=/projetos/bv/cds.xis&cds=cds&PUBLICO=familia$&format=1&QTDREG=05">Fam&iacute;lia</a></p>          
          <p><a href="../cgi-bin/wxis.exe?IsisScript=/projetos/bv/cds.xis&cds=cds&PUBLICO=mulher$&format=1&QTDREG=05">Mulheres</a></p> 
<p><a href="../cgi-bin/wxis.exe?IsisScript=/projetos/bv/cds.xis&cds=cds&PUBLICO=especia$&format=1&QTDREG=05">Portadores de necessidades especiais</a></p>         
          <p><a href="../cgi-bin/wxis.exe?IsisScript=/projetos/bv/cds.xis&cds=cds&PUBLICO=preso$&format=1&QTDREG=05">P&uacute;blico Carcer&aacute;rio </a></p>          <p><a href="../cgi-bin/wxis.exe?IsisScript=/projetos/bv/cds.xis&cds=cds&PUBLICO=idoso$&format=1&QTDREG=05">Terceira Idade</a></p>

</td>
        <td><table width="100%"  border="0" cellpadding="0" cellspacing="0" id="menu">
            <tr>
              <td align="right" valign="top" bgcolor="#FFFFFF"><a href="index.htm">home</a> | <a href="sobre.htm">sobre o site</a> | <a href="contato.htm">contato</a> | <a href="http://www.bv.sp.gov.br" target=blank>biblioteca virtual</a></td>
            </tr>
          </table></td>
        </tr>
      <tr>
        <td valign="top" class="pagetxt"><span class="pagemenu">
	        <table width="100%"  border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                    <td class="txt1"><b>FALE CONOSCO </b>                      
                    <p>
<% 
dim var0,var1,var2,var3,var4,var5,var6

var0 = request.form("frmNome")
var1 = request.form("frmEmail") 
var2 = request.form("frmTelefone")
var3 = request.form("frmCidade")
var4 = request.form("frmUF")
var5 = request.form("frmAssunto")
var6 = request.form("frmMensagem")

set correio = server.createobject("CDONTS.NewMail")
mensagem = "Mensagem enviada em " & Now() & vbCRLF & vbCRLF
if var1 = "" then
	correio.from = "biblioteca.virtual@sp.gov.br"
	var1 = "O autor desta correspondencia não indicou um e-mail para resposta"
else
	correio.from = var1
end if
correio.to = "biblioteca.virtual@sp.gov.br"
correio.subject = "Fale Conosco - Projetos e Programas Sociais  "
mensagem = mensagem & vbCRLF & "NOME: " & var0 & vbCRLF

'Informa se o usu&aacute;rio digitou, ou n&atilde;o, a localidade
if var3 <> "" then
	mensagem = mensagem & "CIDADE: " & var3  & " - " & var4 & vbCRLF
end if

'Informa se o usu&aacute;rio digitou, ou n&atilde;o, um telefone de contato
if var2 <> "" then
	mensagem = mensagem & "TELEFONE: " & var2 & vbCRLF
end if

mensagem = mensagem & "E-MAIL: " & var1 & vbCRLF & vbCRLF
mensagem = mensagem & "ASSUNTO: " & var5 & vbCRLF & vbCRLF
mensagem = mensagem & "-------------------------------------------------------------" & vbCRLF & vbCRLF
mensagem = mensagem & "[MENSAGEM DO USUÁRIO]" & vbCRLF & vbCRLF & vbCRLF
mensagem = mensagem & var6 & vbCRLF & vbCRLF
mensagem = mensagem & "-------------------------------------------------------------" & vbCRLF & vbCRLF
correio.Body = mensagem
correio.send
%>
</p>
                    <p align="left"><strong>Prezado(a) <%=request.form("frmNome")%>,</strong></p>
                    <p align="left">Agradecemos o seu contato!</p>
					<p align="left">&nbsp;</p>
					<p align="left">&nbsp;</p>
					<p align="center"><a href="http://www.bibliotecavirtual.sp.gov.br/projetos/">Voltar para a homepage</a></p>										
                    <br></td>
</table>
</td>
</tr>
</table></td>
</tr>
<tr>
<td id="rodape"><b>PROGRAMAS E PROJETOS SOCIAIS </b><br>  
     Esse site permite recuperar informa&ccedil;&otilde;es de programas e projetos sociais mantidos pela administra&ccedil;&atilde;o p&uacute;blica paulista.<br>
    Biblioteca Virtual do Governo do Estado de S&atilde;o Paulo - Casa Civil</td>
  </tr>
  <tr>
    <td height="1" bgcolor="#336600"></td>
  </tr>
  <tr>
    <td>&nbsp;</td>
  </tr>
</table>
</body>
</html>
