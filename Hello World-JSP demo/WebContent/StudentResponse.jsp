
<!DOCTYPE html>
<html>
<head>

<title>Student Confirmation Title</title>
</head>
<body>
	The student is confirmed : ${param.firstName } ${param.lastName }
	<!-- OR 
	<%=request.getParameter("firstName")%>
	<%=request.getParameter("lastName")%>  -->
	<%=request.getParameter("country")%>
	${param.gender }
	<br>
	<br>
	Next Year, if you do not fail, you will be in
	<%= Integer.parseInt(request.getParameter("grade")) + 1 %>
	
	
</body>
</html>