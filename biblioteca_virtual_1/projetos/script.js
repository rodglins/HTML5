tms=new Array()

//Mostra o submenu no mouseover
function over(n){
	if(typeof(tms[n])!="undefined")clearTimeout(tms[n])
	document.getElementById("s"+n).style.visibility="visible"
}

//Esconde o submenu no mouseout
function out(n){
	tms[n]=setTimeout('document.getElementById("s'+n+'").style.visibility="hidden"',500)
}

function barrasup()
{
document.writeln ("<script type=\"text/javascript\" src=\"http://www.saopaulo.sp.gov.br/barrasp/js/include_centralizada.js.php\"></script>");
document.writeln ("");
}

function showTopo()
{
document.writeln ("<div id=\"logo\">");
document.writeln ("<img src=\"imgs/icone_home.gif\" border=\"0\" alt=\"\" /> <a href=\"http://www.bv.sp.gov.br\">Home</a>&nbsp;|");
document.writeln ("<a href=\"dest.html\">Em Destaque</a>&nbsp;|");
document.writeln ("<a href=\"bv_sobre.html\">Sobre a BV</a>&nbsp;|");
document.writeln ("<a href=\"bv_como.html\">Como Pesquisar</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
/*document.writeln ("<img src=\"imgs/icone_mapa.gif\" border=\"0\" alt=\"\" /> <a href=\"bv_mapa.html\">Mapa do Site</a>&nbsp;&nbsp;&nbsp;");*/
document.writeln ("<img src=\"imgs/icone_mail.gif\" border=\"0\" alt=\"\" /> <a href=\"bv_contato.html\" style=\"color:black; font-weight:bold;\">Fale Conosco</a>");
document.writeln ("</div>");
}

function showMenuAdm()
{
document.writeln ("<div id=\"busca\">");
document.writeln ("<form method=\"get\" name=\"frmSiteSearch\" action=\"search.asp\" onSubmit=\"return CheckForm();\" target=\"_self\">");
document.writeln ("<input name=\"search\" type=\"text\" class=\"buscatxt\" size=\"40\" maxlength=\"40\" />");
document.writeln ("<input type=\"hidden\" name=\"mode\" value=\"allwords\" />");
document.writeln ("<input name=\"submeter\" type=\"submit\" value=\"BUSCAR\" class=\"buscabtn\" />");
document.writeln ("</div>");
document.writeln ("<div id=\"barra\"><img src=\"imgs/barra_azul.jpg\" border=\"0\" alt=\"\" /></div>");
}

function showMenu()
{
document.writeln ("<div id=\"menu\">");
document.writeln ("<div class=\"itemmenu\" onMouseOver=\"over(2)\" onMouseOut=\"out(2)\">");
document.writeln ("<a href=\"cat01.html\">Projetos por perfil</a><br /><div class=\"submenu\" id=\"s2\">");
document.writeln ("<a href=\"c_crianc.html\">Criança e Adolescente</a>");
document.writeln ("<a href=\"c_dconsum.html\">Direitos do Consumidor</a>");
document.writeln ("<a href=\"c_docum.html\">Documentos (RG, CPF, CNH,...)</a>");
document.writeln ("<a href=\"c_educ.html\">Educação</a>");
document.writeln ("<a href=\"c_empr.html\">Emprego e Renda</a>");
document.writeln ("<a href=\"c_pdef.html\">Portadores de Necessidades Especiais</a>");
document.writeln ("<a href=\"c_saude.html\">Saúde</a>");
document.writeln ("<a href=\"c_tidade.html\">Terceira Idade</a>");										
document.writeln ("</div></div><div class=\"itemmenu\" onMouseOver=\"over(3)\" onMouseOut=\"out(3)\">");
document.writeln ("<a href=\"cat02.html\">Projetos por Secretaria</a><br /><div class=\"submenu\" id=\"s3\">");
document.writeln ("<a href=\"l_doe.html\">Diário Oficial do Estado</a>");
document.writeln ("<a href=\"l_legest.html\">Legislação Estadual</a>");
document.writeln ("<a href=\"l_legfed.html\">Legislação Federal</a>");
document.writeln ("<a href=\"l_legmun.html\">Legislação dos Municípios</a>");
document.writeln ("<a href=\"l_res.html\">Portarias, Normas e Resoluções de Secretarias</a>");
document.writeln ("</div></div>");
/*document.writeln ("<div class=\"itemblank\">&nbsp;</div>");*/
document.writeln ("<div class=\"itemprojetos\"><a href=\"http://www.bibliotecavirtual.sp.gov.br/projetos\">Biblioteca Virtual do Governo do Estado de São Paulo</a></div>");
document.writeln ("<div class=\"itembv\" onMouseOver=\"over(1)\" onMouseOut=\"out(1)\">");
document.writeln ("<a href=\"#\">+ Projetos Sociais</a><br /><div class=\"submenu\" id=\"s1\">");
document.writeln ("<a href=\"bv_sobre.html\">Sobre os Programas e Projetos Sociais</a>");
document.writeln ("<a href=\"bv_como.html\">Como Pesquisar</a>");
document.writeln ("<a href=\"bv_historia.html\">Nossa História</a>");
document.writeln ("<a href=\"dest.html\">Assuntos em Destaque</a>");
document.writeln ("</div></div>");
document.writeln ("</form>");
/*document.writeln ("</div><div class=\"itemsiai\"><a href=\"#\">&nbsp;</a></div><br clear=\"all\" /></div>");*/
}

function showRodape()
{
document.writeln ("<div id=\"rodape\"><table border=\"0\"><tr><td class=\"rodapetxt\">");
document.writeln ("<span>BIBLIOTECA VIRTUAL DO GOVERNO DO ESTADO DE SÃO PAULO</span><br />");
document.writeln ("Serviço oferecido pela Secretaria Estadual de Comunicação");
document.writeln ("</td></tr></table></div>");
}

function destAnt()
{
	document.writeln("<div id=\"lateral\">");
	document.writeln("<p class=\"titulo\">DESTAQUES RECENTES</p>");
	document.writeln("<p><a href=\"dest200704.html\">História da Páscoa no Mundo</a><br />");
	document.writeln("(abril/2007)</p>");	
	document.writeln("<p><a href=\"dest200703.html\">O que faz um bibliotecário?</a><br />");
	document.writeln("(março/2007)</p>");	
	document.writeln("<p>&nbsp;</p><p><a href=\"dest.html\">VER TODOS OS DESTAQUES</a></p>");
	document.writeln("</div>");
}