# AC-Clock (Animal Crossing Clock)
<b><i>The Dynamic Animal Crossing Clock for your Phone/ Descktop</i></b>
<p>Please refer to the Wiki for more details</p>
<a>https://github.com/Lone-DO/AC-Clock/wiki<a>

<h2>To launch Application, Must use command Line</h2>
<ol>
	<li>Launch Mongodb</li>
	<i>if you dont have it installed already, you'll need to install the community version,<br> then create a new directory like this. (C:\data\db)</i>
	<li>Locate the mongo "Dump" Folder from "Mongo_data"</li>
	<li>Copy the folder into your Mongodb Bin Directory</li>
	<i>normally located (C:\Program Files\MongoDB\Server\3.2\bin)</i>
	<li>launch "mongorestore.exe</li>
	<i>Doing this imports the required BSON data for the site to work as intended</i>
	</ol>
	
	
	<h3>Development ("AC-Clock\Ember.app")</h3>
	<i>If you intend to use the Dev/ Debugging version, You will need "Ruby" & "Compass" installed to properly use grunt as intended. The Command line may notify you as well in case any issues occur</i>
	<i>It is Highly recommended to use the "Public" Folder if you are just using the application.</i>
	<li>Run <i>grunt</i></li>

	<br>
	<h4>Using the Public/Distributed folder</h4>
	<li>Within the Public folder, <i>npm install</i></li>
	<li><i>node server.js</i></li>
	