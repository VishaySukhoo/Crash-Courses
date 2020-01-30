<%@page import="java.util.Date"%>
<html>
<body>
	<h3>JPS Basic</h3>

	The time on the server is:
	<%=new Date()%>

	<br> 10 x 2 =
	<%=10 * 2%>
	<br> Is 75 < 20 ?
	<%=75 < 20%>
	<br> Convert String to UpperCase :
	<%=new String("hello").toUpperCase()%>
	<br>
	<!-- It is best to minimize the amount of scriplet in a JSP. rather make use of mvc -->
	Method with For loop
	<%!int sumNums(int numOfTimes) {
		int sum = 0;
		for (int i = 1; i <= 10; i++) {

			sum = sum + i;
		}
		return sum;
	}%>

	Calling method sumNums :
	<%=sumNums(10)%>
</body>
</html>