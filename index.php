<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8' />
    <title>Simple UCT Listahanan Information Search</title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <script src='static/js/mapbox-gl.js'></script>
    <link href='static/css/mapbox-gl.css' rel='stylesheet' />
    <script src='static/js/jquery-3.1.1.min.js'></script>
    <link href="static/css/styles.css" rel="stylesheet" />
    <style>
   
    </style>
</head>
<body>
<div id="searchform">
        <form>
            <label for="Province">Province</label>
            <select id="province" name="province">
                <option>--Select Province--</option>
                <option value="BATANES">BATANES</option>
                <option value="CAGAYAN">CAGAYAN</option>
                <option value="ISABELA">ISABELA</option>
                <option value="NUEVA VIZCAYA">NUEVA VIZCAYA</option>
                <option value="QUIRINO">QUIRINO</option>
            </select>
            <label for="Province">Municipality</label>
            <select id="municipality" name="municipality"><option>--Select Municipality--</option></select>
        </form>
        <div id="contents"></div>        
    </div> 
<div id='map'></div>
<script src='static/js/es6-promise.auto.min.js'></script>
<script src="static/js/mapbox-sdk.min.js"></script>
<script src="static/js/main.js"></script>
</body>
</html>