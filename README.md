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
<ol>
	<h3>Development ("AC-Clock\Ember.app")</h3>
	<i>If you intend to use the Dev/ Debugging version, you will need Ember-cli Installed.</i>

	<li>Step 1, <i>npm install</i></li>
	<li>Step 2, <i>bower install</i></li>
	<li>Finally, <i>ember server --proxy http://127.0.0.1:3000 </i></li>

	<li>Must Run on Proxy 3000, Otherwise the Server will not connect with Mongo fully. For now manually starting proxy is the way to do it, In a futuer update Asynchronization and AutoProxy will be installed for ease of Access</li>

</ol>
	
