// JavaScript Document
function showCategorias()
{
	document.writeln ("<div id=\"categorias\">");
	document.writeln ("<a href=\"cat01.html\"><img src=\"imgs/cidadania.jpg\" alt=\"Cidadania\" width=\"122\" height=\"46\" border=\"0\" /></a><p><span><a href=\"cat01.html\">CIDADANIA</a></span><br />Informa��es sobre educa��o, sa�de, emprego e t�picos sobre os direitos das crian�as, dos portadores de necessidades especiais e da terceira idade.</p>");
	document.writeln ("</div>");
	document.writeln ("<div id=\"categorias\">");
	document.writeln ("<a href=\"cat02.html\"><img src=\"imgs/legisla��o.jpg\" alt=\"Legisla��o\" width=\"122\" height=\"46\" border=\"0\"></a><p><span><a href=\"cat02.html\">LEGISLA��O</a></span><br />Acesso �s bases de legisla��o estadual, federal e de munic�pios paulistas; resolu��es de Secretarias e �rg�os p�blicos estaduais.</p>"); //Acesso � legisla��o estadual, federal e de alguns munic�pios paulistas e Secretarias de Estado.
	document.writeln ("</div>");
	document.writeln ("<div id=\"categorias\">");
	document.writeln ("<a href=\"cat03.html\"><img src=\"imgs/governo_sp.jpg\" alt=\"Governo do Estado\" width=\"122\" height=\"47\" border=\"0\"></a><p><span><a href=\"cat03.html\">GOVERNO DO ESTADO</a></span><br />Servi�os p�blicos ao cidad�o, informa��es sobre os sistemas de compras p�blicas e economia do Estado, contato das ouvidorias e Dicion�rio de Libras.</p>"); //Apresenta��o de alguns projetos e programas de destaque executados pelo Governo do Estado.
	document.writeln ("</div>");
	document.writeln ("<div id=\"categorias\">");
	document.writeln ("<a href=\"cat04.html\"><img src=\"imgs/s_paulo.jpg\" alt=\"S�o Paulo\" width=\"122\" height=\"47\" border=\"0\"></a><p><span><a href=\"cat04.html\">S�O PAULO</a></span><br />Conhe�a os s�mbolos oficiais, folclore, hist�ria e aspectos geogr�ficos do Estado; informa��es sobre turismo, mapas e estat�sticas.</p>"); //Conte�dos sobre a hist�ria, geografia e s�mbolos oficiais de S�o Paulo e de pontos de interesse tur�stico no Estado.
	document.writeln ("</div>");
	document.writeln ("<div id=\"categorias\">");
	document.writeln ("<a href=\"cat05.html\"><img src=\"imgs/outros%20temas.jpg\" alt=\"Outros Temas\" width=\"122\" height=\"47\" border=\"0\"></a><p><span><a href=\"cat05.html\">OUTROS TEMAS</a></span><br />Temas diversos sobre meio ambiente, transportes e cria��o de novos neg�cios; orienta��o de pesquisa escolar, acesso �s bibliotecas p�blicas e acervos digitais.</p>"); //Informa��es sobre assuntos relevantes, bibliotecas p�blicas e acesso ao acervo de bibliotecas digitais.
	document.writeln ("</form>"); // Fecha o form da "busca no site" por causa do bug do espa�amento exagerado
	document.writeln ("</div>");
}

function showRodapeHome()
{
document.writeln ("<div id=\"rodape\"><table border=\"0\"><tr><td class=\"rodapetxt\">");
document.writeln ("<span>BIBLIOTECA VIRTUAL DO GOVERNO DO ESTADO DE S�O PAULO</span><br />");
document.writeln ("Servi�o oferecido pela Secretaria Estadual de Comunica��o");
document.writeln ("</td></tr></table></div>");
}