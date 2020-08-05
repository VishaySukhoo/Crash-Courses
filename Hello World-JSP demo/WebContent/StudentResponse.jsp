
<!DOCTYPE html>
<html>
<head>

<title>Student Confirmation Title</title>
</head>
<body>

	<%
	String name = request.getParameter("firstName");
	Cookie nameCookie = new Cookie( "myApp.name",name); //cookies are stored on a clients machine by the web browser...hence the cookie info is browser specific
	nameCookie.setMaxAge(60*60*24*365);
	response.addCookie(nameCookie);
	%>

	The student is confirmed : ${param.firstName } ${param.lastName }
	<!-- OR 
	<%=request.getParameter("firstName")%>
	<%=request.getParameter("lastName")%>  -->
	<%=request.getParameter("country")%>
	${param.gender }
	<br>
	<% String [] langs = request.getParameterValues("languages"); 
	for(String lang : langs){
		out.println("<ul>"+ lang + "</ul>");
	}
	%>
	<br>
	Next Year, if you do not fail, you will be in
	<%= Integer.parseInt(request.getParameter("grade")) + 1 %>
	
	
</body>
</html>