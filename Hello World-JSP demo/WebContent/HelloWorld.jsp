<html>
<body>
	<jsp:include page="Header.html"></jsp:include>
	<br> 10 x 2 =
	<%=10 * 2%>
	<br> Is 75 less than 20 ?
	<%=75 < 20%>
	<br> Convert String to UpperCase :
	<%=new String("hello").toUpperCase()%>
	<br>
	<!-- It is best to minimize the amount of scriplet in a JSP. rather make use of mvc(model, view and controller) patterns -->
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

	<jsp:include page="Footer.jsp"></jsp:include>

</body>
</html>