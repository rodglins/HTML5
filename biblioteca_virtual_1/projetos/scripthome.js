// JavaScript Document
function showCategorias()
{
	document.writeln ("<div id=\"categorias\">");
	document.writeln ("<a href=\"cat01.html\"><img src=\"imgs/cidadania.jpg\" alt=\"Cidadania\" width=\"122\" height=\"46\" border=\"0\" /></a><p><span><a href=\"cat01.html\">CIDADANIA</a></span><br />Informações sobre educação, saúde, emprego e tópicos sobre os direitos das crianças, dos portadores de necessidades especiais e da terceira idade.</p>");
	document.writeln ("</div>");
	document.writeln ("<div id=\"categorias\">");
	document.writeln ("<a href=\"cat02.html\"><img src=\"imgs/legislação.jpg\" alt=\"Legislação\" width=\"122\" height=\"46\" border=\"0\"></a><p><span><a href=\"cat02.html\">LEGISLAÇÃO</a></span><br />Acesso às bases de legislação estadual, federal e de municípios paulistas; resoluções de Secretarias e órgãos públicos estaduais.</p>"); //Acesso à legislação estadual, federal e de alguns municípios paulistas e Secretarias de Estado.
	document.writeln ("</div>");
	document.writeln ("<div id=\"categorias\">");
	document.writeln ("<a href=\"cat03.html\"><img src=\"imgs/governo_sp.jpg\" alt=\"Governo do Estado\" width=\"122\" height=\"47\" border=\"0\"></a><p><span><a href=\"cat03.html\">GOVERNO DO ESTADO</a></span><br />Serviços públicos ao cidadão, informações sobre os sistemas de compras públicas e economia do Estado, contato das ouvidorias e Dicionário de Libras.</p>"); //Apresentação de alguns projetos e programas de destaque executados pelo Governo do Estado.
	document.writeln ("</div>");
	document.writeln ("<div id=\"categorias\">");
	document.writeln ("<a href=\"cat04.html\"><img src=\"imgs/s_paulo.jpg\" alt=\"São Paulo\" width=\"122\" height=\"47\" border=\"0\"></a><p><span><a href=\"cat04.html\">SÃO PAULO</a></span><br />Conheça os símbolos oficiais, folclore, história e aspectos geográficos do Estado; informações sobre turismo, mapas e estatísticas.</p>"); //Conteúdos sobre a história, geografia e símbolos oficiais de São Paulo e de pontos de interesse turístico no Estado.
	document.writeln ("</div>");
	document.writeln ("<div id=\"categorias\">");
	document.writeln ("<a href=\"cat05.html\"><img src=\"imgs/outros%20temas.jpg\" alt=\"Outros Temas\" width=\"122\" height=\"47\" border=\"0\"></a><p><span><a href=\"cat05.html\">OUTROS TEMAS</a></span><br />Temas diversos sobre meio ambiente, transportes e criação de novos negócios; orientação de pesquisa escolar, acesso às bibliotecas públicas e acervos digitais.</p>"); //Informações sobre assuntos relevantes, bibliotecas públicas e acesso ao acervo de bibliotecas digitais.
	document.writeln ("</form>"); // Fecha o form da "busca no site" por causa do bug do espaçamento exagerado
	document.writeln ("</div>");
}

function showRodapeHome()
{
document.writeln ("<div id=\"rodape\"><table border=\"0\"><tr><td class=\"rodapetxt\">");
document.writeln ("<span>BIBLIOTECA VIRTUAL DO GOVERNO DO ESTADO DE SÃO PAULO</span><br />");
document.writeln ("Serviço oferecido pela Secretaria Estadual de Comunicação");
document.writeln ("</td></tr></table></div>");
}