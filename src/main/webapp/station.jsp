<%@ page contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<html>
<head>
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/station.css" rel="stylesheet">
	<script src="js/jquery-2.1.1.min.js"></script>
	<script src="js/dialog.js"></script>
	<script src="js/station.js"></script>
</head>
<body>

<%@ include file="header.jsp"%>

<div id="main">

	<div id="action_btn_area">
		<button id="addBtn" class="btn btn-primary btn-sm">添加</button>
		<button id="deleteBtn" class="btn btn-primary btn-sm">删除</button>
		<button id="modifyBtn" class="btn btn-primary btn-sm">修改</button>
	</div>

	<div id="data_table"></div>

</div>

<div id="addDialog" style="display:none">
	
	<div class="adTitle">添加加油站</div>
	<div class="sepLine"></div>
	<div class="adMain">
		<label>名称：</label>
		<input type="text" id="stationName">
	</div>
	<div class="sepLine"></div>
	<div class="adBtnArea">
		<button id="okDialogBtn" class="btn btn-primary btn-sm">添加</button>
		<button id="closeDialogBtn" class="btn btn-primary btn-sm">关闭</button>
	</div>
</div>


<%@ include file="footer.jsp"%>
</body>
</html>