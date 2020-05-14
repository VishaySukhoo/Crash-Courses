<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
Welcome

<%
String name= "";
Cookie [] cookies = request.getCookies(); //reqest an array of cookies from the cliets pc to the server

if(cookies !=null){
	for(Cookie cookie : cookies){
		if(cookie.getName().equals("myApp.name")){
			name = cookie.getValue();
			break;
		}
	}
}
out.println(name);
%>
<form action="StudentResponse.jsp">
		First Name : <input type="text" name="firstName"> <br>
		Last Name : <input type="text" name="lastName"> <br>
		Grade : <input type="number" name="grade"> <br> <input
			type="radio" name="gender" id="male" value="male"> <label
			for="male">Male</label> <input type="radio" name="gender" id="female"
			value="female"> <label for="female">Female</label> <select
			name="country">
			<option>South Africa</option>
			<option>United Kingdom</option>
			<option>China</option>
		</select>
		 <input type="checkbox" name="languages" id="java" value="java">
		 <label for="java">Java</label>
		 <input	type="checkbox" name="languages" id="c#" value="c#">
		  <label for="c#">c#</label>
		   <input type="checkbox" name="languages" id="python" value="python">
		    <label for="python">Python</label> <input
			type="submit" value="Submit">
	</form>
</body>
</html>